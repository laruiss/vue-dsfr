# Citation - `DsfrQuote`

## 🌟 Introduction

Le composant `DsfrQuote` permet d’afficher une citation stylisée, accompagnée d’un auteur, d’une source, et éventuellement d’une image illustrative. Ce composant respecte les standards du [Design System de l'État Français (DSFR)](https://www.systeme-de-design.gouv.fr/) pour offrir une présentation élégante et accessible.

🏅 La documentation sur les liens d’évitement le [DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/citation)

<VIcon name="vi-file-type-storybook" /> La story sur les liens d’évitement sur le storybook de [VueDsfr](https://storybook.vue-ds.fr/?path=/docs/composants-dsfrquote--docs)

## 📐 Structure

Le composant affiche :

- Une citation (`<blockquote>`) avec un lien optionnel vers la source.
- Une légende (`<figcaption>`) contenant :
  - Le nom de l’auteur.
  - La source de la citation, accompagnée d’un lien ou de détails supplémentaires.
- Une image optionnelle, destinée à illustrer visuellement la citation.

## 🛠️ Props

| Nom          | Type                              | Défaut       | Description                                                                 |
|--------------|-----------------------------------|--------------|-----------------------------------------------------------------------------|
| `quote`      | `string`                          | `undefined`  | Texte de la citation.                                                      |
| `author`     | `string`                          | `undefined`  | Nom de l’auteur de la citation.                                            |
| `details`    | `{ label: string, url: string }[]`| `[]`         | Détails supplémentaires sous forme de liste (liens ou texte).              |
| `source`     | `string`                          | `''`         | Nom de la source de la citation.                                           |
| `sourceUrl`  | `string`                          | `''`         | URL de la source, utilisée pour l’attribut `cite` du bloc de citation.     |
| `quoteImage` | `string`                          | `''`         | URL de l’image illustrative associée à la citation.                        |

## 📡Événements

Aucun événement spécifique n'est émis par ce composant.

## 🧩 Slots

Aucun slot disponible pour ce composant.

## 📝 Exemples

### Exemple de base

```vue
<DsfrQuote
  quote="L'accessibilité numérique est un droit fondamental."
  author="Tim Berners-Lee"
  source="W3C"
  sourceUrl="https://www.w3.org/"
  :details="[
    { label: 'Voir le site officiel', url: 'https://www.w3.org/' }
  ]"
  quoteImage="https://www.example.com/image.jpg"
/>
```

### Exemple complet

::: code-group

<Story data-title="Démo" min-h="120px">
  <DsfrQuoteDemo />
</Story>

<<< docs-demo/DsfrQuoteDemo.vue [Code de la démo]

:::

## ⚙️ Code source du composant

::: code-group

<<< DsfrQuote.vue
<<< DsfrQuote.types.ts

:::

<script setup lang="ts">
import DsfrQuoteDemo from './docs-demo/DsfrQuoteDemo.vue'
</script>
