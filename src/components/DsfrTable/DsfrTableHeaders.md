# En-têtes de tableau

## 🌟 Introduction

Bienvenue dans la documentation du composant `DsfrTableHeaders`! Ce composant est comme le maestro d'un orchestre, orchestrant l'affichage des en-têtes de vos tableaux Vue avec élégance et précision. Allons-y pour découvrir ses caractéristiques.

🏅 La documentation sur le tableau sur le [DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/tableau/)

<VIcon name="vi-file-type-storybook" /> La story sur les en-têtes de tableau sur le storybook de [VueDsfr](https://storybook.vue-ds.fr/?path=/docs/composants-dsfrtableheaders--docs)

## 🛠️ Props

| Nom       | Type                        | Défaut | Obligatoire | Description                                                          |
|-----------|-----------------------------|--------|-------------|----------------------------------------------------------------------|
| `headers` | `DsfrTableHeadersProps`     |        | ✅           | Un tableau d'objets ou de chaînes représentant les en-têtes du tableau. |

### Description des Types

- **`DsfrTableHeadersProps`**: Un tableau composé d'objets ou de chaînes. Un objet peut avoir une propriété `text` (chaîne) pour le texte de l'en-tête et `headerAttrs` (objet) pour les attributs HTML supplémentaires à appliquer sur l'en-tête.

## 🧩 Slots

Pas de slots spécifiques pour ce composant. Il s'agit principalement d'un composant utilitaire pour `DsfrTable`.

## 📝 Exemples

### Exemple Basique

```vue
<DsfrTableHeaders :headers="['Nom', 'Age', 'Ville']" />
```

### Exemple avec Attributs Supplémentaires

::: code-group

<Story data-title="Démo" min-h="320px">
  <div class="fr-container">
    <DsfrTableHeadersDemo />
  </div>
</Story>

<<< ./docs-demo/DsfrTableHeadersDemo.vue

:::

::: tip Petit conseil

Utiliser des objets pour les en-têtes vous permet d'ajouter des classes CSS ou d'autres attributs pour personnaliser davantage vos en-têtes!

:::

## ⚙️ Code source du composant

::: code-group

<<< DsfrTableHeader.vue
<<< DsfrTable.types.ts

:::

Voilà, chers développeurs, prêts à rendre vos tableaux encore plus impressionnants avec `DsfrTableHeaders` ! 🌟

<script setup lang="ts">
import DsfrTableHeadersDemo from './docs-demo/DsfrTableHeadersDemo.vue'
</script>
