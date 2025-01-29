# Tableau - `DsfrDataTable`

## 🌟 Introduction

Le composant `DsfrDataTable` est un élément puissant et polyvalent pour afficher des données sous forme de tableaux dans vos applications Vue. Utilisant une combinaison de slots, de props, et d'événements personnalisés, ce composant offre une flexibilité remarquable. Plongeons dans les détails !

::: warning Prudence

Ce composant est tout neuf et a besoin de vos retours. Son API ne devrait pas changer, elle devrait s’étoffer dans les prochaines semaines ou les prochains mois.

Si vous avez des propositions, veuillez lancer une [**discussion**](https://github.com/dnum-mi/vue-dsfr/discussions) avant d’ouvrir une issue.

:::

🏅 La documentation sur le tableau sur le [DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/tableau/)

<VIcon name="vi-file-type-storybook" /> La story sur le tableau de données sur le storybook de [VueDsfr](https://storybook.vue-ds.fr/?path=/docs/composants-dsfrdatatable--docs)

## 📐 Structure

Le composant `DsfrDataTable` s'utilise pour afficher des données structurées sous forme de tableau. Il prend en charge le tri des colonnes, la pagination des lignes, et l'ajout de boutons ou d'icônes pour effectuer des actions spécifiques sur les données.

## 🛠️Props

| Nom               | Type                                           | Défaut    | Obligatoire | Description                                                                                         |
|-------------------|------------------------------------------------|-----------|-------------|-----------------------------------------------------------------------------------------------------|
| `title`         | `string`                                |      |    ✅         | Les en-têtes de votre tableau.                                                                      |
| `headers`         | `Array<string>`                                | `[]`      |             | Les en-têtes de votre tableau.                                                                      |
| `rows`            | `Array<DsfrDataTableRowProps \| string[] \| DsfrDataTableCellProps[]>` | `[]`      |             | Les données de chaque rangée dans le tableau.                                                       |
| `rowKey`          | `string \| Function`                           | `undefined`|             | Une clé unique pour chaque rangée, utilisée pour optimiser la mise à jour du DOM.                   |
| `currentPage`     | `number`                                       | `1`       |             | La page actuelle dans la pagination du tableau.                                                     |
| `selectableRows`            | `boolean`                                            | `false`                  | Si `true`, permet la sélection des lignes via des cases à cocher.                                                                            |
| `sortableRows`              | `boolean \| string[]`                                | `false`                  | Si `true`, permet le tri des lignes selon chaque colonne du header. Peut être un tableau de clés pour spécifier les colonnes triables.                                       |
| `sorted`                    | `string`                                             | **Obligatoire**           | Clé de la colonne actuellement triée.                                                                                                        |
| `sortFn`                    | `(a: unknown, b: unknown) => number`                 | `defaultSortFn`          | Fonction de tri personnalisée pour les lignes du tableau.                                                                                    |
| `verticalBorders`           | `boolean`                                            | `false`                  | Si `true`, affiche des bordures verticales entre les colonnes.                                                                               |
| `bottomCaption`             | `boolean`                                            | `false`                  | Si `true`, affiche une légende en bas du tableau.                                                                                            |
| `noCaption`                 | `boolean`                                            | `false`                  | Si `true`, supprime la légende du tableau.                                                                                                   |
| `pages`                     | `Page[]`                                             | `undefined`              | Liste des pages pour la pagination. Si non définie, les pages sont générées automatiquement.                                                 |
| `pagination`                | `boolean`                                            | `false`                  | Si `true`, active la pagination des lignes du tableau.                                                                                       |
| `paginationOptions`         | `number[]`                                           | `[5, 10, 20]`            | Options disponibles pour le nombre de lignes par page.                                                                                       |
| `currentPage`               | `number`                                             | `1`                      | Numéro de la page actuellement affichée.                                                                                                     |
| `rowsPerPage`               | `number`                                             | `10`                     | Nombre de lignes à afficher par page.                                                                                                        |
| `bottomActionBarClass`      | `string \| Record<string, boolean> \| string[]`      | `undefined`              | Classe CSS pour la barre d'actions en bas du tableau.                                                                                        |
| `paginationWrapperClass`    | `string \| Record<string, boolean> \| string[]`      | `undefined`              | Classe CSS pour l'élément englobant la pagination.                                                                                           |

## 📡 Events

| Nom                  | Payload | Description                                     |
|----------------------|---------|----------------------------------------|
| `update:current-page` | | Émis lors du changement du numéro de page (dans le composant pagination intégré).    |
| `update:rows-per-page` | | Émis lors du changement du nombre de lignes à afficher par page (dans le composant pagination intégré).    |
| `update:selection` | | Émis lors du changement de la sélection de lignes.    |
| `update:sorted-by` | | Émis lors du changement de l’identifiant de la colonne à trier.    |
| `update:sorted-desc` | | Émis lors du changement du sens de tri.    |

Vous pouvez donc utiliser `v-model` pour :

- selection
- rowsPerPage
- currentPage
- sortedBy
- sortedDesc

## 🧩 Slots

- **Slot par défaut**: Utilisé pour le corps du tableau. Par défaut, il affiche les rangées de données via `DsfrDataTableRow`.
- **`header`** : Permet de personnaliser le rendu des en-têtes de colonne.
- **`cell`** : Permet de personnaliser le contenu des cellules.
- **`pagination`** : Permet de personnaliser la pagination affichée sous le tableau.

## 📝 Exemples

### Exemple Basique

::: code-group

<Story data-title="Démo basique" min-h="260px">
  <div class="fr-container">
    <DsfrDataTableDemoSimple />
  </div>
</Story>

<<< ./docs-demo/DsfrDataTableDemoSimple.vue

:::

### Exemple Complexe

::: code-group

<Story data-title="Démo complexe" min-h="300px">
  <div class="fr-container">
    <DsfrDataTableDemoComplexe />
  </div>
</Story>

<<< ./docs-demo/DsfrDataTableDemoComplexe.vue

:::

### Exemple Plus Complexe

::: code-group

<Story data-title="Démo complexe" min-h="400px">
  <div class="fr-container">
    <DsfrDataTableDemoPlusComplexe />
  </div>
</Story>

<<< ./docs-demo/DsfrDataTableDemoPlusComplexe.vue

:::

## ⚙️Code source du composant

::: code-group

<<< DsfrDataTable.vue
<<< DsfrDataTable.types.ts

:::

C'est tout, amis développeurs ! Avec DsfrDataTable, donnez vie à vos données comme jamais auparavant ! 🎉

<script setup lang="ts">
import DsfrDataTableDemoSimple from './docs-demo/DsfrDataTableDemoSimple.vue'
import DsfrDataTableDemoComplexe from './docs-demo/DsfrDataTableDemoComplexe.vue'
import DsfrDataTableDemoPlusComplexe from './docs-demo/DsfrDataTableDemoPlusComplexe.vue'
</script>
