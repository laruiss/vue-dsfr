# Carte - `DsfrCard`

## 🌟 Introduction

La carte c'est tout simplement l'indispensable pour agrémenter vos sites et applications d'amuse-bouches esthétiques vers des contenus proposés. Il s'agit d'un composant permettant un aperçu d'une page et un lien vers cette dernière. Elle fait généralement partie d'une liste menant vers des contenus similaires.

La carte existe en trois tailles (LG, MD, SM) et deux formats (horizontal et vertical) déclinés sur deux supports (desktop et mobile), vous trouverez forcément votre bonheur ! Les cartes horizontales sont réservées au desktop (en mobile, une carte horizontale devient verticale).

🏅 La documentation sur la carte sur le [DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/carte)

<VIcon name="vi-file-type-storybook" /> La story sur la carte sur le storybook de [VueDsfr](https://storybook.vue-ds.fr/?path=/docs/composants-dsfrcard--docs)

## 📐 Structure

Une carte digne de ce nom se compose des éléments suivants :

- un titre (prop **`title`**, de type `string`), reprenant celui de l’objet visé (page de destination, action, site).
- un lien (prop **`link`**, de type `string`), sur le titre de la carte.
- une image (prop **`imgSrc`**, de type `string`), issue ou en lien avec la page de destination à laquelle on peut ajouter une description textuelle de l'image (prop **`altImg`**, de type `string`), ce texte alternatif sera affiché sur la page si l'image ne peut pas être chargée et sera très utile pour l'accessibilité.
- deux zones de détails destinées à une icône et un texte - optionnels (props **`detail`** et **`endDetail`**, de type `string`).
- une description (prop **`description`**, de type `string`), de 5 lignes maximum (tronquée au-delà).
- une icône illustrative (par défaut, une flèche) - optionnelle peut se désactiver (prop **`noArrow`**, de type `boolean`).
- une zone d’action, composée de boutons (prop **`buttons`**, un tableau d'objets pouvant contenir les props à passer à chaque bouton (cf. le composant [`DsfrButton`](/composants/DsfrButton) afin de connaître les props à passer)).
- une zone d’action, composée de liens (prop **`linksGroup`**, un tableau d'objets composé de la propriété **`label`** (`string`),et de **`link`** (`string`) s'il s'agit d'un lien interne au site ou à l'application, ou de **`href`** (`string`) s'il s'agit d'un lien externe).

Autres props :

- la taille de la carte (prop **`size`**, de type `string`) qui peut prendre plusieurs valeurs: `md`, `medium`, `large`, `lg`, `sm`, `small`.
- le ratio de l'image (33%, 40% ou 50%) (prop **`imgRatio`**, de type `string`) qui peut prendre plusieurs valeurs: `md`, `medium`, `large`, `lg`, `sm`, `small`.
- la balise du titre (prop **`titleTag`**, de type `string`) afin de respecter la hiérarchie des titres. Valeurs possibles: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`.
- l'orientation de la carte (verticale par défaut) (prop **`horizontal`**, de type `boolean`) pour la basculer à l'horizontal.
- une variante de carte indiquant que l’évènement de clic lancera un téléchargement (prop **`download`**, de type `boolean`).

## 🛠️ Props

|  Nom                   |   Type      |  Défaut         | Obligatoire        | Description |
| ---------------------- | ---------   | --------------- | ------------------ | ---- |
| `title`                | *`string`*  |                 | ✅                 | Titre de la carte |
| `description`          | *`string`*  |                 | ✅                 | Description de la carte |
| `altImg`               | *`string`*  | `''`            |                    | Contenu de l’attribut `alt` de l’image de la carte |
| `buttons`              | [*`DsfrButtonProps[]`*](/types#dsfrbutton-et-dsfrbuttongroup)  | `[]`            |                    | Tableau de props à donner à DsfrButton |
| `badges`              | [*`DsfrBadgeProps[]`*](/types#dsfrbadge)  | `[]`            |                    | Tableau de props à donner à DsfrBadge |
| `detail`               | *`string`*  | `''`            |                    | Texte à mettre dans la première zone de détail |
| `detailIcon`           | *`string`*  | `''`            |                    | Icône à mettre dans la première zone de détail ([nom d’une icône `oh-vue-icon` ou `DSFR`](/guide/icones)) |
| `endDetail`            | *`string`*  | `''`            |                    | Texte à mettre dans la deuxième zone de détail |
| `endDetailIcon`         | *`string`*  | `''`            |                    | Icône à mettre dans la deuxième zone de détail ([nom d’une icône `oh-vue-icon` ou `DSFR`](/guide/icones)) |
| `download`             | *`boolean`* | `false`         |                    | Est-ce que cette carte permet de télécharger un fichier ? |
| `horizontal`           | *`boolean`* | `false`         |                    | Est-ce que la carte doit être affiché avec l’image et le texte au même niveau ? |
| `imgSrc`               | *`string`*  | `''`            |                    | URL vers l’image |
| `link`                 | *`string`*  | `''`            |                    | Lien vers lequel la carte pointe |
| `linksGroup`           | *`({ label: string, to?: RouteLocationRaw, link?: string, href?: string })[]`*  | `[]`            |                    | liste de liens : objet contenant `to` ou `href` pour le lien et `label` avec le texte du lien |
| `size`                 | *`'md'* \| 'medium' \| 'large' \| 'lg' \| 'sm' \| 'small' \| undefined`*  | `'md'`          |                    | Taille de la carte |
| `imgRatio`             | *`'md' \| 'medium' \| 'large' \| 'lg' \ 'sm' \ 'small' \ undefined`*  | `'md'`          |                    |
| `titleTag`             | [*`TitleTag`*](/docs/types.md#title-tag "'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6'") | `'h3'`          |          | Balise du titre de la carte |

## 🧩 Slots

`start-details`  permet de placer une précision, sous forme de tags (cliquables ou non)

cf. DSFR : [Composant - Tag](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/tag) ou [Composant - Badge](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/badge) (jusqu'à 4 éléments)
cf. DSFR : [Composant - Carte](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/carte/).

## 📝 Exemples

### 📝 Exemple avec tags et badges dans l’en-tête sans actions

::: code-group

<Story data-title="Démo" min-h="680px">
  <DsfrCardDemo />
</Story>

<<< docs-demo/DsfrCardDemo.vue [Code de la démo]

:::

### 📝 Exemple avec actions sans tags

::: code-group

<Story data-title="Démo" min-h="720px">
  <DsfrCardDemoActions />
</Story>

<<< docs-demo/DsfrCardDemoActions.vue [Code de la démo]

:::

## ⚙️ Code source du composant

::: code-group

<<< DsfrCard.vue
<<< DsfrCard.types.ts

:::

<script setup lang="ts">
import DsfrCardDemo from './docs-demo/DsfrCardDemo.vue'
import DsfrCardDemoActions from './docs-demo/DsfrCardDemoActions.vue'
</script>
