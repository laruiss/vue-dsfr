# Liste déroulante - `DsfrSelect`

## 🌟 Introduction

Le `DsfrSelect` est un composant Vue permettant à un utilisateur de choisir un élément dans une liste donnée.

La liste déroulante fournit une liste d’option parmi lesquelles l’utilisateur peut choisir. Seule la partie visible du composant est stylisé : la liste d’options déroulées conserve le style du navigateur.

🏅 La documentation sur **liste déroulante** sur le [DSFR](https://www.systeme-de-design.gouv.fr/composants-et-modeles/composants/liste-deroulante)

<VIcon name="vi-file-type-storybook" /> La story sur le select sur le storybook de [VueDsfr](https://storybook.vue-ds.fr/?path=/docs/composants-dsfrselect--docs)

## 🛠️ Props

| Nom                      | Type                                                                                        | Défaut                      | Obligatoire | Description                                                      |
|--------------------------|---------------------------------------------------------------------------------------------|-----------------------------|:-----------:|------------------------------------------------------------------|
| `modelValue`             | `string \| number`                                                                          |                             |             | Valeur associée à l'option sélectionnée.                         |
| `required`               | `boolean`                                                                                   |                             |             | Indique si le select est obligatoire.                            |
| `disabled`               | `boolean`                                                                                   |                             |             | Indique si le select est désactivé.                              |
| `options`                | `(string \| undefined \| { value: string \| undefined, text: string disabled?: boolean})[]` | `[]`                        |             | Options à sélectionner                                           |
| `label`                  | `string`                                                                                    | `''`                        |             | Texte du label associé au select.                                |
| `name`                   | `string`                                                                                    |                             |             | Nom du champ.                                                    |
| `description` deprecated | `string`                                                                                    |                             |             | Deprecated, utiliser hint plutôt.                                |
| `hint`                   | `string`                                                                                    |                             |             | Texte d'indice pour guider.                                      |
| `successMessage`         | `string`                                                                                    | `''`                        |             | Message de validation à afficher en dessous du select.           |
| `errorMessage`           | `string`                                                                                    | `''`                        |             | Message d'erreur à afficher en dessous du select.                |
| `defaultUnselectedText`  | `string`                                                                                    | `'Sélectionner une option'` |             | Si `true`, l'infobulle s'affiche au survol.                      |
| `selectId`               | `string`                                                                                    | `useRandomId('select')`     |             | Identifiant unique pour le select. Utilisé pour l'accessibilité. |

## 📡Évenements

`DsfrSelect` émet l'événement suivant :

| Nom                   | type                 | Description                                  |
|-----------------------|----------------------| ---------------------------------------------|
| `update:modelValue`   | *`string \| number`* | Est émis lorsque la valeur du select change. |

## 🧩 Slots

- Aucun slot n'est disponible dans ce ce composant.

## 📝 Exemples

::: code-group

<Story data-title="Démo" min-h="400px">
  <div
  class="flex flex-col"
  >
    <DsfrSelectDemo />
  </div>
</Story>

<<< docs-demo/DsfrSelectDemo.vue

:::

## ⚙️ Code source du composant

::: code-group

<<< DsfrSelect.vue
<<< DsfrSelect.types.ts

:::

<script setup lang="ts">
import DsfrSelectDemo from './docs-demo/DsfrSelectDemo.vue'
</script>
