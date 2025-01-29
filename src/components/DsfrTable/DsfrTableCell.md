# Cellule de tableau - `DsfrTableCell`

## 🌟 Introduction

`DsfrTableCell`, c'est la cellule magique de vos tableaux Vue ! Ce composant flexible gère l'affichage de chaque cellule, avec la possibilité d'inclure du texte, des composants personnalisés, et plus encore. Découvrons ensemble comment l'utiliser au mieux.

🏅 La documentation sur le tableau sur le [DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/tableau)

<VIcon name="vi-file-type-storybook" /> La story sur la cellule de tableau sur le storybook de [VueDsfr](https://storybook.vue-ds.fr/?path=/docs/composants-dsfrtablerow--docs)

## 🛠️ Props

| Nom        | Type                   | Défaut | Obligatoire | Description                                                                       |
|------------|------------------------|--------|-------------|-----------------------------------------------------------------------------------|
| `field`    | `string \| Object`     |        | ✅           | Les données de la cellule. Peut être une chaîne ou un objet pour des options avancées. |
| `cellAttrs`| `Object`               | `{}`   |             | Les attributs HTML supplémentaires pour l'élément `<td>`.                         |

::: tip Conseil de pro

Utilisez la propriété component pour insérer des composants Vue personnalisés dans vos cellules, ajoutant une touche unique à votre tableau !

:::

## 📝 Exemples

### Exemple de Texte Simple

```vue
<template>
  <DsfrTable
    title="Titre du tableau"
  >
    <template #header>
      <DsfrTableHeaders :headers="headers" />
    </template>
    <tr>
      <DsfrTableCell field="texte simple" />
    </tr>
  </DsfrTable>
</template>
```

### Exemple avec élément HTML et attributs de cellule (*cell*)

```vue
<template>
  <DsfrTable
    title="Titre du tableau"
  >
    <template #header>
      <DsfrTableHeaders :headers="headers" />
    </template>
    <tr>
      <DsfrTableCell
        :field="{
          component: 'a',
          text: 'Vers la page d\'accueil',
          href: '/',
          'aria-label': 'Vers la page d’accueil',
        }"
        :cell-attrs="{ class: 'text-bold', style: 'color: blue;' }"
      />
    </tr>
  </DsfrTable>
</template>
```

### Exemple avec composant personnalisé

::: code-group

<Story data-title="Démo" min-h="320px">
  <div class="fr-container">
    <DsfrTableCellDemo />
  </div>
</Story>

<<< ./docs-demo/DsfrTableCellDemo.vue

:::

## ⚙️ Code source du composant

::: code-group

<<< DsfrTableCell.vue
<<< DsfrTable.types.ts

:::

Avec DsfrTableCell, chaque cellule de votre tableau est une toile vierge prête à être personnalisée. Amusez-vous bien à coder ! 🎨

<script setup lang="ts">
import DsfrTableCellDemo from './docs-demo/DsfrTableCellDemo.vue'
</script>
