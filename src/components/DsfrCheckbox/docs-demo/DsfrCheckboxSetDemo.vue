<script lang="ts" setup>
import { ref } from 'vue'

import DsfrCheckboxSet from '../DsfrCheckboxSet.vue'
import type { DsfrCheckboxProps } from '../DsfrCheckbox.types'

const modelValue1 = ref([])
const modelValue2 = ref([])
const modelValue3 = ref([])
const modelValue4 = ref([])
const modelValue5 = ref([])
const modelValue6 = ref([])

const options1: Omit<DsfrCheckboxProps, 'modelValue'>[] = [
  {
    label: 'Première valeur',
    value: 'une chaîne en premier',
    id: 'name1-1',
    name: 'name1-1',
    hint: 'La première valeur est une chaîne de caractères',
  },
  {
    label: 'Deuxième valeur',
    value: 42,
    id: 'name1-2',
    name: 'name1-2',
    hint: 'La valeur est ici un chiffre',
  },
  {
    label: 'Troisième valeur',
    value: { foo: 'foo', bar: 42 },
    id: 'name1-3',
    name: 'name1-3',
    hint: 'Et ici la valeur est un littéral objet',
  },
]

const options2 = structuredClone(options1).map(option => Object.fromEntries(
  Object.entries(option).map(([key, value]) => [key, ['id', 'name'].includes(key) ? (value as string).replace('name1', 'name2') : value]),
)) as Omit<DsfrCheckboxProps, 'modelValue'>[]

const options3 = structuredClone(options1).map(option => Object.fromEntries(
  Object.entries(option).map(([key, value]) => [key, ['id', 'name'].includes(key) ? (value as string).replace('name1', 'name3') : value]),
)) as Omit<DsfrCheckboxProps, 'modelValue'>[]

const options4 = structuredClone(options1).map(option => Object.fromEntries(
  Object.entries(option).filter(([key]) => key !== 'hint').map(([key, value]) => [key, ['id', 'name'].includes(key) ? (value as string).replace('name1', 'name4') : value]),
)) as Omit<DsfrCheckboxProps, 'modelValue'>[]

const options5 = structuredClone(options1).map(option => Object.fromEntries(
  Object.entries(option).filter(([key]) => key !== 'hint').map(([key, value]) => [key, ['id', 'name'].includes(key) ? (value as string).replace('name1', 'name5') : value]),
)) as Omit<DsfrCheckboxProps, 'modelValue'>[]

const options6 = structuredClone(options1).map(option => Object.fromEntries(
  Object.entries(option).filter(([key]) => key !== 'hint').map(([key, value]) => [key, ['id', 'name'].includes(key) ? (value as string).replace('name1', 'name6') : value]),
)) as Omit<DsfrCheckboxProps, 'modelValue'>[]

const errorMessage = 'Message d’erreur'
const validMessage = 'Message de validation'
</script>

<template>
  <div class="fr-container fr-my-2v">
    <div class="fr-my-2v">
      <DsfrCheckboxSet
        v-model="modelValue1"
        legend="Groupe de cases à cocher simple"
        :options="options1"
      />
      <p>
        modelValue1: {{ modelValue1 }}
      </p>
    </div>

    <div class="fr-my-2v">
      <DsfrCheckboxSet
        v-model="modelValue2"
        legend="Groupe de cases à cocher avec erreur"
        :options="options2"
        :error-message="errorMessage"
      />
      <p>
        modelValue2: {{ modelValue2 }}
      </p>
    </div>

    <div class="fr-my-2v">
      <DsfrCheckboxSet
        v-model="modelValue3"
        legend="Groupe de cases à cocher avec message de validation"
        :options="options3"
        :valid-message="validMessage"
      />
      <p>
        modelValue3: {{ modelValue3 }}
      </p>
    </div>

    <div class="fr-my-2v">
      <DsfrCheckboxSet
        v-model="modelValue4"
        legend="Groupe de cases à cocher en ligne"
        :options="options4"
        inline
      />
      <p>
        modelValue4: {{ modelValue4 }}
      </p>
    </div>

    <div class="fr-my-2v">
      <DsfrCheckboxSet
        v-model="modelValue5"
        legend="Groupe de cases à cocher en ligne avec erreur"
        :options="options5"
        inline
        error-message="Message d’erreur"
      />
      <p>
        modelValue5: {{ modelValue5 }}
      </p>
    </div>

    <div class="fr-my-2v">
      <DsfrCheckboxSet
        v-model="modelValue6"
        legend="Groupe de cases à cocher en ligne avec erreur"
        :options="options6"
        inline
        valid-message="Message de validation"
      />
      <p>
        modelValue6: {{ modelValue6 }}
      </p>
    </div>
  </div>
</template>
