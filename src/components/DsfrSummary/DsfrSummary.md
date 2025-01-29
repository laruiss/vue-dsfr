# Sommaire - `DsfrSummary`

## 🌟 Introduction

Le composant `DsfrSummary` est conçu pour afficher un sommaire accessible et stylisé selon les standards du [Design System de l'État Français (DSFR)](https://www.systeme-de-design.gouv.fr/). Il est idéal pour améliorer la navigation dans une page en proposant des liens vers les différentes sections.

🏅 La documentation sur le tag sommaire le [DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/sommaire)

<VIcon name="vi-file-type-storybook" /> La story sur le sommaire sur le storybook de [VueDsfr](https://storybook.vue-ds.fr/?path=/docs/composants-dsfrsummary--docs)

## 📐 Structure

Le composant affiche :

- Un titre configuré via la prop `title`.
- Une liste ordonnée (`<ol>`) contenant des liens vers des ancres définies via la prop `anchors`.

## 🛠️ Props

| Nom      | Type                           | Défaut        | Description                                                                 |
|----------|--------------------------------|---------------|-----------------------------------------------------------------------------|
| `title`  | `string`                       | `'Sommaire'`  | Titre du sommaire, affiché au-dessus de la liste des liens.                 |
| `anchors`| `{ link: string, name: string }[]` | `[]`          | Liste des ancres à afficher dans le sommaire. Chaque élément correspond à un lien. |

### Format de `anchors`

| Nom   | Type     | Description                                           |
|-------|----------|-------------------------------------------------------|
| `link` | `string` | URL ou ancre vers laquelle le lien doit pointer (ex. `#section1`). |
| `name` | `string` | Texte affiché pour l'ancre.                          |

## 📡Événements

Aucun événement spécifique n'est émis par ce composant.

## 🧩 Slots

Aucun slot disponible pour ce composant.

## 📝 Exemples

### Exemple de base

```vue
<DsfrSummary
  title="Sommaire de la page"
  :anchors="[
    { link: '#introduction', name: 'Introduction' },
    { link: '#chapitre1', name: 'Chapitre 1' },
    { link: '#chapitre2', name: 'Chapitre 2' }
  ]"
/>
```

### Exemple complet

::: code-group

<Story data-title="Démo" min-h="120px">
  <DsfrSummaryDemo />
</Story>

<<< docs-demo/DsfrSummaryDemo.vue [Code de la démo]

:::

## ⚙️ Code source du composant

::: code-group

<<< DsfrSummary.vue
<<< DsfrSummary.types.ts

:::

<script setup lang="ts">
import DsfrSummaryDemo from './docs-demo/DsfrSummaryDemo.vue'
</script>
