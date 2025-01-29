# Logo - `DsfrLogo`

## 🌟 Introduction

Le composant `DsfrLogo` est utilisé pour afficher le logo institutionnel du Gouvernement français, en respectant les spécifications du [Design System de l'État Français (DSFR)](https://www.systeme-de-design.gouv.fr/). Ce composant permet d'afficher un texte simple ou multi-lignes représentant le logo, avec des options pour ajuster la taille.

<VIcon name="vi-file-type-storybook" /> La story sur Logo sur le storybook de [VueDsfr](https://storybook.vue-ds.fr/?path=/docs/composants-dsfrlogo--docs)

## 📐 Structure

Le composant affiche un élément `<p>` avec la classe CSS `fr-logo`, et des classes supplémentaires pour les variations de taille. Le texte du logo peut être personnalisé pour répondre à vos besoins.

## 🛠️ Props

| Nom         | Type                | Défaut          | Description                                                                 |
|-------------|---------------------|-----------------|-----------------------------------------------------------------------------|
| `small`     | `boolean`           | `false`         | Affiche le logo en petite taille (`fr-logo--sm`).                           |
| `large`     | `boolean`           | `false`         | Affiche le logo en grande taille (`fr-logo--lg`).                           |
| `logoText`  | `string | string[]` | `'Gouvernement'` | Texte ou tableau de textes à afficher comme logo. Les éléments du tableau sont séparés par un saut de ligne (`<br>`). |

## 📡Événements

Aucun événement spécifique n'est émis par ce composant.

## 🧩 Slots

Aucun slot disponible pour ce composant.

## 📝 Exemples

### Exemple de base

```vue
<DsfrLogo />
```

Résultat : Affiche le texte "Gouvernement" avec le style par défaut.

### Exemple avec un texte personnalisé

```vue
<DsfrLogo logoText="République Française" />
```

Résultat : Affiche le texte "République Française".

### Exemple avec un texte sur plusieurs lignes

```vue
<DsfrLogo :logoText="['Ministère de', 'l\'Éducation Nationale']" />
```

### Exemple complet

::: code-group

<Story data-title="Démo" min-h="150px">
  <DsfrLogoDemo />
</Story>

<<< docs-demo/DsfrLogoDemo.vue [Code de la démo]

:::

## ⚙️ Code source du composant

::: code-group

<<< DsfrLogo.vue
<<< DsfrLogo.types.ts

:::

<script setup lang="ts">
import DsfrLogoDemo from './docs-demo/DsfrLogoDemo.vue'
</script>
