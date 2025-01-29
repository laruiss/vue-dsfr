# Groupe de Bouton radio (et bouton radio riche) - `DsfrRadioButtonSet`

## 🌟 Introduction

Les groupes de boutons radio (riches) permettent d’éviter d’écrire plusieurs fois le composant [`DsfrRadioButton`](./DsfrRadioButton), il est fortement conseillé de l’utiliser plutôt que de répéter `DsfrRadioButton`.

🏅 La documentation sur le [bouton radio](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/bouton-radio) et le [bouton radio riche](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/bouton-radio-riche) sur le DSFR

<VIcon name="vi-file-type-storybook" /> La story sur le groupe de boutons radio sur le storybook de [VueDsfr](https://storybook.vue-ds.fr/?path=/docs/composants-dsfrradiobuttonset--docs)

## 📐 Structure

Le composant `DsfrRadioButtonSet` est composé des éléments suivants :

- Un élément `<div>` englobant l'ensemble du groupe de radio.
- Un élément `<fieldset>` contenant les boutons radio et les messages associés.
- Une légende (`legend`) définie par la prop `legend` et personnalisable avec le slot `legend`.
- Un hint (`hint`) définie par la prop `hint` et personnalisable avec le slot `hint`.
- Un groupe de boutons radio individuels rendus par le composant `DsfrRadioButton`.
- Un message d'information, d'erreur ou de validation, affiché en dessous du groupe de boutons radio (facultatif).

## 🛠️ Props

| Nom            | Type                                           | Description                                                                                                            | Obligatoire |
|----------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|-------------|
| `titleId`      | *`string`*                                     | Identifiant unique du champ (générée automatiquement si non fournie)                                                   | Non         |
| `disabled`     | *`boolean`*                                    | Indique si l'ensemble des boutons radio est désactivé                                                                  | Non         |
| `required`     | *`boolean`*                                    | Indique si le groupe de radio est obligatoire                                                                          | Non         |
| `small`        | *`boolean`*                                    | Affiche les boutons radio en taille réduite                                                                            | Non         |
| `inline`       | *`boolean`*                                    | Affiche les boutons radio en ligne (par défaut : non)                                                                  | Non         |
| `name`         | *`string`*                                     | Nom du champ `<input>` associé à l'ensemble des boutons radio du tableau données dans la prop `options`, cf. plus loin | Oui         |
| `errorMessage` | *`string`*                                     | Message d'erreur global à afficher                                                                                     | Non         |
| `validMessage` | *`string`*                                     | Message de validation global à afficher                                                                                | Non         |
| `legend`       | *`string`*                                     | Texte de la légende                                                                                                    | Non         |
| `hint`         | *`string`*                                     | Texte du hint                                                                                                          | Non         |
| `modelValue`   | *`string`* ou *`number`* ou *`boolean`*        | Valeur courante du composant (sélection courante)                                                                      | Non         |
| `options`      | *`Omit<DsfrRadioButtonProps, 'modelValue'>[]`* | Tableau d'options définissant les boutons radio individuels                                                            | Oui         |

::: warning Important

L’attribut `name` des boutons radio est très important. Sa valeur doit être identique pour tous les boutons radio d’un même groupe. Il y a différentes façons de donner la valeur de cet attribut :

- Soit dans la **prop `name`** de `DsfrRadioButtonSet` si la prop `options` est utilisée et que le slot par défaut n’est pas utilisé, et que chaque élément du tableau d’`options` ne contient pas de propriété dont la clé est `name` (***exemple 1***).
- Soit en tant que propriété de chaque objet du tableau passé en prop `options` à `DsfrRadioButtonSet` (***exemple 2***)
- Soit en tant que prop de chaque `DsfrRadioButton` dans le slot par défaut de `DsfrRadioButtonSet` (***exemple 3***)

La prop `name` est inutile sur `DsfrRadioButtonSet` si le slot par défaut est utilisé (déconseillé) avec des `DsfrRadioButton` (sur lesquels il faudra ***obligatoirement*** la même prop `name`).

**Exemples:**

::: code-group

```vue [Exemple 1 (valide - conseillé)]
<script>
const options = [
  {
    label: 'Première valeur',
    id: 'name1-1',
    value: 'name1-1',
    hint: 'Description de la première valeur',
  },
  {
    label: 'Deuxième valeur',
    id: 'name1-2',
    value: 'name1-2',
    hint: 'Description de la deuxième valeur',
  },
] // pas de propriété `name` sur les objets de `options`
</script>

<template>
  <DsfrRadioButtonSet
    name="name-1"
    :options="options"
  />
</template>
```

```vue [Exemple 2 (valide)]
<script>
const options = [
  {
    label: 'Première valeur',
    id: 'name1-1',
    name: 'name1', // propriété `name` identique sur chaque objet de `options`
    value: 'name1-1',
    hint: 'Description de la première valeur',
  },
  {
    label: 'Deuxième valeur',
    id: 'name1-2',
    name: 'name1', // propriété `name` identique sur chaque objet de `options`
    value: 'name1-2',
    hint: 'Description de la deuxième valeur',
  },
]
</script>

<template>
  <DsfrRadioButtonSet
    :options="options"
  />
</template>
```

```vue [Exemple 3 (valide - déconseillé)]
<script>
const options = [
  {
    label: 'Première valeur',
    id: 'name1-1',
    value: 'name1-1',
    hint: 'Description de la première valeur',
  },
  {
    label: 'Deuxième valeur',
    id: 'name1-2',
    value: 'name1-2',
    hint: 'Description de la deuxième valeur',
  },
] // pas de propriété `name` sur les objets de `options`
</script>

<template>
  <DsfrRadioButtonSet>
    <DsfrRadioButton
      v-for="option of options"
      :key="option.id"
      v-model="modelValue1"
      name="name-1"
      v-bind="option"
    />
  </DsfrRadioButtonSet>
</template>
```

```vue [Exemple 4 (invalide)]
<script>
const options = [
  {
    label: 'Première valeur',
    id: 'name1-1',
    value: 'name1-1',
    hint: 'Description de la première valeur',
  },
  {
    label: 'Deuxième valeur',
    id: 'name1-2',
    value: 'name1-2',
    hint: 'Description de la deuxième valeur',
  },
] // pas de propriété `name` sur les objets de `options`
</script>

<template>
  <!-- Il manque la prop name sur DsfrRadioButtonSet -->
  <DsfrRadioButtonSet
    :options="options"
  />
</template>
```

```vue [Exemple 5 (invalide aussi)]
<script>
const options = [
  {
    label: 'Première valeur',
    id: 'name1-1',
    value: 'name1-1',
    hint: 'Description de la première valeur',
  },
  {
    label: 'Deuxième valeur',
    id: 'name1-2',
    value: 'name1-2',
    hint: 'Description de la deuxième valeur',
  },
] // pas de propriété `name` sur les objets de `options`
</script>

<template>
  <DsfrRadioButtonSet>
    <!-- Il manque la prop name sur DsfrRadioButton -->
    <DsfrRadioButton
      v-for="option of options"
      :key="option.id"
      v-model="modelValue1"
      v-bind="option"
    />
  </DsfrRadioButtonSet>
</template>
```

:::

## 📡 Événements

`DsfrRadioButtonSet` émet l'événement suivant :

| Nom                 | Description                                                   |
|---------------------|---------------------------------------------------------------|
| `update:modelValue` | Est émis lorsque la valeur d'un bouton radio est sélectionnée |

## 🧩 Slots

`DsfrRadioButtonSet` fournit les slots suivants pour la personnalisation :

- `legend` : Permet de personnaliser le contenu de la légende.
- `hint` : Permet de personnaliser le contenu d'un hint.
- `required-tip` : Permet d'ajouter un astérisque indiquant que le champ est obligatoire (fonctionne uniquement si l'attribut `required` est défini sur le composant).

## 🪆 Relation avec `DsfrRadioButton`

Le composant `DsfrRadioButtonSet` utilise le composant `DsfrRadioButton` pour rendre visuellement chaque option du groupe. Chaque bouton radio individuel hérite des props du composant `DsfrRadioButtonSet` excepté `modelValue`.

## 📝 Exemples

::: code-group

<Story data-title="Démo" min-h="1500px">
  <DsfrRadioButtonSetDemo />
</Story>

<<< docs-demo/DsfrRadioButtonSetDemo.vue

:::

## ⚙️ Code source du composant

::: code-group

<<< DsfrRadioButtonSet.vue
<<< DsfrRadioButton.types.ts

:::

<script setup>
import DsfrRadioButtonSetDemo from './docs-demo/DsfrRadioButtonSetDemo.vue'
</script>
