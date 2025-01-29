# DsfrButton

## 🌟 Introduction

Le bouton est un élément d’interaction avec l’interface permettant à l’utilisateur d’effectuer une action.

Le `DsfrButton` est un composant Vue élégant et réutilisable, conçu pour simplifier la création de boutons personnalisés. Il intègre des tailles ajustables, des icônes optionnelles et un gestionnaire de clics, tout en respectant le style de `DSFR`. Son utilisation est simple, avec une grande flexibilité pour s'adapter à différents contextes.

🏅 La documentation sur l’alerte sur le [DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/bouton)

<VIcon name="vi-file-type-storybook" /> La story sur l’alerte sur le storybook de [VueDsfr](https://storybook.vue-ds.fr/?path=/docs/composants-dsfrbutton--docs)

## 📐 Structure

Les boutons sont composés de :

- Un label - obligatoire, soit en utilisant la prop `label` soit en utilisant le slot par défaut ;
- Une icône, pouvant être modifiée (voir les icônes disponibles) - optionnelle.

## 🛠️ Props

| Nom         | Type                       | Défaut     | Obligatoire | Description                                           |
|-------------|----------------------------|------------|:-----------:|-------------------------------------------------------|
| `size`      | `'sm' \| 'md' \| 'lg'`     | `'md'`     |             | Taille du bouton. Peut être 'sm', 'md', ou 'lg'.      |
| `icon`      | `string \| object`         | `undefined`|             | Icône à afficher dans le bouton. Peut être un nom ou une configuration d'icône. |
| `label`     | `string`                   | `undefined`|             | Étiquette textuelle du bouton. Si le label est laissé à undefined, le slot par défaut doit contenir du texte !                        |
| `onClick`   | `Function`                 | `() => {}` |             | Fonction appelée lors du clic sur le bouton.          |

## 📡Évenements

- `click` : Émis lorsque le bouton est cliqué.

## 🧩 Slots

- `default` : Emplacement pour le contenu personnalisé du bouton. Inséré dans `<button class="fr-btn"><span">`.

## ✨ Les groupes de boutons

Cf. [documentation dédiée](/composants/DsfrButtonGroup)

## 📝 Exemples

Un bouton large avec une icône 'maison' à gauche et le texte 'Accueil' :

::: code-group

<Story data-title="Démo">
  <DsfrButtonExample1 />
</Story>

<<< docs-demo/DsfrButtonExample1.vue [Code de la démo]
:::

Un petit bouton avec le texte 'Aller plus loin', du contenu supplémentaire dans le slot par défaut, et une icône à droite :

::: code-group

<Story data-title="Démo">
  <DsfrButtonExample2 />
</Story>

<<< docs-demo/DsfrButtonExample2.vue [Code de la démo]
:::

## 📝 (Presque) toutes les variantes 🌈 de boutons

::: code-group

<Story data-title="Démo" min-h="1200px">
  <DsfrButtonDemo />
</Story>

<<< docs-demo/DsfrButtonDemo.vue [Code de la démo]

:::

## ⚙️ Code source du composant

::: code-group

<<< DsfrButton.vue
<<< DsfrButton.types.ts

:::

Et voilà ! Notre DsfrButton est prêt à illuminer votre interface avec style et fonctionnalité. N'oubliez pas d'appuyer sur ces boutons avec panache ! 🚀

<script setup lang="ts">
import DsfrButtonDemo from './docs-demo/DsfrButtonDemo.vue'
import DsfrButtonExample1 from './docs-demo/DsfrButtonExample1.vue'
import DsfrButtonExample2 from './docs-demo/DsfrButtonExample2.vue'
</script>
