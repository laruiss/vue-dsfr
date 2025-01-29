# Onglet - `DsfrTabItem`

## 🌟 Introduction

Le composant `DsfrTabItem` représente un onglet individuel dans un ensemble d'onglets. Il gère les interactions utilisateur telles que les clics et les commandes clavier pour naviguer entre les onglets. Ce composant offre également une intégration avec des icônes pour une expérience utilisateur enrichie et intuitive.

Ce composant **doit** s’utiliser dans un [`DsfrTabs`](/composants/DsfrTabs).

## 📐 Structure

- `<DsfrTabItem>` : Un élément de liste représentant un onglet.
  - Contient un bouton pour activer l'onglet.
  - Gère les commandes clavier pour permettre la navigation entre les onglets.

## 🛠️ Props

| Propriété | Type     | Description                                                      | Valeur par défaut |
|-----------|----------|------------------------------------------------------------------|-------------------|
| `panelId` | `string` | ID unique du panneau de contenu associé à cet onglet.            | `obligatoire`     |
| `tabId`   | `string` | ID unique de l'onglet, utilisé pour l'accessibilité.             | `obligatoire`     |
| `icon`    | `string` | Nom de l'icône à afficher dans l'onglet (facultatif).            | `undefined`       |

## 📡Événements

- `click` : Événement émis lorsque l'onglet est cliqué, envoie l’index de l’onglet (`number`, entier commençant à `0`).
- `next` : Événement émis lorsque l'utilisateur appuie sur la touche "flèche droite" ou "flèche bas".
- `previous` : Événement émis lorsque l'utilisateur appuie sur la touche "flèche gauche" ou "flèche haut".
- `first` : Événement émis lorsque l'utilisateur appuie sur la touche "Home".
- `last` : Événement émis lorsque l'utilisateur appuie sur la touche "End".

## 🧩 Slots

- `default` : Slot pour insérer le contenu de l'onglet.

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

Le `DsfrTabItem` utilise `v-on:keydown` pour gérer les interactions clavier et permettre la navigation entre les onglets. Le composant utilise également `watch` pour gérer la mise au point automatique lorsque l'onglet est sélectionné, améliorant ainsi l'accessibilité et l'expérience utilisateur.

<script setup lang="ts">
import DsfrTabsDemoComplex from './docs-demo/DsfrTabsDemoComplex.vue'
</script>
