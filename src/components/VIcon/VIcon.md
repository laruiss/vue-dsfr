# VIcon

## 🌟 Introduction

Le composant `VIcon` est un composant Vue.js permettant d'afficher des icônes avec une large gamme d'options de personnalisation, y compris des animations, des couleurs, et des tailles. Il est conçu pour être flexible et performant, avec une prise en charge des différentes options d'affichage, de flip, et de titres accessibles.

Il a exactement la même API que OhVueIcon, et utilise `@iconify/vue` sous le capot.

::: warning Attention
Les noms des icônes doivent être ceux de [Iconify-vue](https://icon-sets.iconify.design/).
:::

## 📐 Structure

Le composant `VIcon` s'intègre facilement en utilisant la syntaxe suivante :

```vue
<VIcon name="nom-collection:nom-de-l-icone" :scale="1.5" color="#FF5733" animation="spin" />
```

```vue
<VIcon name="ri:alert-fill" :scale="1.5" color="#FF5733" animation="ring" />
```

::: tip Migration depuis 5.x

Pour les noms de collection qui ne contiennent pas de tiret (`-`), il est accepté de séparer le nom de la collection du nom de l’icône avec un tiret `-`.

```vue
<VIcon name="ri-alert-fill" :scale="1.5" color="#FF5733" animation="ring" />
```

Ceci rend le composant VIcon totalement compatible avec OhVueIcon si n’étaient utilisées que les icônes RemixIcon et quelques autres collections.

:::

::: tip DX

Pour l’expérience développeur, il est conseillé d’utiliser l’extension vscode [antfu.iconify](https://marketplace.visualstudio.com/items?itemName=antfu.iconify).

:::

## 🛠️ Props

Voici les différentes propriétés que vous pouvez utiliser avec ce composant :

| Prop           | Type                                | Défaut          | Description                                                                                                                                              |
|----------------|-------------------------------------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| `name`         | `string`                            | **Obligatoire** | Le nom de l'icône à afficher.                                                                                                                             |
| `scale`        | `string \| number`                  | `1`             | Échelle de l'icône, avec un facteur multiplicateur de la taille par défaut.                                                                               |
| `verticalAlign`| `string`                            | `'-0.2em'`      | Alignement vertical de l'icône par rapport à la ligne de base.                                                                                           |
| `animation`    | `'spin' \| 'wrench' \| 'pulse' \| 'spin-pulse' \| 'flash' \| 'float'` | `undefined` | Type d'animation appliqué à l'icône.                                                                                                                     |
| `speed`        | `'fast' \| 'slow'`                  | `undefined`     | Vitesse de l'animation si elle est définie.                                                                                                              |
| `flip`         | `'horizontal' \| 'vertical' \| 'both'` | `undefined`  | Inverse l'icône horizontalement, verticalement ou les deux.                                                                                               |
| `label`        | `string`                            | `undefined`     | Étiquette ARIA pour l'accessibilité.                                                                                                                     |
| `title`        | `string`                            | `undefined`     | Titre de l'icône (balise `<title>`), utilisé pour l'accessibilité et les info-bulles.                                                                     |
| `color`        | `string`                            | `undefined`     | Couleur principale de l'icône.                                                                                                                           |
| `fill`         | `string`                            | `undefined`     | Couleur de remplissage de l'icône (utilise *in fine* `color` comme conseillé dans la doc de @iconify/vue). Cette prop n’existe que pour la rétrocompatibilité avec OhVueIcon, préférer l’utilisation de la prop `color`.                                                                                                                      |
| `inverse`      | `boolean`                           | `false`         | Applique une couleur inversée à l'icône.                                                                                                                 |
| `ssr`          | `boolean`                           | `false`         | Active le rendu côté serveur (Server-Side Rendering).                                                                                                     |
| `display`      | `'block' \| 'inline-block' \| 'inline'` | `'inline-block'` | Définit le mode d'affichage de l'icône.                                                                                                                |

## 📡Événements

Ce composant ne déclenche pas d'événements personnalisés.

## 🧩 Slots

Ce composant ne contient pas de slots.

## ⚙️ Code source du composant

::: code-group

<Story data-title="Démo" min-h="600px">
  <VIconExample />
</Story>

<<< docs-demo/VIconExample.vue [Code de la démo]

<<< VIcon.vue
:::

<script setup lang="ts">
import VIconExample from './docs-demo/VIconExample.vue'
</script>
