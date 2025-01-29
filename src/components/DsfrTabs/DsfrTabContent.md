# Contenu d’onglet - `DsfrTabContent`

## 🌟 Introduction

Le composant `DsfrTabContent` est conçu pour être utilisé comme panneau de contenu dans une interface à onglets. Il utilise une transition fluide pour animer l'affichage du contenu de l'onglet sélectionné.

Ce composant **doit** s’utiliser dans un [`DsfrTabs`](/composants/DsfrTabs).

## 📐 Structure

- `<DsfrTabContent>` : Le composant principal.
  - Affiche le contenu associé à un onglet.
  - Utilise une transition animée pour l'apparition et la disparition du contenu.
  - Utilise des classes pour gérer l'état de sélection de l'onglet.

## 🛠️ Props

| Propriété   | Type      | Description                                                      | Valeur par défaut |
|-------------|-----------|------------------------------------------------------------------|-------------------|
| `panelId`   | `string`  | ID unique pour le panneau, utilisé pour l'accessibilité.         | `obligatoire`     |
| `tabId`     | `string`  | ID unique de l'onglet associé, utilisé pour l'accessibilité.     | `obligatoire`     |

## 📡Événements

Ce composant ne déclenche pas d'événements spécifiques.

## 🧩 Slots

- `default` : Slot pour insérer le contenu de l'onglet à afficher.

## 📝 Exemples

::: code-group

<Story data-title="Démo" min-h="600px">
  <DsfrTabsDemoComplex />
</Story>

<<< docs-demo/DsfrTabsDemoComplex.vue [Code de la démo]

:::

## ⚙️ Code source du composant

::: code-group
<<< DsfrTabContent.vue
<<< DsfrTabs.types.ts
<<< injection-key.ts
:::

<script setup lang="ts">
import DsfrTabsDemoComplex from './docs-demo/DsfrTabsDemoComplex.vue'
</script>
