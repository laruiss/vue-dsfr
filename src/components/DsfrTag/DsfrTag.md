# Tag - `DsfrTag`

## 🌟 Introduction

Le tag catégorise/classe/organise les contenus à l'aide de mots-clés. Il aide les utilisateurs à rechercher et à trouver facilement une information.

Le tag peut être utilisé dans deux contextes :

- Dans le contenu (carte, en-tête, liste) : il catégorise le contenu auquel il est apposé. Il peut être cliquable ou non cliquable ;

- En tant que filtre (dans une page de résultats de recherche par exemple). Dans ce cas il peut-être :

  - activable comme filtre en place à sélectionner/désélectionner ;
  - supprimable, il sert de rappel à un filtre qui a été coché dans une sidebar ou une liste déroulante.

🏅 La documentation sur le tag sur le [DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/tag)

<VIcon name="vi-file-type-storybook" /> La story sur le tag sur le storybook de [VueDsfr](https://storybook.vue-ds.fr/?path=/docs/composants-dsfrtags--docs)

## 📐 Structure

Il se compose des éléments suivants :

- un libellé obligatoire : soit en utilisant la prop `label` soit en utilisant le slot par défaut ;
- une icône optionnelle : avec la prop `icon` qui peut être soit le nom d’une classe correspondant à une icône du DSFR (elle commence par `'fr-icon-'`), soit le nom d’une icône de [`@iconify/vue`](https://iconify.design/docs/icon-components/vue/), cf. la [documentation sur les icônes](/guide/icones)) et celle du composant [VIcon](/composants/VIcon).

## 🛠️ Props

| Nom       | Type      | Défaut    | Obligatoire | Description                                              |
|-----------|-----------|-----------|-------------|----------------------------------------------------------|
| label     | `String`  | `undefined` |             | Le texte affiché sur l'étiquette.                        |
| link      | `String`  | `undefined` |             | URL pour un lien externe. Détermine aussi le type de balise (a ou RouterLink). |
| tagName   | `String`  | `'p'`       |             | Nom de la balise utilisée pour l'étiquette.              |
| icon      | `String`  | `undefined` |             | Nom de l'icône ([`@iconify/vue`](https://iconify.design/docs/icon-components/vue/)) à afficher sur l'étiquette. |
| disabled  | `Boolean` | `false`     |             | Désactive l'étiquette si elle est un bouton.             |
| small     | `Boolean` | `false`     |             | Réduit la taille de l'étiquette.                         |
| iconOnly  | `Boolean` | `false`     |             | Affiche uniquement l'icône, sans texte.                  |

## 📡Évenements

Pas d'événements personnalisés pour ce composant. Il se repose sur les événements natifs de ses balises sous-jacentes.

## 🧩 Slots

| Nom       | Description                                              |
|-----------|----------------------------------------------------------|
| default   | Slot par défaut pour ajouter du contenu supplémentaire à côté du label ou de l'icône. |

## 📝 Exemples

::: code-group

<Story data-title="Démo" min-h="400px">
  <DsfrTagDemo />
</Story>

<<< docs-demo/DsfrTagDemo.vue [Code de la démo]

:::

## ⚙️ Code source du composant

::: code-group

<<< DsfrTag.vue
<<< DsfrTags.types.ts

:::

<script setup lang="ts">
import DsfrTagDemo from './docs-demo/DsfrTagDemo.vue'
</script>
