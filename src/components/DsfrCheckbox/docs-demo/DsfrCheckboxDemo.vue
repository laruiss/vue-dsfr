<script lang="ts" setup>
import { ref } from 'vue'

import DsfrCheckbox from '../DsfrCheckbox.vue'

const hint = 'Indication pour ce champ'
const modelValue = ref(undefined)

const errorMessage = 'Message d’erreur'
const validMessage = 'Message de validation'
</script>

<template>
  <div class="fr-container fr-my-2v">
    <DsfrCheckbox
      v-model="modelValue"
      value="valeur 1"
      name="checkbox-simple"
      label="Case à cocher simple"
    />
    {{ modelValue }}

    <DsfrCheckbox
      v-model="modelValue"
      :value="42"
      name="checkbox-disabled"
      label="Case à cocher désactivée"
      disabled
    />

    <DsfrCheckbox
      v-model="modelValue"
      :value="{ foo: 'foo' }"
      name="checkbox-hint"
      label="Case à cocher avec indication"
      :hint="hint"
    />

    <DsfrCheckbox
      v-model="modelValue"
      name="obligatoire"
      value="obligatoire"
      label="Case à cocher obligatoire"
      required
      :hint="hint"
    />

    <DsfrCheckbox
      v-model="modelValue"
      name="checkbox-required-custom"
      value="custom"
      label="Case à cocher obligatoire personnalisée"
      required
      :hint="hint"
    >
      <template #required-tip>
        <em class="required">&nbsp;(obligatoire)</em>
      </template>
    </DsfrCheckbox>

    <DsfrCheckbox
      v-model="modelValue"
      name="checkbox-error"
      value="avec erreur"
      label="Case à cocher avec message d’erreur"
      required
      :hint="hint"
      :error-message="errorMessage"
    />

    <DsfrCheckbox
      v-model="modelValue"
      name="checkbox-valid"
      value="valide"
      label="Case à cocher avec message de validation"
      required
      :hint="hint"
      :valid-message="validMessage"
    />

    <DsfrCheckbox
      v-model="modelValue"
      name="checkbox-readonly"
      value="valide"
      label="Case à cocher en lecture seule"
      required
      readonly
      :hint="hint"
    />
  </div>
</template>

<style scoped>
.required {
  color: #f60700;
}
</style>
