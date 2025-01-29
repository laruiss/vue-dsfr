<script setup lang="ts">
import { computed, useSlots, type VNode } from 'vue'
import type { RouteLocationRaw, RouterLink } from 'vue-router'

import DsfrFooterLink from '../DsfrFooter/DsfrFooterLink.vue'
import DsfrFooterPartners from '../DsfrFooter/DsfrFooterPartners.vue'
import DsfrLogo from '../DsfrLogo/DsfrLogo.vue'

import type { DsfrFooterProps } from './DsfrFooter.types'

export type { DsfrFooterProps }
export type {
  DsfrFooterLinkListProps,
  DsfrFooterLinkProps,
  DsfrFooterPartner,
  DsfrFooterPartnersProps,
} from './DsfrFooter.types'

const props = withDefaults(defineProps<DsfrFooterProps>(), {
  a11yCompliance: 'non conforme',
  a11yComplianceLink: '/a11y',
  legalLink: '/mentions-legales',
  homeLink: '/',
  homeTitle: 'Retour à l’accueil',
  // @ts-expect-error this is really undefined
  partners: () => undefined,
  personalDataLink: '/donnees-personnelles',
  cookiesLink: '/cookies',
  logoText: () => ['République', 'Française'],
  descText: undefined,
  beforeMandatoryLinks: () => [],
  afterMandatoryLinks: () => [],
  mandatoryLinks: (props) => [
    {
      label: `Accessibilité : ${props.a11yCompliance}`,
      to: props.a11yComplianceLink,
    },
    {
      label: 'Mentions légales',
      to: props.legalLink,
      'data-testid': '/mentions-legales',
    },
    {
      label: 'Données personnelles',
      to: props.personalDataLink,
    },
    {
      label: 'Gestion des cookies',
      to: props.cookiesLink,
    },
  ],
  ecosystemLinks: () => [
    {
      label: 'info.gouv.fr',
      href: 'https://info.gouv.fr',
      title: 'Informations gouvernementales, nouvelle fenêtre',
    },
    {
      label: 'service-public.fr',
      href: 'https://service-public.fr',
      title: 'Informations et démarches administratives, nouvelle fenêtre',
    },
    {
      label: 'legifrance.gouv.fr',
      href: 'https://legifrance.gouv.fr',
      title: 'Service public de diffusion du droit, nouvelle fenêtre',
    },
    {
      label: 'data.gouv.fr',
      href: 'https://data.gouv.fr',
      title: 'Plateforme des données publiques, nouvelle fenêtre',
    },
  ],
  operatorLinkText: 'Revenir à l’accueil',
  operatorTo: '/',
  operatorImgStyle: undefined,
  operatorImgSrc: undefined,
  operatorImgAlt: '',
  licenceText: 'Sauf mention explicite de propriété intellectuelle détenue par des tiers, les contenus de ce site sont proposés sous',
  licenceTo: 'https://github.com/etalab/licence-ouverte/blob/master/LO.md',
  // @ts-expect-error this is really undefined
  licenceLinkProps: () => undefined,
  licenceName: 'licence etalab-2.0',
})

defineSlots<{
  'footer-link-lists': () => VNode
  description: () => VNode
}>()

const allLinks = computed(() => {
  return [
    ...props.beforeMandatoryLinks,
    ...props.mandatoryLinks,
    ...props.afterMandatoryLinks,
  ]
})

const slots = useSlots()
const isWithSlotLinkLists = computed(() => {
  return slots['footer-link-lists']?.()
})
const isExternalLink = computed(() => {
  const to = props.licenceTo || (props.licenceLinkProps as { to: RouteLocationRaw }).to
  return to && typeof to === 'string' && to.startsWith('http')
})

const licenceLinkAttrs = computed(() => {
  const { to, href, ...attrs } = props.licenceLinkProps ?? {}
  return attrs
})

const routerLinkLicenceTo = computed(() => {
  return isExternalLink.value ? '' : props.licenceTo
})
const aLicenceHref = computed(() => {
  return isExternalLink.value ? props.licenceTo : ''
})

const externalOperatorLink = computed(() => {
  return typeof props.operatorTo === 'string' && props.operatorTo.startsWith('http')
})
</script>

<template>
  <footer
    id="footer"
    class="fr-footer"
    role="contentinfo"
  >
    <div
      v-if="isWithSlotLinkLists"
      class="fr-footer__top"
    >
      <div class="fr-container">
        <div class="fr-grid-row fr-grid-row--start fr-grid-row--gutters">
          <!-- @slot Slot #footer-link-lists pour pouvoir changer les liens dans la rubrique en haut du pied de page  -->
          <slot name="footer-link-lists" />
        </div>
      </div>
    </div>
    <div class="fr-container">
      <div class="fr-footer__body">
        <div
          v-if="operatorImgSrc"
          class="fr-footer__brand fr-enlarge-link"
        >
          <DsfrLogo
            :logo-text="logoText"
          />
          <a
            v-if="externalOperatorLink"
            :href="(operatorTo as string)"
            data-testid="card-link"
            class="fr-footer__brand-link"
          >
            <img
              class="fr-footer__logo"
              :style="operatorImgStyle"
              :src="operatorImgSrc"
              :alt="operatorImgAlt"
            >
          </a>
          <RouterLink
            v-else
            class="fr-footer__brand-link"
            :to="homeLink"
            :title="homeTitle"
          >
            <img
              class="fr-footer__logo"
              :style="operatorImgStyle"
              :src="operatorImgSrc"
              :alt="operatorImgAlt"
            >
          </RouterLink>
        </div>
        <div
          v-else
          class="fr-footer__brand fr-enlarge-link"
        >
          <RouterLink
            :to="homeLink"
            :title="homeTitle"
          >
            <DsfrLogo
              :logo-text="logoText"
            />
          </RouterLink>
        </div>
        <div class="fr-footer__content">
          <p
            class="fr-footer__content-desc"
          >
            <!-- @slot Slot #description pour le contenu de la description du footer. Sera dans `<p class="fr-footer__content-desc">` -->
            <slot name="description">
              {{ descText }}
            </slot>
          </p>
          <ul class="fr-footer__content-list">
            <li
              v-for="({ href, label, title, ...attrs }, index) in ecosystemLinks"
              :key="index"
              class="fr-footer__content-item"
            >
              <a
                class="fr-footer__content-link"
                :href="href"
                target="_blank"
                rel="noopener noreferrer"
                :title="title"
                v-bind="attrs"
              >
                {{ label }}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <DsfrFooterPartners
        v-if="partners"
        v-bind="partners"
      />
      <div class="fr-footer__bottom">
        <ul class="fr-footer__bottom-list">
          <li
            v-for="(link, index) in allLinks"
            :key="index"
            class="fr-footer__bottom-item"
          >
            <DsfrFooterLink
              v-bind="link"
            />
          </li>
        </ul>
        <div
          v-if="licenceText"
          class="fr-footer__bottom-copy"
        >
          <p>
            {{ licenceText }}
            <component
              :is="isExternalLink ? 'a' : 'RouterLink'"
              class="fr-link-licence  no-content-after"
              :to="isExternalLink ? undefined : routerLinkLicenceTo"
              :href="isExternalLink ? aLicenceHref : undefined"
              :target="isExternalLink ? '_blank' : undefined"
              :title="isExternalLink ? `${licenceName} (nouvelle fenêtre)` : licenceName"
              rel="noopener noreferrer"
              v-bind="licenceLinkAttrs"
            >
              {{ licenceName }}
            </component>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.fr-footer {
  color: var(--text-default-grey);
}
.no-content-after {
  --link-blank-content: '';
}
.ov-icon {
  margin-bottom: 0;
}
</style>
