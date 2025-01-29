# Video - `DsfrVideo`

Les contenus médias désignent vos contenus photos et vidéos. Lorsqu’ils sont intégrés à une page de contenu, il est recommandé de suivre les règles décrites ci-dessous.

🏅 La documentation sur les contenus médias sur le [DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/contenus-medias)

<VIcon name="vi-file-type-storybook" /> La story sur le contenus média video sur le storybook de [VueDsfr](https://storybook.vue-ds.fr/?path=/docs/composants-dsfrvideo--docs)

## 🌟 Introduction

Le composant `DsfrVideo` permet d'intégrer une vidéo responsive avec une légende et une transcription. Il s'agit d'une solution complète pour afficher des vidéos dans une interface utilisateur, tout en fournissant des fonctionnalités d'accessibilité telles que la transcription du contenu vidéo.

Le `DsfrVideo` utilise un élément `<iframe>` pour intégrer la vidéo de manière responsive. Il ajuste automatiquement la taille et le ratio de la vidéo en fonction des props fournies. Le composant inclut également un sous-composant `DsfrTranscription` pour afficher la transcription du contenu vidéo, améliorant ainsi l'accessibilité.

## 📐 Structure

- `<DsfrVideo>` : Le composant principal.
  - Affiche une vidéo à partir d'une URL.
  - Inclut une légende sous la vidéo.
  - Intègre une transcription optionnelle via le composant `DsfrTranscription`.

## 🛠️ Props

| Propriété              | Type     | Description                                                              | Valeur par défaut |
|------------------------|----------|--------------------------------------------------------------------------|-------------------|
| `src`                  | `string` | URL de la vidéo à afficher.                                              | `obligatoire`     |
| `legend`               | `string` | Légende à afficher sous la vidéo.                                        | `''`              |
| `size`                 | `'small' \| 'medium' \| 'large'` | Taille de la vidéo (petite, moyenne, ou grande).                          | `'medium'`        |
| `transcriptionTitle`   | `string` | Titre de la transcription (si disponible).                               | `''`              |
| `transcriptionContent` | `string` | Contenu de la transcription (si disponible).                             | `''`              |
| `ratio`                | `string` | Ratio de la vidéo (par exemple, '16x9').                                 | `'16x9'`          |

## 📡Événements

Ce composant ne déclenche pas d'événements spécifiques.

## 🧩 Slots

Ce composant n'utilise pas de slots.

## 📝 Exemples

::: code-group

<Story data-title="Démo" min-h="400px">
  <DsfrVideoDemo />
</Story>

<<< docs-demo/DsfrVideoDemo.vue [Code de la démo]

:::

## ⚙️ Code source du composant

::: code-group

<<< DsfrVideo.vue
<<< DsfrMedia.types.ts

:::

<script setup lang="ts">
import DsfrVideoDemo from './docs-demo/DsfrVideoDemo.vue'
</script>
