<script lang="ts" setup>
import { computed, onMounted, onUnmounted, provide, ref, toRef } from 'vue'

import DsfrLanguageSelector, { type DsfrLanguageSelectorElement } from '../DsfrLanguageSelector/DsfrLanguageSelector.vue'
import DsfrLogo from '../DsfrLogo/DsfrLogo.vue'
import DsfrSearchBar from '../DsfrSearchBar/DsfrSearchBar.vue'

import DsfrHeaderMenuLinks from './DsfrHeaderMenuLinks.vue'
import { registerNavigationLinkKey } from './injection-key'
import type { DsfrHeaderProps } from './DsfrHeader.types'

export type { DsfrHeaderProps }

const props = withDefaults(defineProps<DsfrHeaderProps>(), {
  searchbarId: 'searchbar-header',
  languageSelector: undefined,
  serviceTitle: undefined,
  serviceDescription: undefined,
  homeTo: '/',
  logoText: () => 'Gouvernement',
  modelValue: '',
  operatorImgAlt: '',
  operatorImgSrc: '',
  operatorImgStyle: () => ({}),
  placeholder: 'Rechercher...',
  quickLinks: () => [],
  searchLabel: 'Recherche',
  quickLinksAriaLabel: 'Menu secondaire',
  showSearchLabel: 'Recherche',
  menuLabel: 'Menu',
  menuModalLabel: 'Menu',
  closeMenuModalLabel: 'Fermer',
  homeLabel: 'Accueil',
})

const emit = defineEmits<{
  (e: 'update:modelValue', payload: string): void
  (e: 'search', payload: string): void
  (e: 'languageSelect', payload: DsfrLanguageSelectorElement): void
}>()

const slots = defineSlots<{
  default: () => any
  operator: () => any
  mainnav: () => any
  'before-quick-links': () => any
  'after-quick-links': () => any
}>()

const languageSelector = toRef(props, 'languageSelector')

const menuOpened = ref(false)
const searchModalOpened = ref(false)
const modalOpened = ref(false)

const hideModal = () => {
  modalOpened.value = false
  menuOpened.value = false
  searchModalOpened.value = false
  document.getElementById('button-menu')?.focus()
}
const onKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    hideModal()
  }
}

onMounted(() => {
  document.addEventListener('keydown', onKeyDown)
})
onUnmounted(() => {
  document.removeEventListener('keydown', onKeyDown)
})

const showMenu = () => {
  modalOpened.value = true
  menuOpened.value = true
  searchModalOpened.value = false
  // Sans le setTimeout, le focus n'est pas fait
  setTimeout(() => {
    document.getElementById('close-button')?.focus()
  })
}
const showSearchModal = () => {
  modalOpened.value = true
  menuOpened.value = false
  searchModalOpened.value = true
}
const onQuickLinkClick = hideModal

const title = computed(() => [props.homeLabel, props.serviceTitle].filter(x => x).join(' - '))

const isWithSlotOperator = computed(() => Boolean(slots.operator) || !!props.operatorImgSrc)
const isWithSlotNav = computed(() => Boolean(slots.mainnav))
provide(registerNavigationLinkKey, () => {
  return hideModal
})
</script>

<template>
  <header
    role="banner"
    class="fr-header"
  >
    <div class="fr-header__body">
      <div class="fr-container  width-inherit">
        <div class="fr-header__body-row">
          <div class="fr-header__brand  fr-enlarge-link">
            <div class="fr-header__brand-top">
              <div class="fr-header__logo">
                <RouterLink
                  :to="homeTo"
                  :title
                >
                  <DsfrLogo
                    :logo-text="logoText"
                    data-testid="header-logo"
                  />
                </RouterLink>
              </div>
              <div
                v-if="isWithSlotOperator"
                class="fr-header__operator"
              >
                <!-- @slot Slot nommé operator pour le logo opérateur. Sera dans `<div class="fr-header__operator">` -->
                <slot name="operator">
                  <img
                    v-if="operatorImgSrc"
                    class="fr-responsive-img"
                    :src="operatorImgSrc"
                    :alt="operatorImgAlt"
                    :style="operatorImgStyle"
                  >
                </slot>
              </div>
              <div
                v-if="showSearch || isWithSlotNav || quickLinks?.length"
                class="fr-header__navbar"
              >
                <button
                  v-if="showSearch"
                  class="fr-btn  fr-btn--search"
                  aria-controls="header-search"
                  :aria-label="showSearchLabel"
                  :title="showSearchLabel"
                  :data-fr-opened="searchModalOpened"
                  @click.prevent.stop="showSearchModal()"
                />
                <button
                  v-if="isWithSlotNav || quickLinks?.length"
                  id="button-menu"
                  class="fr-btn--menu  fr-btn"
                  :data-fr-opened="showMenu"
                  aria-controls="header-navigation"
                  aria-haspopup="dialog"
                  :aria-label="menuLabel"
                  :title="menuLabel"
                  data-testid="open-menu-btn"
                  @click.prevent.stop="showMenu()"
                />
              </div>
            </div>
            <div
              v-if="serviceTitle"
              class="fr-header__service"
            >
              <RouterLink
                :to="homeTo"
                :title
                v-bind="$attrs"
              >
                <p class="fr-header__service-title">
                  {{ serviceTitle }}
                  <span
                    v-if="showBeta"
                    class="fr-badge fr-badge--sm fr-badge--green-emeraude"
                  >
                    BETA
                  </span>
                </p>
              </RouterLink>
              <p
                v-if="serviceDescription"
                class="fr-header__service-tagline"
              >
                {{ serviceDescription }}
              </p>
            </div>
            <div
              v-if="!serviceTitle && showBeta"
              class="fr-header__service"
            >
              <p class="fr-header__service-title">
                <span class="fr-badge fr-badge--sm fr-badge--green-emeraude">BETA</span>
              </p>
            </div>
          </div>
          <div class="fr-header__tools">
            <div
              v-if="quickLinks?.length || languageSelector"
              class="fr-header__tools-links"
            >
              <slot name="before-quick-links" />
              <DsfrHeaderMenuLinks
                v-if="!menuOpened"
                :links="quickLinks"
                :nav-aria-label="quickLinksAriaLabel"
              />
              <slot name="after-quick-links" />
              <template v-if="languageSelector">
                <DsfrLanguageSelector
                  v-bind="languageSelector"
                  @select="emit('languageSelect', $event)"
                />
              </template>
            </div>
            <div
              v-if="showSearch"
              class="fr-header__search  fr-modal"
            >
              <DsfrSearchBar
                :id="searchbarId"
                :label="searchLabel"
                :model-value="modelValue"
                :placeholder="placeholder"
                style="justify-content: flex-end"
                @update:model-value="emit('update:modelValue', $event)"
                @search="emit('search', $event)"
              />
            </div>
          </div>
        </div>
        <div
          v-if="showSearch || isWithSlotNav || (quickLinks && quickLinks.length) || languageSelector"
          id="header-navigation"
          class="fr-header__menu  fr-modal"
          :class="{ 'fr-modal--opened': modalOpened }"
          :aria-label="menuModalLabel"
          role="dialog"
          aria-modal="true"
        >
          <div class="fr-container">
            <button
              id="close-button"
              class="fr-btn fr-btn--close"
              aria-controls="header-navigation"
              data-testid="close-modal-btn"
              @click.prevent.stop="hideModal()"
            >
              {{ closeMenuModalLabel }}
            </button>
            <div class="fr-header__menu-links">
              <template v-if="languageSelector">
                <DsfrLanguageSelector
                  v-bind="languageSelector"
                  @select="languageSelector.currentLanguage = $event.codeIso"
                />
              </template>
              <slot name="before-quick-links" />
              <DsfrHeaderMenuLinks
                v-if="menuOpened"
                role="navigation"
                :links="quickLinks"
                :nav-aria-label="quickLinksAriaLabel"
                @link-click="onQuickLinkClick"
              />
              <slot name="after-quick-links" />
            </div>

            <template v-if="modalOpened">
              <slot
                name="mainnav"
                :hidemodal="hideModal"
              />
            </template>
            <div
              v-if="searchModalOpened"
              class="flex justify-center items-center"
            >
              <DsfrSearchBar
                :searchbar-id="searchbarId"
                :model-value="modelValue"
                :placeholder="placeholder"
                @update:model-value="emit('update:modelValue', $event)"
                @search="emit('search', $event)"
              />
            </div>
          </div>
        </div>
        <!-- @slot Slot par défaut pour le contenu du fieldset (sera dans `<div class="fr-header__body-row">`) -->
        <slot />
      </div>
    </div>
    <div class="fr-header__menu fr-modal">
      <div
        v-if="isWithSlotNav && !modalOpened"
        class="fr-container"
      >
        <!-- @slot Slot nommé mainnav pour le menu de navigation principal -->
        <slot
          name="mainnav"
          :hidemodal="hideModal"
        />
      </div>
    </div>
  </header>
</template>
