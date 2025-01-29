# Retour en haut de page - `DsfrBackToTop`

## 🌟 Introduction

Bonjour et bienvenue à cette page de documentation incroyablement utile (et légèrement humoristique) pour notre composant `DsfrBackToTop`. Ce composant est votre meilleur ami pour permettre aux utilisateurs de remonter en haut de la page avec style et élégance. Et oui, même dans le monde du code, la classe, ça compte !

Dans les pages de contenu longues, il est possible de proposer un bouton de retour en haut de page à la fin du contenu.

Le retour en haut de page est constitué des éléments suivants :

- Icône flèche vers le haut ;
- Libellé “Haut de page” (modifiable par la prop `label`, de type `string`).

Le lien de retour en haut de page se place à la fin du contenu de la page, avant le pied de page. Aligné à gauche par défaut, avec le contenu, il peut aussi être centré ou aligné à droite, grâce à la prop `position` qui peut prendre les valeur `'right'` ou `'left'`.

Si il y a des bloc de poursuite de lecture (liens vers d’autres articles), il est conseillé de placer le retour en haut de page avant ces blocs.

🏅 La documentation sur le retour en haut de page sur le [DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/retour-en-haut-de-page/)

<VIcon name="vi-file-type-storybook" /> La story sur le retour en haut de page sur le storybook de [VueDsfr](https://storybook.vue-ds.fr/?path=/docs/composants-dsfrbacktotop--docs)

## 🛠️ Props

Notre composant est assez flexible et comprend les props suivantes :

| Prop       | Type                  | Description                                           | Par Défaut    |
|------------|-----------------------|-------------------------------------------------------|---------------|
| `label`    | `string` (optionnel)  | Le texte affiché sur le bouton.                       | `"Haut de page"` |
| `position` | `'right' \| 'left'`   | La position du bouton (à droite ou à gauche).         | `'right'`     |

### Détails des Props

- **label**: C'est le texte que l'on voit sur le bouton. Par défaut, il dit « Haut de page », mais vous pouvez le changer pour quelque chose comme « Retour au début » ou « En haut, et ça presse ! », selon votre humeur.

- **position**: Vous préférez que l’icône de la flèche soit à gauche ou à droite ? Pas de souci ! Cette prop vous permet de choisir. C'est un peu comme être dans une pâtisserie française et décider entre un éclair au chocolat et un Paris-Brest. Sauf que là, c'est moins calorique.

::: warning

Le lien de “Haut de page” est une ancre vers un élément dont l’id est "top".
Afin de le faire fonctionner correctement, il est nécessaire d’ajouter l’attribut id (id="top") sur l’élément le plus haut de la page comme le body (`<body id="top" ...>`) ou les liens d’évitement (`<DsfrSkipLinks ... id="top">`), afin que le focus de navigation soit lui aussi replacé en haut de page.

:::

## 📝 Exemple

Voici un petit exemple pour vous montrer comment utiliser `DsfrBackToTop` dans votre application :

::: code-group

<Story data-title="Démo" min-h="100px">
  <DsfrBackToTopDemo />
</Story>

<<< docs-demo/DsfrBackToTopDemo.vue [Code de la démo]

<<< DsfrBackToTop.vue
:::

<script setup lang="ts">
import DsfrBackToTopDemo from './docs-demo/DsfrBackToTopDemo.vue'
</script>

Dans cet exemple, notre bouton indique « Retour vers le futur ! » et l’icône se trouve à gauche. Simple, élégant et efficace, comme un croissant bien cuit.
