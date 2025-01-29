# Documentation du composant `DsfrFileUpload`

## 🌟 Introduction

Bienvenue dans la documentation du composant `DsfrFileUpload`. Ce composant est l'équivalent numérique d'une balade dans les ruelles pittoresques de Montmartre, mais pour télécharger vos fichiers. Que ce soit pour des photos de vacances ou des documents importants, `DsfrFileUpload` rend le processus simple et élégant.

🏅 La documentation sur le pied de page sur le [DSFR](https://www.systeme-de-design.gouv.fr/composants-et-modeles/composants/ajout-de-fichier)

<VIcon name="vi-file-type-storybook" /> La story sur le pied de page sur le storybook de [VueDsfr](https://storybook.vue-ds.fr/?path=/story/composants-dsfrfileupload--docs)

## 🛠️ Props

| Nom            | Type        | Défaut                  | Obligatoire   | Description                                                    |
|----------------|-------------|-------------------------|---------------|----------------------------------------------------------------|
| `id`           | `Function`  | `() => useRandomId(...)`|               | Identifiant unique pour le composant de téléchargement de fichier. Si non spécifié, un ID aléatoire est généré.    |
| `label`        | `string`    | `'Ajouter un fichier'`  |               | Libellé pour le bouton de téléchargement de fichier.          |
| `accept`       | `string \| string[]`  | `undefined`   |               | Types de fichiers acceptés, spécifiés sous forme de chaîne de caractères (comme l’attribut `accept` de HTML) ou d'un tableau de chaînes de caractères (qui sera transformé en chaîne).   |
| `hint`         | `string`    | `''`                    |               | Texte d'indice pour guider l'utilisateur.                    |
| `validMessage` | `string`    | `''`                    |               | Message indiquant que le fichier téléchargé est valide.       |
| `error`        | `string`    | `''`                    |               | Message d'erreur à afficher en cas de problème lors du téléchargement. |
| `modelValue`   | `string`    | `''`                    |               | Valeur liée au modèle de l'input de téléchargement de fichier.|

## 📡Événements

| Nom                | Description                                                                        |
|--------------------|------------------------------------------------------------------------------------|
| `update:modelValue`| Événement émis lors de la mise à jour de la valeur du modèle liée au fichier.      |
| `change`           | Événement émis lors du changement du fichier sélectionné.                           |

## 📝 Exemples

Voici comment vous pourriez utiliser `DsfrFileUpload` :

::: code-group

<Story data-title="Démo" min-h="300px">
  <DsfrFileUploadDemo />
</Story>

<<< docs-demo/DsfrFileUploadDemo.vue

:::

## ⚙️ Code source du composant

::: code-group

<<< DsfrFileUpload.vue
<<< DsfrFileUpload.types.ts

:::

<script setup lang="ts">
import DsfrFileUploadDemo from './docs-demo/DsfrFileUploadDemo.vue'
</script>
