<script lang="ts" setup>
import { computed, ref } from 'vue'
import DsfrButtonGroup from '../DsfrButton/DsfrButtonGroup.vue'
import DsfrBadge from '../DsfrBadge/DsfrBadge.vue'
import type { DsfrCardProps } from './DsfrCard.types'
import DsfrCardDetail from './DsfrCardDetail.vue'
import type { RouterLink } from 'vue-router'

export type { DsfrCardProps }

const props = withDefaults(defineProps<DsfrCardProps>(), {
  imgSrc: undefined,
  link: undefined,
  detail: undefined,
  detailIcon: undefined,
  endDetail: undefined,
  endDetailIcon: undefined,
  altImg: '',
  buttons: () => [],
  linksGroup: () => [],
  badges: () => [],
  titleTag: 'h3',
  size: 'md',
  imgRatio: 'md',
})

const sm = computed(() => {
  return ['sm', 'small'].includes(props.size)
})
const lg = computed(() => {
  return ['lg', 'large'].includes(props.size)
})

const smImg = computed(() => {
  return ['sm', 'small'].includes(props.imgRatio)
})
const lgImg = computed(() => {
  return ['lg', 'large'].includes(props.imgRatio)
})
const externalLink = computed(() => {
  return typeof props.link === 'string' && props.link.startsWith('http')
})

const titleElt = ref<HTMLElement | null>(null)
const goToTargetLink = () => {
  (titleElt.value?.querySelector('.fr-card__link') as HTMLDivElement).click()
}
defineExpose({ goToTargetLink })
</script>

<template>
  <div
    class="fr-card"
    :class="{
      'fr-card--horizontal': horizontal,
      'fr-enlarge-link': !noArrow,
      'fr-card--sm': sm,
      'fr-card--lg': lg,
      'fr-card--horizontal-tier': smImg,
      'fr-card--horizontal-half': lgImg,
      'fr-card--download': download,
    }"
    data-testid="fr-card"
  >
    <div class="fr-card__body">
      <div class="fr-card__content">
        <component
          :is="titleTag"
          class="fr-card__title"
        >
          <a
            v-if="externalLink"
            :href="(link as string)"
            data-testid="card-link"
            class="fr-card__link"
          >{{ title }}</a>
          <RouterLink
            v-else-if="link"
            :to="link"
            class="fr-card__link"
            data-testid="card-link"
            @click="$event.stopPropagation()"
          >
            {{ title }}
          </RouterLink>
          <template v-else>
            {{ title }}
          </template>
        </component>
        <p class="fr-card__desc">
          {{ description }}
        </p>
        <div
          v-if="$slots['start-details'] || detail"
          class="fr-card__start"
        >
          <slot name="start-details" />
          <DsfrCardDetail
            v-if="detail"
            :icon="detailIcon"
          >
            {{ detail }}
          </DsfrCardDetail>
        </div>
        <div
          v-if="$slots['end-details'] || endDetail"
          class="fr-card__end"
        >
          <slot name="end-details" />
          <DsfrCardDetail
            v-if="endDetail"
            :icon="endDetailIcon"
          >
            {{ endDetail }}
          </DsfrCardDetail>
        </div>
      </div>

      <div
        v-if="buttons.length || linksGroup.length"
        class="fr-card__footer"
      >
        <DsfrButtonGroup
          v-if="buttons.length"
          :buttons="buttons"
          inline-layout-when="always"
          :size="size"
          reverse
        />
        <ul
          v-if="linksGroup.length"
          class="fr-links-group"
        >
          <li
            v-for="(singleLink, i) in linksGroup"
            :key="`card-link-${i}`"
          >
            <RouterLink
              v-if="singleLink.to"
              :to="singleLink.to"
            >
              {{ singleLink.label }}
            </RouterLink>
            <a
              v-else
              :href="(singleLink.link || singleLink.href)"
              class="fr-link fr-icon-arrow-right-line fr-link--icon-right"
              :class="{
                'fr-link--sm': sm,
                'fr-link--lg': lg,
              }"
            >
              {{ singleLink.label }}
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div
      v-if="imgSrc || badges.length"
      class="fr-card__header"
    >
      <div
        v-if="imgSrc"
        class="fr-card__img"
      >
        <img
          :src="imgSrc"
          class="fr-responsive-img"
          :alt="altImg"
          data-testid="card-img"
        >
        <!-- L'alternative de l'image (attribut alt) doit à priori rester vide car l'image est illustrative
          et ne doit pas être restituée aux technologies d’assistance. Vous pouvez toutefois remplir l'alternative si vous
          estimez qu'elle apporte une information essentielle à la compréhension du contenu non présente dans le texte -->
      </div>
      <ul
        v-if="badges.length"
        class="fr-badges-group"
        data-testid="card-badges"
      >
        <li
          v-for="(badge, index) in badges"
          :key="index"
        >
          <DsfrBadge v-bind="badge" />
        </li>
      </ul>
    </div>
  </div>
</template>
