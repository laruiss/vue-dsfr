<script lang="ts" setup>
import type { DsfrFieldsetProps } from './DsfrFieldset.types'

export type { DsfrFieldsetProps }

withDefaults(defineProps<DsfrFieldsetProps>(), {
  legend: '',
  legendId: '',
  legendClass: '',
  hint: '',
  hintClass: '',
})

defineSlots<{
  default: () => any
  legend: () => any
  hint: () => any
}>()
</script>

<template>
  <fieldset class="fr-fieldset">
    <legend
      v-if="legend || $slots.legend?.()"
      :id="legendId"
      class="fr-fieldset__legend"
      :class="legendClass"
    >
      {{ legend }}
      <!-- @slot Slot pour le contenu du titre du `fieldset` (sera dans `<legend class="fr-fieldset__legend">`). Une props du même nom est utilisable pour du texte simple sans mise en forme. -->
      <slot name="legend" />
    </legend>
    <div
      v-if="hint || $slots.hint?.()"
      class="fr-fieldset__element"
    >
      <span
        class="fr-hint-text"
        :class="hintClass"
      >
        {{ hint }}
        <!-- @slot Slot pour le contenu de l’indice (sera dans `<span class="fr-hint-text">` qui sera dans `</legend>`). Une **props du même nom est utilisable pour du texte simple** sans mise en forme. -->
        <slot name="hint" />
      </span>
    </div>
    <div class="fr-fieldset__element">
      <!-- @slot Slot par défaut pour le contenu du fieldset (sera dans `<div class="fr-fieldset__element">`) -->
      <slot />
    </div>
  </fieldset>
</template>
