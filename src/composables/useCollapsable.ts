import { ref } from 'vue'

/*
 * Reproduce the DSFR fr-collapse behavior
 */
export const useCollapsable = () => {
  const collapse = ref<HTMLElement | undefined>()
  const collapsing = ref(false)
  const cssExpanded = ref(false)

  /**
   * @see https://github.com/GouvernementFR/dsfr/blob/main/src/core/script/collapse/collapse.js#L61
   * @return void
   */
  const adjust = (): void => {
    if (!collapse.value) {
      return
    }
    collapse.value.style.setProperty('--collapser', 'none')
    const height = collapse.value.offsetHeight
    collapse.value.style.setProperty('--collapse', `${-height}px`)
    collapse.value.style.setProperty('--collapser', '')
  }

  /**
   * @param {boolean} newValue
   * @return void
   */
  const doExpand = (newValue: boolean): void => {
    if (!collapse.value) {
      return
    }
    if (newValue === true) {
      // unbound
      // @see https://github.com/GouvernementFR/dsfr/blob/main/src/dsfr/core/script/collapse/collapse.js
      collapse.value.style.setProperty('--collapse-max-height', 'none')
    }
    // We need to wait for the next RAF to be sure the CSS variable will be set
    // DSFR use RAF too https://github.com/GouvernementFR/dsfr/blob/main/src/dsfr/core/script/api/modules/render/renderer.js#L22
    window.requestAnimationFrame(() => {
      collapsing.value = true
      adjust()
      // We need to wait for the next RAF to be sure the animation will be triggered
      window.requestAnimationFrame(() => {
        cssExpanded.value = newValue
      })
    })
  }

  /**
   * @see https://github.com/GouvernementFR/dsfr/blob/main/src/dsfr/core/script/collapse/collapse.js#L25
   * @param {boolean} expanded
   * @param {boolean} focusFirstAnchor
   * @return void
   */
  const onTransitionEnd = (expanded: boolean, autoFocus = true): void => {
    collapsing.value = false
    if (autoFocus) {
      collapse.value?.querySelector('a')?.focus()
    }
    if (collapse.value && expanded === false) {
      collapse.value.style.removeProperty('--collapse-max-height')
    }
  }

  return {
    collapse,
    collapsing,
    cssExpanded,
    doExpand,
    adjust,
    onTransitionEnd,
  }
}
