# Groupe de boutons - `DsfrButtonGroup`

## 🌟 Introduction

Les boutons dans le contexte d'un groupe suivent les même règles que le composant bouton :

- Il prend en charge les 2 types de boutons (primaire, secondaire) ;
- Il gère les 3 tailles (prop `size` valeurs `sm`, `md`, `lg`) et les variantes ( Icônes / texte seul, avec icônes à gauche / droite).

## 📐 Structure

Ce composant est une simple balise `ul` qui peut recevoir un tableau de `DsfrButtonProps & ButtonHTMLAttributes` pour mettre chaque bouton dans un `li`.

Le slot par défaut peut être utilisé pour mettre vos boutons si la prop `buttons` est absente (ou un tableau vide).

## 🛠️ Props

Aucune prop n’est obligatoire

| Nom              | Type                     | Défaut             | Description |
|------------------|--------------------------|---------------     |-------------|
| align            | 'right' / 'center' / String   | undefined                 | Définit l'alignement des boutons dans le groupe. Peut être 'right' ou 'center'. |
| buttons          | `(DsfrButtonProps & ButtonHTMLAttributes)[]`                    | () => []           | Liste des boutons à afficher. Chaque bouton est un objet qui peut inclure toutes les pros d’un [DsfrButton](/composants/DsfrButton), y compris un gestionnaire `onClick`. |
| equisized        | `boolean`                       | false                  | Si `true`, tous les boutons du groupe auront la même largeur. |
| inlineLayoutWhen | `string \| boolean`         | 'never'                  | Détermine quand les boutons doivent être affichés sur une seule linge. Peut être `'always'`, `'never'`, ou correspondre à une taille spécifique (`'sm'`, `'md'`, `'lg'`). |
| iconRight        | `boolean`                       | false             | Si `true`, place les icônes à droite du texte dans tous les boutons. |
| size             | `'sm' \| 'md' \| 'lg'`   | 'md'                 | Détermine la taille des boutons. Peut être `'sm'` (petit), `'md`' (moyen, défaut), `'lg'` (grand). |

## 🧩 Slots

Le slot par défaut peut être utilisé pour mettre des boutons personnalisés.

::: warning Important

Si vous utilisez le slot, il faut bien envelopper chaque bouton dans une balise `<li>` Cf. les exemples

:::

## 📝 Exemples

::: code-group

<Story data-title="Démo" min-h="620px">
  <DsfrButtonGroupDemo />
</Story>

<<< docs-demo/DsfrButtonGroupDemo.vue [Code de la démo]

<<< DsfrButtonGroup.vue

<<< DsfrButton.types.ts
:::

Et voilà ! Vous êtes prêt à ajouter une touche de sophistication à votre interface avec DsfrButtonGroup. Bonne création ! 🎨✨

<script setup lang="ts">
import DsfrButtonGroupDemo from './docs-demo/DsfrButtonGroupDemo.vue'
</script>
