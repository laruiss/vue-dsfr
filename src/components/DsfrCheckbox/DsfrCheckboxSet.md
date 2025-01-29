## 🌟 Introduction

Ce composant permet de gérer un ensemble de cases à cocher DSFR. Il est composé d'un libellé (`legend`), d'options individuelles représentées par le composant `DsfrCheckbox`, et d'un message d'information, d'erreur ou de validation global.

## 📐 Structure

Le composant `DsfrCheckboxSet` est composé des éléments suivants :

- Un élément `<fieldset>` contenant l'ensemble des cases à cocher
- Une légende (`legend`) définie par la prop `legend` et personnalisable avec le slot `legend`
- Un groupe de cases à cocher individuelles rendues par le composant `DsfrCheckbox`
- Un message d'information, d'erreur ou de validation, affiché en dessous du groupe de cases à cocher

## 🛠️ Props

| Nom                   | Type                                    | Description                                                   | Obligatoire |
|-----------------------|-------------------------------------------|----------------------------------------------------------------|--------------|
| `options`               | *`(DsfrCheckboxProps & InputHTMLAttributes)[]`* | Tableau d'options définissant les cases à cocher individuelles   | ✅           |
| `modelValue`            | *`string[]`*                                | Valeur courante du composant, un tableau de valeurs (propriété `value` de chaque option de la prop `options`) des cases cochées | ✅           |
| `disabled`              | *`boolean`*                                | Indique si l'ensemble des cases à cocher est désactivé           |           |
| `errorMessage`         | *`string`*                                 | Message d'erreur global à afficher                             |           |
| `inline`                | *`boolean`*                                | Affiche les cases à cocher en ligne (par défaut : `false`)            |           |
| `legend`                | *`string`*                                 | Texte de la légende                                             |           |
| `required`              | *`boolean`*                                | Indique si l'ensemble des cases à cocher est obligatoire          |           |
| `small`                 | *`boolean`*                                | Affiche les cases à cocher en taille réduite                     |           |
| `titleId`               | *`string`*                                 | Identifiant unique du champ (générée automatiquement si non fournie) |           |
| `validMessage`         | *`string`*                                 | Message de validation global à afficher                         |           |

::: danger Attention

Avant la v7, le tableau `modelValue` était un tableau de `string` avec les valeurs des propriétés de l’attribut `name` de chaque case à cocher.

Ce n’était ni une API idéale, ni le comportement attendu en Vue natif ou en HTML/JS natif.

:::

## 📡 Événements

`DsfrCheckboxSet` émet l'événement suivant :

| Nom                  | Description                                         |
|-----------------------|----------------------------------------------------|
| `update:modelValue`   | Est émis lorsque la sélection des cases à cocher change  |

## 🧩 Slots

`DsfrCheckboxSet` fournit les slots suivants pour la personnalisation :

- `legend` : Permet de personnaliser le contenu de la légende.
- `required-tip` : Permet d'ajouter plus qu’un astérisque pour indiquer que le champ est obligatoire ou d’autres détails sur cette case à cocher.

## 🪆 Relation avec `DsfrCheckbox`

`DsfrChecboxSet` utilise en interne `DsfrCheckbox`, et permet de récupérer dans `modelValue` sous forme de tableau les valeurs de la prop `value` de chaque case à cocher qui est cochée.

Cf. les exemples ci-dessous

## 📝 Exemples

::: code-group

<Story data-title="Démo" min-h="1500px">
  <DsfrCheckboxSetDemo />
</Story>

<<< docs-demo/DsfrCheckboxSetDemo.vue

:::

## ⚙️ Code source du composant

::: code-group

<<< DsfrCheckboxSet.vue
<<< DsfrCheckbox.types.ts

:::

<script setup>
import DsfrCheckboxSetDemo from './docs-demo/DsfrCheckboxSetDemo.vue'
</script>
