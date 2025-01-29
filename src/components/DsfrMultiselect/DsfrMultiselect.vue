<script lang="ts" setup generic="T extends Object | string | number">
import { computed, onUnmounted, ref } from 'vue'

import { useCollapsable } from '../../composables'
import DsfrButton from '../DsfrButton/DsfrButton.vue'
import DsfrCheckbox from '../DsfrCheckbox/DsfrCheckbox.vue'
import DsfrFieldset from '../DsfrFieldset/DsfrFieldset.vue'
import DsfrInput from '../DsfrInput/DsfrInput.vue'

import type { DsfrMultiSelectProps, DsfrMultiSelectSlots } from './DsfrMultiselect.types'

import { useRandomId } from '@/utils/random-utils'

const props = withDefaults(
  defineProps<DsfrMultiSelectProps<T>>(),
  {
    labelVisible: true,
    labelClass: '',
    hint: '',
    legend: '',
    id: () => useRandomId('multiselect'),
    buttonLabel: '',
    selectAll: false,
    errorMessage: '',
    successMessage: '',
    selectAllLabel: () => ['Tout sélectionner', 'Tout désélectionner'],
    search: false,
    idKey: 'id' as keyof {
      [K in keyof T as T[K] extends string | number ? K : never]: T[K];
    },
    labelKey: 'label' as keyof {
      [K in keyof T as T[K] extends string | number ? K : never]: T[K];
    },
    filteringKeys: () => ['label'] as (keyof T)[],
    maxOverflowHeight: '400px',
  },
)

defineSlots<DsfrMultiSelectSlots<T>>()

const isObjectWithIdKey = (
  option: unknown,
  idKey: keyof T | undefined,
): option is T => {
  return (
    typeof option === 'object' && option !== null && !!idKey && idKey in option
  )
}

const getValueOrId = (
  option: T,
  idKey: keyof T | undefined,
): string | number => {
  if (idKey && isObjectWithIdKey(option, idKey)) {
    const value = option[idKey]
    if (typeof value === 'string' || typeof value === 'number') {
      return value
    }
    throw new Error(
      `The value of idKey ${String(idKey)} is not a string or number.`,
    )
  }

  if (typeof option === 'string' || typeof option === 'number') {
    return option
  }

  throw new Error(
    'Option is not a valid string, number, or object with idKey.',
  )
}

const generateId = (
  option: T,
  id: string,
  idKey: keyof T | undefined,
): string => {
  return `${id}-${getValueOrId(option, idKey)}`
}

const host = ref<InstanceType<typeof DsfrButton> | null>(null)
const expanded = ref(false)
const model = defineModel<(string | number)[]>({ required: true })
const hostWidth = ref(0)

const message = computed(() => {
  return props.errorMessage || props.successMessage
})
const messageType = computed(() => {
  return props.errorMessage ? 'error' : 'valid'
})

const observations: (() => void)[] = []

const {
  collapse,
  collapsing,
  cssExpanded,
  doExpand,
  onTransitionEnd,
} = useCollapsable()

const getAllCheckbox = (): NodeListOf<HTMLElement> =>
  document.querySelectorAll(`[id^="${props.id}-"][id$="-checkbox"]`)

const isVisible = ref(false)
const searchInput = ref('')

function handleKeyDownEscape (event: KeyboardEvent) {
  if (event.key === 'Escape') {
    close()
  }
}

function handleClickOutside (event: MouseEvent) {
  const element = event.target as HTMLElement
  if (!host.value?.$el.contains(element) && !collapse.value?.contains(element)) {
    close()
  }
}

function observeElementSize (
  element: HTMLElement,
  callback: (element: HTMLElement, entry: ResizeObserverEntry) => void,
) {
  if (window.ResizeObserver) {
    const resizeObserver = new window.ResizeObserver((entries) => {
      for (const entry of entries) {
        callback(element, entry)
      }
    })

    resizeObserver.observe(element)

    return () => {
      resizeObserver.unobserve(element)
      resizeObserver.disconnect()
    }
  }
  return () => {}
}

function updateSize (element: HTMLElement) {
  const rect = element.getBoundingClientRect()
  if (rect.width !== hostWidth.value) {
    hostWidth.value = rect.width
  }
}

function open () {
  expanded.value = true
  isVisible.value = true
  if (host.value) {
    observations.push(observeElementSize(host.value.$el, updateSize))
  }
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', handleKeyDownEscape)
  setTimeout(() => {
    doExpand(true)
  }, 100)
}

function close () {
  expanded.value = false
  doExpand(false)
  setTimeout(() => {
    isVisible.value = false
  }, 300)
  clean()
}

const handleClick = async () => {
  if (isVisible.value) {
    close()
  } else {
    open()
  }
}

function clean () {
  while (observations.length) {
    const observation = observations.pop()
    if (observation) {
      observation()
    }
  }
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('keydown', handleKeyDownEscape)
}

const filteredOptions = computed(() =>
  props.options.filter((option) => {
    if (typeof option === 'object' && option !== null) {
      return props.filteringKeys.some((key) =>
        `${option[key]}`
          .toLowerCase()
          .includes(searchInput.value.toLowerCase()),
      )
    }
    return `${option}`.toLowerCase().includes(searchInput.value.toLowerCase())
  }),
)

const isAllSelected = computed(() => {
  if (props.modelValue.length < filteredOptions.value.length) {
    return false
  }

  return filteredOptions.value.every((option) => {
    const value = getValueOrId(option, props.idKey)
    return props.modelValue.includes(value)
  })
})

const handleClickSelectAllClick = () => {
  const modelSet = new Set<string | number>(model.value || [])

  if (isAllSelected.value) {
    filteredOptions.value.forEach((option) => {
      const value = getValueOrId(option, props.idKey)
      modelSet.delete(value)
    })
  } else {
    filteredOptions.value.forEach((option) => {
      const value = getValueOrId(option, props.idKey)
      modelSet.add(value)
    })
  }

  model.value = Array.from(modelSet)
}

const handleFocusFirstCheckbox = (event: KeyboardEvent) => {
  const [firstCheckbox] = getAllCheckbox()
  if (firstCheckbox) {
    event.preventDefault()
    firstCheckbox.focus()
  }
}

const handleFocusNextCheckbox = (event: KeyboardEvent) => {
  event.preventDefault()
  const checkboxes = getAllCheckbox()
  const activeElement = document.activeElement as HTMLElement
  const currentIndex = Array.from(checkboxes).indexOf(activeElement)

  if (currentIndex !== -1) {
    const nextIndex = (currentIndex + 1) % checkboxes.length
    checkboxes[nextIndex].focus()
  }
}

const handleFocusPreviousCheckbox = (event: KeyboardEvent) => {
  event.preventDefault()
  const checkboxes = getAllCheckbox()
  const activeElement = document.activeElement as HTMLElement
  const currentIndex = Array.from(checkboxes).indexOf(activeElement)

  if (currentIndex !== -1) {
    const previousIndex =
      (currentIndex - 1 + checkboxes.length) % checkboxes.length
    checkboxes[previousIndex].focus()
  }
}

const handleFocusNextElementUsingTab = (event: KeyboardEvent) => {
  const checkboxes = getAllCheckbox()
  const activeElement = document.activeElement as HTMLElement
  const currentIndex = Array.from(checkboxes).indexOf(activeElement)
  if (currentIndex + 1 === checkboxes.length && host.value && !event.shiftKey) {
    close()
  }
}

const handleFocusPreviousElement = (event: KeyboardEvent) => {
  const currentElement = document.activeElement as HTMLElement
  if (event.shiftKey && currentElement === host.value?.$el) {
    close()
  }
}

onUnmounted(() => {
  clean()
})

const defaultButtonLabel = computed(() => {
  const nbElements = model.value?.length ?? 0
  const noElements = nbElements === 0
  const severalElements = nbElements > 1

  if (noElements) {
    return 'Sélectionner une option'
  }
  return `${nbElements} option${severalElements ? 's' : ''} sélectionnée${severalElements ? 's' : ''}`
})

const finalLabelClass = computed(() => [
  'fr-label',
  { invisible: !props.labelVisible },
  props.labelClass,
])
</script>

<template>
  <div
    class="fr-select-group"
    :class="{ [`fr-select-group--${messageType}`]: message }"
  >
    <label
      :class="finalLabelClass"
      :for="id"
    >
      <slot name="label">
        {{ label }}
        <slot name="required-tip">
          <span
            v-if="'required' in $attrs && $attrs.required !== false"
            class="required"
          />
        </slot>
      </slot>

      <span
        v-if="props.hint || $slots.hint?.()"
        class="fr-hint-text"
      >
        <slot name="hint">{{ props.hint }}</slot>
      </span>
    </label>

    <DsfrButton
      :id="props.id"
      ref="host"
      type="button"
      v-bind="$attrs"
      class="fr-select fr-multiselect"
      :aria-expanded="expanded"
      :aria-controls="`${props.id}-collapse`"
      :class="{
        'fr-multiselect--is-open': expanded,
        [`fr-select--${messageType}`]: message,
      }"
      @click="handleClick"
      @keydown.shift.tab="handleFocusPreviousElement"
    >
      <slot name="button-label">
        {{ props.buttonLabel || defaultButtonLabel }}
      </slot>
    </DsfrButton>
    <!-- collapse -->
    <div
      v-if="isVisible"
      :id="`${props.id}-collapse`"
      ref="collapse"
      :style="{
        '--width-host': `${hostWidth}px`,
      }"
      class="fr-multiselect__collapse fr-collapse"
      :class="{ 'fr-collapse--expanded': cssExpanded, 'fr-collapsing': collapsing }"
      @transitionend="onTransitionEnd(expanded)"
    >
      <p
        :id="`${id}-text-hint`"
        class="fr-sr-only"
      >
        Utilisez la tabulation (ou les touches flèches) pour naviguer dans
        la liste des suggestions
      </p>
      <ul
        v-if="selectAll"
        class="fr-btns-group"
      >
        <li>
          <DsfrButton
            type="button"
            name="select-all"
            secondary
            size="sm"
            :disabled="filteredOptions.length === 0"
            @click="handleClickSelectAllClick"
            @keydown.shift.tab="handleFocusPreviousElement"
          >
            <span
              class="fr-multiselect__search__icon"
              :class="
                isAllSelected
                  ? 'fr-icon-close-circle-line'
                  : 'fr-icon-check-line'"
            />
            {{ props.selectAllLabel[isAllSelected ? 1 : 0] }}
          </DsfrButton>
        </li>
      </ul>
      <div
        v-if="props.search"
        class="fr-input-group"
      >
        <div class="fr-input-wrap fr-icon-search-line">
          <DsfrInput
            v-model="searchInput"
            :aria-describedby="`${props.id}-text-hint`"
            :aria-controls="`${props.id}-checkboxes`"
            aria-live="polite"
            placeholder="Rechercher"
            type="text"
            @keydown.down="handleFocusFirstCheckbox"
            @keydown.right="handleFocusFirstCheckbox"
            @keydown.tab="handleFocusPreviousElement"
          />
        </div>
        <div
          class="fr-messages-group"
          aria-live="assertive"
        />
      </div>
      <DsfrFieldset
        :id="`${props.id}-checkboxes`"
        class="fr-multiselect__collapse__fieldset"
        aria-live="polite"
        :style="{ '--maxOverflowHeight': `${props.maxOverflowHeight}` }"
        :legend="props.legend"
        :legend-id="`${props.id}-checkboxes-legend`"
      >
        <slot name="legend" />
        <div
          v-for="option in filteredOptions"
          :key="`${generateId(option as T, id, props.idKey)}-checkbox`"
          class="fr-fieldset__element"
        >
          <div class="fr-checkbox-group fr-checkbox-group--sm">
            <DsfrCheckbox
              :id="`${generateId(option as T, id, props.idKey)}-checkbox`"
              v-model="model"
              :value="getValueOrId(option as T, props.idKey)"
              :name="`${generateId(option as T, id, props.idKey)}-checkbox`"
              small
              @keydown.down="handleFocusNextCheckbox"
              @keydown.right="handleFocusNextCheckbox"
              @keydown.up="handleFocusPreviousCheckbox"
              @keydown.left="handleFocusPreviousCheckbox"
              @keydown.tab="handleFocusNextElementUsingTab"
            >
              <template #label>
                <slot
                  name="checkbox-label"
                  :option="option as T"
                >
                  {{ getValueOrId(option as T, props.labelKey) }}
                </slot>
              </template>
            </DsfrCheckbox>
          </div>
        </div>
      </DsfrFieldset>
      <div v-if="filteredOptions.length === 0">
        <slot name="no-results">
          Pas de résultat
        </slot>
      </div>
      <!-- end collapse -->
    </div>
    <p
      v-if="message"
      :id="`select-${messageType}-desc-${messageType}`"
      :class="`fr-${messageType}-text`"
    >
      {{ message }}
    </p>
  </div>
</template>

<style scoped>
.fr-multiselect {
  text-align: left;
  background-image: none;
  display: inline-flex;
  flex-direction: row;
  padding: 0.75rem 1rem;
}

.fr-multiselect::after {
  --icon-size: 1rem;
  background-color: currentColor;
  content: "";
  display: inline-block;
  flex: 0 0 auto;
  height: 1rem;
  height: var(--icon-size);
  margin-left: auto;
  margin-right: 0;
  -webkit-mask-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0ibTEyIDEzLjE3MiA0Ljk1LTQuOTUgMS40MTQgMS40MTRMMTIgMTYgNS42MzYgOS42MzYgNy4wNSA4LjIyMmw0Ljk1IDQuOTVaIi8+PC9zdmc+);
  mask-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0ibTEyIDEzLjE3MiA0Ljk1LTQuOTUgMS40MTQgMS40MTRMMTIgMTYgNS42MzYgOS42MzYgNy4wNSA4LjIyMmw0Ljk1IDQuOTVaIi8+PC9zdmc+);
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
  transition: transform 0.3s;
  vertical-align: calc(0.375em - 0.5rem);
  vertical-align: calc((0.75em - var(--icon-size)) * 0.5);
  width: 1rem;
  width: var(--icon-size);
  margin-top: auto;
  margin-bottom: auto;
}

.fr-multiselect--is-open::after {
  transform: rotate(-180deg);
}

.fr-multiselect__search__icon {
  margin-right: 1rem;
}

.fr-multiselect__collapse {
  z-index: 1;
  position: absolute;
  transform-origin: left top;
  width: var(--width-host);
  padding: 1rem;
  margin-top: 0.25rem;
  background-color: var(--background-overlap-grey);
  filter: drop-shadow(var(--overlap-shadow));
}

.fr-multiselect__collapse__fieldset {
  max-height: var(--maxOverflowHeight);
  overflow: auto;
}

.fr-multiselect__collapse__fieldset label {
  color: inherit;
}
</style>
