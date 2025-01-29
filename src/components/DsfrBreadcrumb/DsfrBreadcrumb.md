# Fil d’ariane - `DsfrBreadcrumb`

## 🌟 Introduction

Bienvenue à la documentation du composant DsfrBreadcrumb ! Ce composant est un véritable GPS pour vos interfaces utilisateur, guidant les utilisateurs à travers les différents niveaux de votre application avec aisance et élégance. Utilisons TypeScript et Vue pour explorer ses fonctionnalités.

Le fil d’Ariane est un système de navigation secondaire qui permet à l’utilisateur de se situer sur le site qu’il consulte.

🏅 La documentation sur le fil d’Ariane sur le [DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/fil-d-ariane)

<VIcon name="vi-file-type-storybook" /> La story sur le fil d’Ariane sur le storybook de [VueDsfr](https://storybook.vue-ds.fr/?path=/docs/composants-dsfrbreadcrumb--docs)

## 📐 Structure

Dans l’ordre, il se compose des éléments suivants :

- un lien menant à la racine du site (page d’accueil) - obligatoire ;
- des liens vers les pages séparant la racine du site de la page courante - obligatoire si la hiérarchie du site comporte plus d’un niveau ;
- la page courante, seul élément non cliquable - obligatoire.

## 🛠️ Props

| Nom                 | Type   | Défaut                          | Description                                                                                                                                              |
|---------------------|--------|---------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| breadcrumbId        | String | () => useRandomId('breadcrumb') | Identifiant unique pour le composant breadcrumb, généré automatiquement pour assurer l'accessibilité.                                                    |
| links               | Array  | () => [{ text: '' }]            | Un tableau d'objets représentant les liens dans le fil d'Ariane. Chaque objet peut avoir une propriété 'text' et, optionnellement, 'to' pour les routes. |
| navigationLabel     | String | `'vous êtes ici :'`             | Label affiché sur la balise `nav` du fil d’Ariane.                                                                                                       |
| showBreadcrumbLabel | String | `'Voir le fil d’Ariane'`        | Label du bouton d'affichage du fil d’Ariane.                                                                                                             |

## 📡Évenements

Ce composant n'émet pas directement d'événements, mais vous pouvez écouter les événements de clic sur les liens individuels si nécessaire.

## 🧩 Slots

Pas de slots définis pour `DsfrBreadcrumb`. Le contenu est entièrement géré via les props.

## 📝 Exemples

Voici un exemple d'utilisation de DsfrBreadcrumb  :

```vue
<DsfrBreadcrumb
  breadcrumbId="mon-fil-dariane"
  :links="[
    { text: 'Accueil', to: '/' },
    { text: 'Bibliothèque', to: '/bibliotheque' },
    { text: 'Livre', to: '/livre' }
    { text: 'Le Seigneur des anneaux' }
  ]"
/>
```

::: code-group

<Story data-title="Démo">
  <DsfrBreadcrumbDemo />
</Story>

<<< docs-demo/DsfrBreadcrumbDemo.vue [Code de la démo]

<<< DsfrBreadcrumb.vue
:::

::: info Note :

Sur un écran plus large, le fil d’Ariane apparaîtrait directement en entier, sans le lien "Voir le fil d’Ariane"

:::

<script setup lang="ts">
import DsfrBreadcrumbDemo from './docs-demo/DsfrBreadcrumbDemo.vue'
</script>
