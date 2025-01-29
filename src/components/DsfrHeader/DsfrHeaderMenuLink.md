# Lien d’en-tête - `DsfrHeaderMenuLink`

## 🌟 Introduction

Le composant `DsfrHeaderMenuLink` offre une flexibilité pour des liens internes, externes, des boutons, et même des liens mailto, tout en intégrant la possibilité d'ajouter des icônes du DSFR ou grâce à `Iconify` (cf. la documentation sur les [icônes VueDsfr](/guide/icones)).

## 📐 Structure

- `<DsfrHeaderMenuLink>` : Le composant principal.
  - Utilise `<component :is="...">` pour rendre dynamiquement le bon type d'élément (lien, bouton, ou RouterLink).
  - Intègre des icônes avec `<VIcon>` si nécessaire.

## 🛠️ Props

| Propriété   | Type                               | Description                                                                                        | Valeur par défaut |
|-------------|------------------------------------|----------------------------------------------------------------------------------------------------|-------------------|
| `button`    | `boolean`                          | Si vrai, le composant se comporte comme un bouton.                                                 | `undefined`       |
| `icon`      | `string \| VIcon['$props']`        | Nom de l'icône ou les [props de l'icône](/composants/VIcon) à utiliser.                                                 | `undefined`       |
| `iconAttrs` | `VIcon['$props'] & import('vue').HTMLAttributes` | Attributs supplémentaires pour l'icône.                                                            | `{}`              |
| `iconRight` | `boolean`                          | Si vrai, positionne l'icône à droite du label.                                                     | `false`           |
| `label`     | `string`                           | Texte du lien ou du bouton.                                                                        | `''`              |
| `target`    | `string`                           | Cible du lien, par exemple `_blank` pour ouvrir dans un nouvel onglet.                             | `'_self'`         |
| `onClick`   | `Function`                         | Fonction à exécuter lors du clic sur le composant.                                                 | `() => undefined` |
| `to`        | `import('vue-router').RouteLocationRaw`                 | Destination pour le routeur Vue, si utilisé comme lien de navigation interne.                      | `undefined`       |
| `href`      | `string`                           | URL pour les liens externes.                                                                       | `undefined`       |

## 📡Événements

- `click` : Événement déclenché lorsque l'utilisateur clique sur le composant.

## 🧩 Slots

Pas de slots spécifiques pour ce composant. Il utilise le `label` pour afficher le texte du lien ou du bouton.

## 📝 Exemples

Ce composant est utilisé en interne dans DsfrHeader. Il n’y a pas de raison de l’utiliser en dehors.

## ⚙️ Code source du composant

::: code-group

<<< DsfrHeaderMenuLink.vue
<<< DsfrHeader.types.ts

:::
