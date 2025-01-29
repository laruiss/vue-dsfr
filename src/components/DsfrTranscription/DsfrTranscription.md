# Transcription - `DsfrTranscription`

🏅 La documentation sur la transcription sur le [DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/transcription)

<VIcon name="vi-file-type-storybook" /> La story sur la transcription sur le storybook de [VueDsfr](https://storybook.vue-ds.fr/?path=/docs/composants-dsfrtranscription--docs)

## 🌟 Introduction

Le composant `DsfrTranscription` est conçu pour afficher la transcription du contenu d'une vidéo. Il permet aux utilisateurs d'accéder facilement au texte de la vidéo, offrant ainsi une meilleure accessibilité. Le composant peut afficher la transcription dans une section extensible ou dans une fenêtre modale pour une lecture plus confortable.

Le `DsfrTranscription` peut afficher la transcription dans une section extensible ou la charger dans une fenêtre modale grâce à l'utilisation du composant `DsfrModal` et du `Teleport` pour un rendu à l'extérieur de la hiérarchie DOM parent.

## 📐 Structure

- `<DsfrTranscription>` : Le composant principal.
  - Contient un bouton pour afficher ou masquer la transcription.
  - Affiche la transcription dans une section extensible ou une fenêtre modale.

## 🛠️ Props

| Propriété | Type     | Description                                                | Valeur par défaut                   |
|-----------|----------|------------------------------------------------------------|-------------------------------------|
| `id`      | `string` | ID unique pour le composant, utilisé pour l'accessibilité. | `useRandomId('transcription')`      |
| `title`   | `string` | Titre de la transcription.                                  | `'Titre de la vidéo'`               |
| `content` | `string` | Contenu de la transcription.                                | `'Transcription du contenu de la vidéo'` |

## 📡Événements

Ce composant ne déclenche pas d'événements spécifiques.

## 🧩 Slots

- `default` : Slot pour insérer du contenu personnalisé à la place de la transcription par défaut.

## 📝 Exemples

::: code-group

<Story data-title="Démo" min-h="400px">
  <DsfrTranscriptionDemo />
</Story>

<<< docs-demo/DsfrTranscriptionDemo.vue [Code de la démo]

:::

## ⚙️ Code source du composant

::: code-group

<<< DsfrTranscription.vue
<<< DsfrTranscription.types.ts

:::

<script setup lang="ts">
import DsfrTranscriptionDemo from './docs-demo/DsfrTranscriptionDemo.vue'
</script>
