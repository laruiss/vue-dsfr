# Bandeau d'information importante - `DsfrNotice`

## 🌟 Introduction

Le bandeau d’information importante permet aux utilisateurs de voir ou d’accéder à une information importante et temporaire.

Il est affiché sur l’ensemble des pages en desktop et en mobile. Il affiche une information importante et urgente (un usage trop fréquent risque de faire “disparaitre” ce bandeau).

🏅 La documentation sur le bandeau d’information importante sur le [DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/bandeau-d-information-importante)

<VIcon name="vi-file-type-storybook" /> La story sur le bandeau d’information importante sur le storybook de [VueDsfr](https://storybook.vue-ds.fr/?path=/docs/composants-dsfrnotice--docs)

## 📐 Structure

La notice est composée des éléments suivants :

- Un titre (prop `title`, de type `string`) :
  - Optionnel avec une valeur par défault `''`
- Une description (prop `desc`, de type `string`) :
  - optionnel avec une valeur par défault `''`
- un pictogramme et une couleur déterminés par la prop `type` qui peut valoir une des chaînes suivantes :
  - `'info'` (valeur par défaut si la prop `type` est absente)
  - `'warning'`
  - `'alert'`
  - `'weather-orange'`
  - `'weather-red'`
  - `'weather-purple'`
  - `'witness'`
  - `'kidnapping'`
  - `'attack'`
  - `'cyberattack'`
- Une icône d'information
- Une croix de fermeture si la prop `closeable` est à `true`

Slot(s) disponible(s):

- Le slot par `défaut` permet d'enrichir le contenu du paragraphe représentant le titre de la notice (tag `p` avec la classe `fr-notice__title`).
  - Ceci permet par exemple d'avoir un titre contenant un lien au fil du texte (tag `a`).
- Le slot par `desc` permet d'enrichir le contenu du paragraphe représentant le titre de la notice (tag `p` avec la classe `fr-notice__desc`).
  - Ceci permet par exemple d'avoir un titre contenant un lien au fil du texte (tag `a`).

## 🛠️ Props

|  nom                   |   type                                   |  défaut         | obligatoire |
| ----------------------- | --------------------------------------  | ---------------- | -------- |
| `title`                 | *`string`*                              |      `''`        |  |
| `desc`                  | *`string`*                              |      `''`        |  |
| `type`                  | *`'info' \| 'warning' \| 'alert'`...*   |     `'info'`     |  |
| `closeable`             | *`boolean`*                             |     `false       |  |

## 📡 Évenements

`DsfrNotice` déclenche l’événement `'close'` lors du clic sur la croix de fermeture pour fermer la notice.

|  nom                   |   donnée (*payload*) |
| ---------------------- |  ---------            |
| `'close'` |       *aucune*       |

## 🧩 Slots

`DsfrNotice` dispose d'un slot par défaut permettant de définir le contenu du titre dans le cas où celui-ci est plus complexe qu'une chaîne de caractères (utilisation de la props `title`).

| nom         | contenu par défaut |
|-------------|---------|
| `'default'` | *aucun* |
| `'desc'`    | *aucun* |

## 📝 Toutes les variantes 🌈 de Notice

::: code-group

<Story data-title="Démo" min-h="100px">
  <DsfrNoticeExample />
</Story>

<<< docs-demo/DsfrNoticeExample.vue [Code de la démo]

<<< DsfrNotice.vue
:::

<script setup lang="ts">
import DsfrNoticeExample from './docs-demo/DsfrNoticeExample.vue'
</script>
