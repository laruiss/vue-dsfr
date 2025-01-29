# Lien de pied de page - `DsfrFooterLink`

## 🌟 Introduction

Le composant `DsfrFooterLink` de Vue.js permet de créer des liens personnalisés dans le pied de page. Ce composant versatile gère différents types de liens (boutons, liens internes, externes, e-mail) et peut être enrichi d'icônes.

🏅 La documentation sur le pied de page sur le [DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/pied-de-page)

<VIcon name="vi-file-type-storybook" /> La story sur le pied de page sur le storybook de [VueDsfr](https://storybook.vue-ds.fr/?path=/docs/composants-dsfrfooter--docs)

## 📐 Structure

Le composant se compose d'une balise `<script>` avec TypeScript pour la logique et d'une balise `<template>` pour le rendu. La logique détermine le type de lien et la gestion des icônes. Le rendu HTML est dynamique en fonction des propriétés et des conditions d'affichage des icônes.

## 🛠️ Props

| nom         | type                                   | défaut   | obligatoire |
| ----------- | -------------------------------------- | -------- | ----------- |
| `icon`      | `string \| InstanceType\<typeof VIcon>['$props']`                 |      `undefined`          | |
| `iconAttrs` | `InstanceType<typeof VIcon>['$props'] & import('vue').HTMLAttributes`                           | `{}` |           |
| `onClick`   | `($event: MouseEvent) => void`                           | `undefined` |      |
| `target`    | `string`                             | `'_self'`|             |
| `label`     | `string`                             | `''`     |             |
| `href`      | `string`                             |  `undefined`    |             |
| `to`        | `import('vue-router').RouteLocationRaw`            |  `undefined`       |             |
| `path`      | `string`                             | `undefined`     |             |

## 📡Événements

| Nom                 | Description                                                                  |
|---------------------|------------------------------------------------------------------------------|
| `click` | Événement émis lors du clic sur le lien.               |

## 📝 Exemples

Ce composant est utilisé en interne dans DsfrFooter, il n’y a pas de raison de l’utiliser en dehors.

## ⚙️ Code source du composant

::: code-group

<<< DsfrFooterLink.vue
<<< DsfrFooter.types.ts

:::
