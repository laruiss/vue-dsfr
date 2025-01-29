<script setup lang="ts">
import pDebounce from 'p-debounce'
import { ref, watch } from 'vue'

import AsyncButton from '../components/AsyncButton.vue'
import FdrAutoComplete from '../components/FdrAutoComplete.vue'
import useToaster from '../composables/use-toaster'

defineProps({})

const toaster = useToaster()

/**
 * @async
 * @function
 *
 * @params {string} query
 *
 * @returns {Promise.<CommuneResponse[]>} - Promesse contenant la liste des communes correspondant à la recherche
 */
const getCityListByQuery = (query) =>
  fetch(
    `https://geo.api.gouv.fr/communes?nom=${query}&fields=codesPostaux`,
  ).then((res) => res.json())

/**
 * @async
 * @function
 *
 * @params {string} query
 *
 * @returns {Promise.<string[]>} - Promesse contenant la liste des communes associé à son code postal
 *                                 sous la forme "Nom (codePostal)". Une même ville peut apparaître plusieurs fois
 *                                 si elle a plusieurs codes postaux.
 */
const getCityListWithZipCodeByQuery = async (query) =>
  (await getCityListByQuery(query))
    .map(({ nom, codesPostaux }) => {
      if (codesPostaux.length === 1) {
        return `${nom} (${codesPostaux[0]})`
      }

      return codesPostaux.map((codePostal) => `${nom} (${codePostal})`)
    })
    .flat()

const cityList = ref([])
const cityQuery = ref('')
watch(
  cityQuery,
  pDebounce(async (query) => {
    cityList.value =
      cityQuery.value === '' ? [] : await getCityListWithZipCodeByQuery(query)
  }, 300),
)

const selectAddress = (address) => {
  console.log(address) // eslint-disable-line no-console
}

const isLoading = ref(false)
const disabled = ref(false)

const onClick = () => {
  isLoading.value = true
  disabled.value = true
  setTimeout(() => {
    disabled.value = false
    isLoading.value = false
  }, 2000)
}

const activeAccordion = ref(-1)

const selection = ref([])
const headers = [
  {
    key: 'id',
    label: 'ID',
  },
  {
    key: 'name',
    label: 'Name',
  },
  {
    key: 'email',
    label: 'Email',
  },
]
const rows = [
  [1, 'John Doe', 'john.doe@gmail.com'],
  [2, 'Jane Doe', 'jane.doe@gmail.com'],
  [3, 'James Bond', 'james.bond@mi6.gov.uk'],
]
</script>

<template>
  <FdrAutoComplete
    v-model="cityQuery"
    :options="cityList"
    autocomplete="nothing"
    label="Ville ou CP (autocompletion)"
    label-visible
    placeholder="Commencez à taper une ville ou un code postal..."
    @update:model-value="selectAddress($event)"
  />
  <p>
    <a
      href="https://www.systeme-de-design.gouv.fr/comment-utiliser-le-dsfr/developpeurs/prise-en-main-du-dsfr"
      target="_blank"
    >
      Prise en main du DSFR
    </a>
  </p>

  <VIcon
    name="ri-search-line"
    scale="1.25"
  />

  équivaut à
  <span class="fr-fi-search-line" />

  <p class="fr-my-2w">
    <DsfrButton @click="toaster.addMessage({ description: 'Message pour l’utilisateur', type: 'info' })">
      Cliquer pour voir une alerte
    </DsfrButton>
  </p>

  <h2 class="fr-mt-4w">
    Infobulles
  </h2>

  <div>
    <DsfrAccordionsGroup
      v-model="activeAccordion"
    >
      <DsfrAccordion
        style="position: relative;"
        title="Accordéon avec infobulle"
      >
        Test infobulle dans accordéon
        <DsfrTooltip

          content="Texte de l’info-bulle qui apparaît au survol"
        />
      </DsfrAccordion>
    </DsfrAccordionsGroup>
  </div>
  <div>
    <DsfrDataTable
      v-model:selection="selection"
      title="Titre du tableau (caption)"
      :headers-row="headers"
      :rows="rows"
      selectable-rows
      sortable-rows
      :row-key="0"
    >
      <template #cell="{ colKey, cell }">
        <template v-if="colKey === 'email'">
          <DsfrTooltip
            content="Envoyer un courriel"
            on-hover
          >
            <a :href="`mailto:${cell as string}`">{{ cell }}</a>
          </DsfrTooltip>
        </template>
        <template v-else>
          <DsfrTooltip
            :content="`(${colKey})`"
            on-hover
          >
            {{ cell }}
          </DsfrTooltip>
        </template>
      </template>
    </DsfrDataTable>
  </div>

  <div class="flex justify-between w-full relative">
    <DsfrTooltip
      on-hover
      content="Texte de l’info-bulle qui apparaît au survol"
    >
      Au survol
    </DsfrTooltip>

    Et au clic avec une icône seulement :
    <DsfrTooltip
      content="Texte de l’info-bulle qui apparaît au clic"
    />
  </div>

  <h2 class="fr-mt-4w">
    Idée pour un bouton avec action asynchrone
  </h2>

  <AsyncButton
    :is-loading="isLoading"
    :disabled="disabled"
    @click="onClick()"
  >
    Cliquer pour voir un chargement
  </AsyncButton>

  <h2 class="fr-mt-4w">
    Boutons France Connect
  </h2>
  <p class="fr-my-2v">
    <DsfrFranceConnect secure />
  </p>

  <p class="fr-my-2v">
    <DsfrFranceConnect
      url="https://example.com"
      help-title="titre du lien d’aide"
      help-label="texte du lien d’aide"
    >
      <span>Se connecter avec</span>
    </DsfrFranceConnect>
  </p>
</template>
