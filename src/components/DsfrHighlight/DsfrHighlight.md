# Mise en exergue - `DsfrHighlight`

## 🌟 Introduction

La mise en exergue permet à l’utilisateur de distinguer et repérer une information facilement.

Le composant `DsfrHighlight` est conçu pour mettre en exergue un texte ou un contenu particulier. Il permet d'afficher du texte avec des tailles personnalisables, en mettant l'accent sur l'importance du contenu. Ce composant est idéal pour attirer l'attention des utilisateurs sur des informations clés.

🏅 La documentation sur le tag sur le [DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/tag)

<VIcon name="vi-file-type-storybook" /> La story sur le tag sur le storybook de [VueDsfr](https://storybook.vue-ds.fr/?path=/docs/composants-dsfrtags--docs)

## 📐 Structure

- `<DsfrHighlight>` : Le composant principal.
  - Affiche un texte avec un style de mise en valeur.
  - Permet d'ajuster la taille du texte via les propriétés `small` et `large`.

## 🛠️ Props

| Propriété | Type      | Description                                                   | Valeur par défaut |
|-----------|-----------|---------------------------------------------------------------|-------------------|
| `text`    | `string`  | Le texte à mettre en exergue.                                 | `undefined`       |
| `small`   | `boolean` | Si vrai, affiche le texte en petite taille.                   | `false`           |
| `large`   | `boolean` | Si vrai, affiche le texte en grande taille.                   | `false`           |
| `color`   | `string` | Doit être une des valeurs de couleurs du DSFR (ex. : `'green-emeraude'` ou `'brown-caramel'`)                   | `false`           |

## 📡Événements

Ce composant ne déclenche pas d'événements spécifiques.

## 🧩 Slots

- `default` : Slot pour insérer du contenu personnalisé dans la mise en exergue.

## 📝 Exemples

::: code-group

<Story data-title="Démo" min-h="500px">
  <DsfrHighlightDemo />
</Story>

:::

## ⚙️ Code source du composant

::: code-group

<<< ./DsfrHighlight.vue
<<< ./DsfrHighlight.types.ts

:::

Le composant `DsfrHighlight` est simple et flexible, offrant des options de taille pour le texte tout en permettant de personnaliser le contenu grâce à un slot. Il applique des classes CSS conditionnelles pour ajuster la taille du texte ainsi que la couleur de la marge en fonction des propriétés fournies.

<script setup>
import DsfrHighlightDemo from './docs-demo/DsfrHighlightDemo.vue'
</script>
