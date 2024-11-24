<script lang="ts" setup>
import { computed, ref } from 'vue'

import VIcon from '../VIcon/VIcon.vue'

import type { DsfrButtonProps } from './DsfrButton.types'

export type { DsfrButtonProps }

const props = withDefaults(defineProps<DsfrButtonProps>(), {
  size: 'md',
  icon: undefined,
  label: undefined,
  onClick: () => undefined,
})

const sm = computed(() => ['sm', 'small'].includes(props.size))
const md = computed(() => ['md', 'medium'].includes(props.size))
const lg = computed(() => ['lg', 'large'].includes(props.size))

const btn = ref<{ focus: () => void } | null>(null)
const focus = () => {
  btn.value?.focus()
}
defineExpose({ focus })

const dsfrIcon = computed(() => typeof props.icon === 'string' && props.icon.startsWith('fr-icon-'))
const defaultScale = 1.25
const iconProps = computed(() => typeof props.icon === 'string'
  ? { scale: defaultScale, name: props.icon }
  : { scale: defaultScale, ...props.icon },
)
</script>

<template>
  <button
    ref="btn"
    class="fr-btn"
    :class="{
      'fr-btn--secondary': secondary && !tertiary,
      'fr-btn--tertiary': tertiary && !secondary && !noOutline,
      'fr-btn--tertiary-no-outline': tertiary && !secondary && noOutline,
      'fr-btn--sm': sm,
      'fr-btn--md': md,
      'fr-btn--lg': lg,
      'fr-btn--icon-right': !iconOnly && dsfrIcon && iconRight,
      'fr-btn--icon-left': !iconOnly && dsfrIcon && !iconRight,
      'inline-flex': !dsfrIcon,
      reverse: iconRight && !dsfrIcon,
      'justify-center': !dsfrIcon && iconOnly,
      [icon as string]: dsfrIcon,
    }"
    :title="iconOnly ? label : undefined"
    :disabled="disabled"
    :aria-disabled="disabled"
    :style="(!dsfrIcon && iconOnly) ? { 'padding-inline': '0.5rem' } : {}"
    @click="onClick ? onClick($event) : () => {}"
  >
    <VIcon
      v-if="icon && !dsfrIcon"
      v-bind="iconProps"
    />
    <span v-if="!iconOnly">
      {{ label }}
      <!-- @slot Slot par défaut pour le contenu du bouton. Sera dans `<button class="fr-btn"><span">` -->
      <slot />
    </span>
  </button>
</template>

<style scoped>
.inline-flex {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.reverse {
  flex-direction: row-reverse;
}
</style>
