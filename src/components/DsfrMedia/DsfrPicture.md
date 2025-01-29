# Image - `DsfrPicture`

Les contenus médias désignent vos contenus photos et vidéos. Lorsqu’ils sont intégrés à une page de contenu, il est recommandé de suivre les règles décrites ci-dessous.

🏅 La documentation sur les contenus médias sur le [DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/contenus-medias)

<VIcon name="vi-file-type-storybook" /> La story sur le contenu média image (picture) sur le storybook de [VueDsfr](https://storybook.vue-ds.fr/?path=/docs/composants-dsfrpicture--docs)

## 🌟 Introduction

Le composant `DsfrPicture` permet d'afficher une image de manière responsive, avec une légende optionnelle. Il est conçu pour être flexible, offrant des options pour personnaliser la taille, le ratio, et le contenu de l'image. Ce composant est idéal pour intégrer des images dans une interface utilisateur tout en garantissant leur adaptabilité et accessibilité.

Le `DsfrPicture` utilise une structure HTML sémantique avec `<figure>` et `<figcaption>` pour améliorer l'accessibilité. Il applique des classes CSS conditionnelles pour ajuster la taille et le ratio de l'image en fonction des props fournies. Le slot par défaut permet une personnalisation avancée du contenu de l'image.

## 📐 Structure

- `<DsfrPicture>` : Le composant principal.
  - Affiche une image avec un ratio et une taille personnalisés.
  - Inclut une légende sous l'image.
  - Utilise un slot pour permettre l'insertion d'un contenu personnalisé, comme un SVG.

## 🛠️ Props

| Propriété | Type                                | Description                                               | Valeur par défaut |
|-----------|-------------------------------------|-----------------------------------------------------------|-------------------|
| `alt`     | `string`                            | Texte alternatif pour l'image, utilisé pour l'accessibilité. | `''`              |
| `legend`  | `string`                            | Légende à afficher sous l'image.                           | `''`              |
| `size`    | `'small' \| 'medium' \| 'large'`    | Taille de l'image (petite, moyenne, ou grande).            | `'medium'`        |
| `src`     | `string`                            | URL de l'image à afficher.                                 | `obligatoire`     |
| `title`   | `string`                            | Titre de l'image, affiché au survol.                       | `''`              |
| `ratio`   | `string`                            | Ratio de l'image (par exemple, '16x9').                    | `'16x9'`          |

## 📡Événements

Ce composant ne déclenche pas d'événements spécifiques.

## 🧩 Slots

- `default` : Slot pour insérer un contenu personnalisé (comme une image SVG). Si aucun contenu n'est fourni, l'image spécifiée par `src` est utilisée.

## 📝 Exemples

::: code-group

<Story data-title="Démo" min-h="400px">
  <DsfrPictureDemo />
</Story>

<<< docs-demo/DsfrPictureDemo.vue [Code de la démo]

:::

## ⚙️ Code source du composant

::: code-group

<<< DsfrPicture.vue
<<< DsfrMedia.types.ts

:::

<script setup lang="ts">
import DsfrPictureDemo from './docs-demo/DsfrPictureDemo.vue'
</script>
