# Partage - `DsfrShare`

## 🌟 Introduction

Le composant `DsfrShare` permet d’ajouter une fonctionnalité de partage sur une page, en respectant les standards du [Design System de l'État Français (DSFR)](https://www.systeme-de-design.gouv.fr/). Il propose des boutons configurables pour partager via des réseaux sociaux, par email ou en copiant le lien dans le presse-papier.

🏅 La documentation sur le partage le [DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/partage)

<VIcon name="vi-file-type-storybook" /> La story sur le partage sur le storybook de [VueDsfr](https://storybook.vue-ds.fr/?path=/docs/composants-dsfrshare--docs)

## 📐 Structure

Le composant affiche :

- Un titre pour la section de partage.
- Une liste de boutons pour :
  - Partager sur des réseaux sociaux (paramétrables).
  - Envoyer un email.
  - Copier l'URL courante dans le presse-papier.

Les boutons sont stylisés avec des classes spécifiques et peuvent ouvrir une nouvelle fenêtre pour les réseaux sociaux.

## 🛠️ Props

| Nom         | Type                                 | Défaut                      | Description                                                                 |
|-------------|--------------------------------------|-----------------------------|-----------------------------------------------------------------------------|
| `title`     | `string`                             | `'Partager la page'`        | Titre affiché au-dessus des boutons de partage.                            |
| `copyLabel` | `string`                             | `'Copier dans le presse-papier'` | Texte du bouton de copie du lien dans le presse-papier.                    |
| `mail`      | `{ label: string, to: string }`      | `undefined`                 | Configuration du bouton pour partager par email (`label` pour le texte, `to` pour l’URL `mailto`). |
| `networks`  | `{ name: string, label: string, url: string }[]` | `[]`                        | Liste des réseaux sociaux avec leur nom, leur étiquette et leur URL.       |

### Détails des objets `mail` et `networks`

#### `mail`

| Nom    | Type     | Description                                  |
|--------|----------|----------------------------------------------|
| `label` | `string` | Texte affiché sur le bouton email.          |
| `to`    | `string` | URL `mailto` pour ouvrir le client email.   |

#### `networks`

| Nom     | Type     | Description                                      |
|---------|----------|--------------------------------------------------|
| `name`  | `string` | Nom du réseau (utilisé pour la classe CSS du bouton, ex. `facebook`). |
| `label` | `string` | Texte affiché sur le bouton du réseau social.    |
| `url`   | `string` | URL de partage pour le réseau social.            |

## 📡Événements

Aucun événement spécifique n'est émis par ce composant.

## 🧩 Slots

Aucun slot disponible pour ce composant.

## 📝 Exemples

### Exemple de base

```vue
<DsfrShare
  :networks="[
    { name: 'facebook', label: 'Facebook', url: 'https://facebook.com/share?url=https://example.com' },
    { name: 'twitter', label: 'Twitter', url: 'https://twitter.com/intent/tweet?url=https://example.com' }
  ]"
  :mail="{ label: 'Partager par email', to: 'mailto:?subject=Partage&body=Voici un lien à partager : https://example.com' }"
/>
```

### Exemple complet

::: code-group

<Story data-title="Démo" min-h="120px">
  <DsfrShareDemo />
</Story>

<<< docs-demo/DsfrShareDemo.vue [Code de la démo]

:::

## ⚙️ Code source du composant

::: code-group

<<< DsfrShare.vue
<<< DsfrShare.types.ts

:::

<script setup lang="ts">
import DsfrShareDemo from './docs-demo/DsfrShareDemo.vue'
</script>
