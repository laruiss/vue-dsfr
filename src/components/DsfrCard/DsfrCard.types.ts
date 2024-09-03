import type { RouteLocationRaw } from 'vue-router'

import type { DsfrButtonProps } from '../DsfrButton/DsfrButton.types'
import type { DsfrBadgeProps } from '../DsfrBadge/DsfrBadge.types'
import type { CustomizeIconType } from 'oh-vue-icons'

export type DsfrCardDetailProps = {
  icon?: string | CustomizeIconType
}

export type DsfrCardProps = {
  imgSrc?: string
  link?: string | RouteLocationRaw
  title: string
  description: string
  size?: 'md' | 'medium' | 'large' | 'lg' | 'sm' | 'small' | undefined
  detail?: string
  detailIcon?: DsfrCardDetailProps['icon']
  endDetail?: string
  endDetailIcon?: DsfrCardDetailProps['icon']
  altImg?: string
  titleTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  badges?: DsfrBadgeProps[]
  buttons?: DsfrButtonProps[]
  linksGroup?: {
    label: string
    to?: RouteLocationRaw
    /** @deprecated utiliser href à la place, link sera supprimé dans une version future */
    link?: string
    href?: string
  }[]
  noArrow?: boolean
  horizontal?: boolean
  download?: boolean
}
