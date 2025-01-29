## 🌟 Introduction

Le composant `DsfrCallout` est un composant Vue.js qui permet de créer des encadrés de mise en avant avec un titre, un contenu, une icône optionnelle, et un bouton configurable. Il est conçu pour s'intégrer harmonieusement dans les projets utilisant le Design System Français (DSFR), tout en offrant une grande flexibilité grâce à la personnalisation des éléments visuels.

🏅 La documentation sur la mise en avant sur le [DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/mise-en-avant)

<VIcon name="vi-file-type-storybook" /> La story sur la mise en avant sur le storybook de [VueDsfr](https://storybook.vue-ds.fr/?path=/docs/composants-dsfrcallout--docs)

## 📐 Structure

Le composant `DsfrCallout` s'utilise pour afficher un message ou une information importante dans un encadré visuellement distinct, avec un titre, une icône, du contenu textuel, et éventuellement un bouton d'action. Chaque partie de l'encadré peut être personnalisée via les propriétés du composant.

## 🛠️ Props

Voici les différentes propriétés que vous pouvez utiliser avec ce composant :

| Prop      | Type                   | Défaut        | Description                                                                                                                                             |
|-----------|------------------------|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| `button`  | `object \| undefined`  | `undefined`   | Configuration du bouton d'action. Si défini, le bouton s'affichera sous le texte principal.                                                              |
| `title`   | `string \| undefined`  | `undefined`   | Titre de l'encadré, affiché dans un élément HTML déterminé par `titleTag`.                                                                               |
| `titleTag`| `string`               | `'h3'`        | Balise HTML utilisée pour le titre (`h3` par défaut).                                                                                                    |
| `icon`    | `string \| object \| undefined` | `undefined` | Icône affichée à gauche du titre. Peut être une chaîne pour une icône DSFR, un objet pour un composant `VIcon`, ou `undefined` si aucune icône n'est nécessaire. |
| `content` | `string`               | **Obligatoire** | Texte principal de l'encadré, généralement une description ou un message important.                                                                       |

## 📡Événements

Ce composant ne déclenche pas d'événements personnalisés.

## 🧩 Slots

- `default` : Contenu additionnel à afficher à l'intérieur de l'encadré. Ce slot est intégré dans la structure principale du composant et s'affiche sous le texte principal.

## 📝 Exemples

::: code-group

<Story data-title="Démo" min-h="420px">
  <DsfrCalloutDemo />
</Story>

<<< docs-demo/DsfrCalloutDemo.vue [Code de la démo]
:::

## ⚙️ Code source du composant

::: code-group

<<< DsfrCallout.vue
<<< DsfrCallout.types.ts

:::

<script setup lang="ts">
import DsfrCalloutDemo from './docs-demo/DsfrCalloutDemo.vue'
</script>
