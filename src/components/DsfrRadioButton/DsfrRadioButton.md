# Bouton radio (et bouton radio riche) - `DsfrRadioButton`

## 🌟 Introduction

::: warning Important

Il est fortement déconseillé d’utiliser directement `DsfrRadioButton`, il est préférable d’utiliser [`DsfrRadioButtonSet`](/composants/DsfrRadioButtonSet).

:::

Les boutons radio permettent à l’utilisateur de sélectionner une seule option dans une liste.

Le bouton radio ne peut pas être utilisé seul : il faut au minimum 2 options. Il est préférable de ne pas sélectionner d’option par défaut pour que le choix de l’utilisateur soit conscient (en particulier si le choix est obligatoire).

Les boutons radio riches permettent de sélectionner un choix parmi une liste d’options illustrées. À la différence du bouton radio simple, l’image permet d’illustrer et d’accompagner l’utilisateur dans son choix.

Concernant les images, elles peuvent être des artworks/pictogrammes au format SVG. Il faut alors se référer [aux fondamentaux techniques du DSFR pour la définition des SVG](https://www.systeme-de-design.gouv.fr/elements-d-interface/fondamentaux-techniques/pictogramme).

🏅 La documentation sur le [bouton radio](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/bouton-radio) et le [bouton radio riche](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/bouton-radio-riche) sur le DSFR

<VIcon name="vi-file-type-storybook" /> La story sur le bouton radio sur le storybook de [VueDsfr](https://storybook.vue-ds.fr/?path=/docs/composants-dsfrradiobutton--docs)

## 📐 Structure

Le composant `DsfrRadioButton` est composé des éléments suivants :

- Un élément `<div>` englobant l'ensemble des éléments du bouton radio
- Un input (`input`) définie par différentes propriétés.
- Un label avec un message descriptif optionnel.
- Une image optionnelle (`img` ou `svg`) en fonction des propriétés renseignées

## 🛠️ Props

| Nom          | Type                                                     | Description                                                   | Valeur par défaut                                         | Obligatoire            |
|--------------|----------------------------------------------------------|---------------------------------------------------------------|-----------------------------------------------------------|------------------------|
| `name`       | *`string`*                                               | Nom du champ `<input>` associé à l'ensemble des boutons radio |                                                           | ✅                      |
| `modelValue` | *`string`* ou *`number`* ou *`boolean`* ou *`undefined`* | Valeur courante du composant (sélection courante)             | `''`                                                      | ✅                      |
| `label`      | *`string`*                                               | Libellé du bouton radio                                       | `''`                                                      | ✅                      |
| `hint`       | *`string`*                                               | Descriptif du bouton radio                                    | `''`                                                      | ✅                      |
| `inline`     | *`boolean`*                                              | Affiche le bouton radio en ligne                              | `false`                                                   |                        |
| `id`         | *`string`*                                               | Id du champ `<input>`                                         | `undefined`                                               |                        |
| `small`      | *`boolean`*                                              | Affiche le bouton radio en taille réduite                     | `false`                                                   |                        |
| `disabled`   | *`boolean`*                                              | Indique si le bouton radio est désactivé.                     | `false`                                                   |                        |
| `img`        | *`string`*                                               | Source de l'image à afficher.                                 | `undefined`                                               |                        |
| `imgTitle`        | *`string`*                                               | Titre de l'image à ajouter en attribut `title` a `img` ou à ajouter en élément `title` dans la balise `svg`.                                 | `undefined`                                               |                        |
| `svgPath`    | *`string`*                                               | Chemin vers le SVG à afficher.                                | `undefined`                                               |                        |
| `svgAttrs`   | *`Record<string, unknown>`*                              | Chemin vers le SVG à afficher.                                | `{ viewBox: '0 0 80 80', width: '80px', height: '80px' }` | Attributs pour le SVG. |

## 📡 Événements

`DsfrRadioButton` émet l'événement suivant :

| Nom                 | Description                                                 |
|---------------------|-------------------------------------------------------------|
| `update:modelValue` | Est émis lorsque la valeur du bouton radio est sélectionnée |

## 🧩 Slots

`DsfrRadioButton` fournit les slots suivants pour la personnalisation :

- `label` : Permet de personnaliser le contenu de la légende.
- `required-tip` : Permet d'ajouter un astérisque indiquant que le champ est obligatoire (fonctionne uniquement si l'attribut `required` est défini sur le composant).

## 🪆 Relation avec `DsfrRadioButtonSet`

Le composant [`DsfrRadioButtonSet`](./DsfrRadioButtonSet.md) utilise le composant `DsfrRadioButton` pour rendre visuellement chaque option du groupe. Chaque bouton radio individuel hérite des props du composant `DsfrRadioButtonSet` excepté `modelValue`.

## 📝 Exemples

::: code-group

<Story data-title="Démo" min-h="300px">
  <DsfrRadioButtonDemo />
</Story>

<<< docs-demo/DsfrRadioButtonDemo.vue

:::

## ⚙️ Code source du composant

::: code-group

<<< DsfrRadioButton.vue
<<< DsfrRadioButton.types.ts

:::

<script setup>
import DsfrRadioButtonDemo from './docs-demo/DsfrRadioButtonDemo.vue'
</script>
