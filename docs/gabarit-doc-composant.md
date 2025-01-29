# Tuile - `DsfrTile`

## 🌟Introduction

La tuile est un raccourci ou point d’entrée qui redirige les utilisateurs vers des pages de contenu. Elle fait généralement partie d'une collection ou liste de tuiles similaires. La tuile n’est jamais présentée de manière isolée.

Le composant `DsfrTile` est une tuile flexible et stylisée, idéale pour afficher des informations sous forme de cartes visuelles dans une interface utilisateur. Ce composant permet d'intégrer des images, des SVG, des descriptions, des détails et des liens, tout en offrant de nombreuses options de personnalisation visuelle.

🏅 La documentation sur la tuile sur le [DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/tuile/)

<VIcon name="vi-file-type-storybook" /> La story sur la tuile sur le storybook de [VueDsfr](https://storybook.vue-ds.fr/?path=/docs/composants-dsfrtile--docs)

## 📐Structure

- `<DsfrTile>` : Le composant principal.
  - Affiche un titre, une description, des détails et un pictogramme (image ou SVG).
  - Peut être configuré pour différents styles et comportements via ses props.

## 🛠️ Props

| Propriété      | Type                    | Description                                                                                         | Valeur par défaut                                      |
|----------------|-------------------------|-----------------------------------------------------------------------------------------------------|--------------------------------------------------------|
| `title`        | `string`                | Le titre de la tuile.                                                                               | `'Titre de la tuile'`                                   |
| `imgSrc`       | `string`                | Source de l'image à afficher.                                                                       | `undefined`                                            |
| `svgPath`      | `string`                | Chemin vers le SVG à afficher.                                                                      | `undefined`                                            |
| `svgAttrs`     | `Record<string, unknown>` | Attributs pour le SVG.                                                                               | `{ viewBox: '0 0 80 80', width: '80px', height: '80px' }` |
| `description`  | `string`                | Description de la tuile.                                                                            | `undefined`                                            |
| `details`      | `string`                | Détails supplémentaires à afficher dans la tuile.                                                   | `undefined`                                            |
| `disabled`     | `boolean`               | Si vrai, la tuile est désactivée et non cliquable.                                                  | `false`                                                |
| `horizontal`   | `boolean`               | Si vrai, la tuile est affichée horizontalement.                                                     | `false`                                                |
| `vertical`     | `'md' \| 'lg'`          | Taille verticale de la tuile.                                                                        | `undefined`                                            |
| `to`           | `RouteLocationRaw`      | Lien ou destination du routeur Vue.                                                                 | `'#'`                                                  |
| `titleTag`     | `string`                | Tag HTML pour le titre.                                                                             | `'h3'`                                                 |
| `download`     | `boolean`               | Si vrai, le lien est un téléchargement.                                                             | `false`                                                |
| `small`        | `boolean`               | Si vrai, affiche une tuile plus petite.                                                             | `false`                                                |
| `icon`         | `boolean`               | Si faux, n'affiche pas d'icône dans la tuile.                                                       | `true`                                                 |
| `noBorder`     | `boolean`               | Si vrai, n'affiche pas de bordure autour de la tuile.                                               | `false`                                                |
| `shadow`       | `boolean`               | Si vrai, affiche une ombre autour de la tuile.                                                      | `false`                                                |
| `noBackground` | `boolean`               | Si vrai, n'affiche pas de fond dans la tuile.                                                       | `false`                                                |
| `grey`         | `boolean`               | Si vrai, affiche un fond gris pour la tuile.                                                        | `false`                                                |

## 📡Événements

Ce composant ne déclenche pas d'événements spécifiques.

## 🧩Slots

- `header` : Slot pour insérer du contenu personnalisé dans l'en-tête de la tuile.

## 📝Exemples

Section vide comme demandé.

## ⚙️ Code source du composant

Le `DsfrTile` est hautement personnalisable, avec de nombreuses props pour ajuster son apparence et son comportement. Il gère les liens externes et internes de manière transparente, et offre une accessibilité améliorée avec des attributs ARIA configurables.

## 📐 Structure

## 🛠️ Props

## 📡 Événements

## 🧩 Slots

## 📝 Exemples

## ⚙️ Code source du composant

Dans le titre ## 📝 Exemples, je veux simplement ceci:

::: code-group

:::

Et dans `## ⚙️ Code source du composant`, je veux ceci:

::: code-group

Dsfr.vue
Dsfr.types.ts

:::
