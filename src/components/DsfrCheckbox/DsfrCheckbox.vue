<script lang="ts" setup>
import { computed } from 'vue'

import { useRandomId } from '../../utils/random-utils'

import type { DsfrCheckboxProps } from './DsfrCheckbox.types'

export type { DsfrCheckboxProps }

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<DsfrCheckboxProps>(), {
  id: () => useRandomId('basic', 'checkbox'),
  hint: '',
  errorMessage: '',
  validMessage: '',
  label: '',
  readonlyOpacity: 0.75,
})

const message = computed(() => props.errorMessage || props.validMessage)

const additionalMessageClass = computed(() => props.errorMessage ? 'fr-error-text' : 'fr-valid-text')
const modelValue = defineModel()
</script>

<template>
  <div
    class="fr-fieldset__element"
    :class="{ 'fr-fieldset__element--inline': inline, readonly }"
  >
    <div
      class="fr-checkbox-group"
      :class="{
        'fr-checkbox-group--error': errorMessage,
        'fr-checkbox-group--valid': !errorMessage && validMessage,
        'fr-checkbox-group--sm': small,
      }"
    >
      <input
        :id="id"
        v-model="modelValue"
        :name="name"
        type="checkbox"
        :value="value"
        :checked="modelValue === true || (Array.isArray(modelValue) && modelValue.includes(value))"
        :required
        v-bind="$attrs"
        :data-testid="`input-checkbox-${id}`"
        :data-test="`input-checkbox-${id}`"
        :tabindex="readonly ? -1 : undefined"
      >
      <label
        :for="id"
        class="fr-label"
      >
        <!-- @slot Slot pour personnaliser tout le contenu de la balise <label> cf. [DsfrInput](/?path=/story/composants-champ-de-saisie-champ-simple-dsfrinput--champ-avec-label-personnalise). Une **props porte le même nom pour un label simple** (texte sans mise en forme) -->
        <slot name="label">
          {{ label }}
          <!-- @slot Slot pour indiquer que le champ est obligatoire. Par défaut, met une astérisque si `required` est à true (dans un `<span class="required">`) -->
          <slot name="required-tip">
            <span
              v-if="required"
              class="required"
            >&nbsp;*</span>
          </slot>
        </slot>

        <span
          v-if="hint"
          class="fr-hint-text"
        >
          {{ hint }}
        </span>
      </label>
      <div
        v-if="message"
        class="fr-messages-group"
        aria-live="assertive"
        role="alert"
      >
        <p
          class="fr-message--info  flex  items-center"
          :class="additionalMessageClass"
        >
          {{ message }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fr-fieldset__element.readonly {
  pointer-events: none;
  cursor: not-allowed;
  opacity: v-bind('readonlyOpacity');
}
</style>
