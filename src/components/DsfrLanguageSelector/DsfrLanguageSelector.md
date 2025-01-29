# Sélecteur de langue - Translate - `DsfrLanguageSelector`

## 🌟 Introduction

Le sélecteur de langue permet à l’utilisateur de choisir la langue dans laquelle est affichée le contenu du site, si celui-ci est disponible en plusieurs langues.

Il prend la forme d’un bouton déclenchant l’ouverture d’une liste déroulante, présent dans l’en-tête dans le groupe des accès rapides.

::: warning Important

Ce composant est utilisé en interne dans [DsfrHeader](/composants/DsfrHeader) (avec la prop **`languageSelector`**) et ne devrait pas être utilisé directement.

:::

🏅 La documentation sur le **sélecteur de langue** sur le [DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/selecteur-de-langue)

<VIcon name="vi-file-type-storybook" /> La story sur le **sélecteur de langue** sur le storybook de [VueDsfr](https://storybook.vue-ds.fr/?path=/docs/composants-dsfrlanguageselector--docs)

## 📐 Structure

- `<DsfrLanguageSelector>` : Le composant principal.
  - Contient un bouton qui ouvre ou ferme un menu déroulant de langues.
  - Affiche une liste des langues disponibles, permettant à l'utilisateur de sélectionner la langue désirée.

## 🛠️ Props

| Propriété          | Type                          | Description                                                   | Valeur par défaut         |
|--------------------|-------------------------------|---------------------------------------------------------------|---------------------------|
| `id`               | `string`                      | Identifiant unique pour les éléments de contrôle d'accessibilité. | `useRandomId('language-selector')` |
| `languages`        | [`DsfrLanguageSelectorElement[]`](/types#dsfrlanguageselector) | Liste des langues disponibles. Chaque langue est représentée par un objet contenant un `codeIso` et un `label`. | `[]`                      |
| `currentLanguage`  | `string`                      | Code ISO de la langue actuellement sélectionnée.              | `'fr'`                    |

## 📡Événements

- `select` : Événement émis lorsqu'une langue est sélectionnée. Passe l'objet `DsfrLanguageSelectorElement` de la langue sélectionnée en tant que payload.

## 🧩 Slots

- `default` : Ce slot permet d'insérer du contenu personnalisé dans le bouton qui affiche la langue sélectionnée.

## 📝 Exemples

::: code-group

<Story data-title="Démo" min-h="720px">
  <DsfrLanguageSelectorDemo />
</Story>

<<< docs-demo/DsfrLanguageSelectorDemo.vue [Code de la démo]

:::

## ⚙️ Code source du composant

::: code-group

<<< DsfrLanguageSelector.vue
<<< DsfrLanguageSelector.types.ts

:::

<script setup lang="ts">
import DsfrLanguageSelectorDemo from './docs-demo/DsfrLanguageSelectorDemo.vue'
</script>
