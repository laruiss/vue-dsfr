# Liens d’évitement - `DsfrSkipLinks`

## 🌟 Introduction

Le composant `DsfrSkipLinks` fournit des liens d'accès rapide, permettant aux utilisateurs de naviguer directement vers des sections clés de la page. Ce composant est particulièrement utile pour améliorer l'accessibilité, notamment pour les utilisateurs de lecteurs d'écran ou de navigation clavier, en respectant les standards du [Design System de l'État Français (DSFR)](https://www.systeme-de-design.gouv.fr/).

🏅 La documentation sur les liens d’évitement le [DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/lien-d-evitement)

<VIcon name="vi-file-type-storybook" /> La story sur les liens d’évitement sur le storybook de [VueDsfr](https://storybook.vue-ds.fr/?path=/docs/composants-dsfrskiplinks--docs)

## 📐 Structure

Le composant affiche :

- Une barre de navigation contenant une liste de liens.
- Chaque lien pointe vers une ancre identifiée dans la page via un attribut `id`.

## 🛠️ Props

| Nom    | Type                              | Description                                                         |
|--------|-----------------------------------|---------------------------------------------------------------------|
| `links`| `{ id: string, text: string }[]` | Liste des liens d'accès rapide. Chaque objet contient :             |

### Format de `links`

| Nom   | Type     | Description                                                  |
|-------|----------|--------------------------------------------------------------|
| `id`  | `string` | Identifiant de l'élément cible (doit correspondre à un `id` dans la page). |
| `text`| `string` | Texte affiché pour le lien d'accès rapide.                   |

## 📡Événements

Aucun événement spécifique n'est émis par ce composant.

## 🧩 Slots

Aucun slot disponible pour ce composant.

## 📝 Exemples

### Exemple de base

```vue
<DsfrSkipLinks
  :links="[
    { id: 'main-content', text: 'Aller au contenu principal' },
    { id: 'navigation', text: 'Aller au menu' },
    { id: 'footer', text: 'Aller au pied de page' }
  ]"
/>
```

### Exemple complet

::: code-group

<Story data-title="Démo" min-h="200px">
  <DsfrSkipLinksDemo />
</Story>

<<< docs-demo/DsfrSkipLinksDemo.vue [Code de la démo]

:::

## ⚙️ Code source du composant

::: code-group

<<< DsfrSkipLinks.vue
<<< DsfrSkipLinks.types.ts

:::

<script setup lang="ts">
import DsfrSkipLinksDemo from './docs-demo/DsfrSkipLinksDemo.vue'
</script>
