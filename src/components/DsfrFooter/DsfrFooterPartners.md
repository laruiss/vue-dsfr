# Liste de partenaires de pied de page - `DsfrFooterPartners`

## 🌟 Introduction

Le composant `DsfrFooterPartners` est conçu pour afficher une liste de partenaires dans le pied de page d'un site web. Il permet d'ajouter un partenaire principal et une série de sous-partenaires avec leurs logos et liens. C'est un composant utile pour valoriser les collaborations et apporter une visibilité supplémentaire aux partenaires d'une organisation ou d'un projet.

## 📐 Structure

- `<DsfrFooterPartners>` : Le composant principal.
  - Affiche le titre du bloc partenaires, s'il est fourni.
  - Montre un partenaire principal distinctement, s'il est défini.
  - Liste les sous-partenaires dans un format compact.

## 🛠️ Props

| Propriété      | Type                    | Description                                                                     | Valeur par défaut |
|----------------|-------------------------|---------------------------------------------------------------------------------|-------------------|
| `mainPartner`  | `DsfrFooterPartner`     | Objet représentant le partenaire principal avec lien, logo, et nom.             | `undefined`       |
| `subPartners`  | `DsfrFooterPartner[]`   | Tableau d'objets représentant les sous-partenaires.                             | `[]`              |
| `title`        | `string`                | Titre de la section des partenaires.                                            | `''`              |

## 📡Événements

Ce composant ne déclenche pas d'événements spécifiques.

## 🧩 Slots

Aucun slot n'est prévu dans ce composant. Le contenu est entièrement basé sur les props.

## 📝 Exemples

Ce composant est utilisé en interne dans DsfrHeader. Il n’y a pas de raison de l’utiliser en dehors.

## ⚙️ Code source du composant

::: code-group

<<< DsfrFooterPartners.vue
<<< DsfrFooter.types.ts

:::
