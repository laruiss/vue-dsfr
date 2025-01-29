# Onglets - `DsfrTabs`

## 🌟 Introduction

Le composant onglet permet aux utilisateurs de naviguer dans différentes sections de contenu au sein d’une même page.

Le système d'onglet aide à regrouper différents contenus dans un espace limité et permet de diviser un contenu dense en sections accessibles individuellement afin de faciliter la lecture pour l'utilisateur.

🏅 La documentation sur les onglets sur le [DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/onglet/)

<VIcon name="vi-file-type-storybook" /> La story sur les onglets sur le storybook de [VueDsfr](https://storybook.vue-ds.fr/?path=/docs/composants-dsfrtabs--docs)

## 📐 Structure

Chaque onglet se compose des éléments suivants :

- un icône à gauche du titre - optionnel.
- un titre cliquable - obligatoire ( permet d’afficher la zone de contenu qui lui est associée).

Si le nombre d’onglets dépasse la largeur du container, un scroll horizontal permet de naviguer entre les différents onglets.

## 🛠️ Props

| Nom                  | Type                      | Défaut       | Obligatoire | Description                                                |
|----------------------|---------------------------|--------------|-------------|------------------------------------------------------------|
| `tabContents`          | `string[]`                   | `[]`   |             | Contenus (simples) des onglets.                                      |
| `modelValue` | `number`                  | `0`          |             | Index de l'onglet sélectionné au chargement (*existe depuis VueDsfr v6.0.0*).               |
| `tabTitles`            | `string[]`                   | `[]`   |             | Titres des onglets avec les id des panneaux et onglets associés. |

## 📡Événements

|  nom                   |   donnée (*payload*) | détail de la donnée
| ---------------------- |  ---------            | --- |
| `'update:modelValue'` |       *`number`*       | Émis lorsqu'un onglet est sélectionné. Envoyant l'index de l'onglet sélectionné. |

::: warning Important
Depuis la v6, le composant `DsfrTabs` déclarant la prop `modelValue` et émettant l’événement `update:modelValue`, il est recommandé d’utiliser la directive `v-model`. Elle contient l’index (commençant à 0) de l’onglet à afficher.

Aussi, plus besoin, depuis la v6, d’utiliser le composable `useTabs()`. Cf. les exemples ci-dessous.
:::

## 🧩 Slots

| Nom          | Description                                                        |
|--------------|--------------------------------------------------------------------|
| `tab-items`    | Slot nommé pour insérer des titres d’onglets personnalisés. Si rempli, la prop `tabTitles` n’a aucun effet. |
| `default`      | Slot par défaut pour le contenu des onglets.                       |

## L es méthodes exposées

- `DsfrTabs#renderTabs()`: permet de forcer le recalcul de la hauteur de l’onglet

::: warning Important depuis la v6

Méthodes supprimées :

- `DsfrTabs#selectFirst()` : permet de sélectionner le premier onglet (raccourci de `selectIndex(0)`)
- `DsfrTabs#selectLast()` : permet de sélectionner le dernier onglet (raccourci de `selectIndex(tabs.length - 1)`)
- `DsfrTabs#selectIndex(index: number)` : permet de sélectionner un onglet particulier

Ces méthodes n’existent plus, il faut désormais utiliser directement la *ref* utilisée dans le `v-model` de `DsfrTabs`.

Au lieu de :

```vue
<script lang="ts">
import { ref } from 'vue'

const tabs = ref<HTMLElement>()
const activeTab = ref(0)

// Quelque part dans le code :
tabs.value.selectFirst()
tabs.value.selectLast()
tabs.value.selectIndex(activeTab.value)

// (...)
</script>

<template>
  <!-- eslint-disable-next-line vue/no-unused-refs -->
  <DsfrTabs ref="tabs">
    <!-- (...) -->
  </DsfrTabs>
</template>
```

Utiliser :

```vue
<script lang="ts">
import { ref } from 'vue'

const activeTab = ref(0)
// Quelque part dans le code :
activeTab.value = 0 // active le premier onglet
activeTab.value = n // active l’onglet n
activeTab.value = tabTitles.length - 1 // active le dernier onglet

// (...)
</script>

<template>
  <DsfrTabs v-model="activeTab">
    <!-- (...) -->
  </DsfrTabs>
</template>
```

:::

## 📝 Exemples

1. **Onglets Simples :**

  ::: code-group

  <Story data-title="Démo" min-h="160px">
    <DsfrTabsDemoSimple />
  </Story>

  <<< docs-demo/DsfrTabsDemoSimple.vue [Code de la démo]

  :::
2. **Onglets Complexes :**

  ::: code-group

  <Story data-title="Démo" min-h="600px">
    <DsfrTabsDemoComplex />
  </Story>

  <<< docs-demo/DsfrTabsDemoComplex.vue [Code de la démo]

  :::

## ⚙️ Code source des composants

::: code-group
<<< DsfrTabs.vue
<<< DsfrTabContent.vue
<<< DsfrTabItem.vue
<<< DsfrTabs.types.ts
<<< injection-key.ts
:::

<script setup lang="ts">
import DsfrTabsDemoSimple from './docs-demo/DsfrTabsDemoSimple.vue'
import DsfrTabsDemoComplex from './docs-demo/DsfrTabsDemoComplex.vue'
</script>
