# Bouton FranceConnect(+) - `DsfrFranceConnect`

## 🌟 Introduction

Le bouton FranceConnect permet à une administration (ou un fournisseur de logiciel agissant pour le compte d’une administration) de proposer une connexion ou une création de compte simplifiée.

L’utilisateur utilise ses identifiants de connexion d’un des fournisseurs d’identités (impots.gouv.fr, ameli.fr, l’Identité Numérique La Poste, MobileConnect et moi ou msa.fr), le fournisseur de service récupère auprès de FranceConnect un identifiant unique et une identité vérifiée par l’INSEE.

Le fonctionnement en détail : <https://franceconnect.gouv.fr/partenaires>

Le bouton FranceConnect est primordial dans l’usage du service FranceConnect. C’est par lui que passe la reconnaissance et la confiance dans la marque FranceConnect.

🏅 La documentation sur le bouton FranceConnect sur le [DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/bouton-franceconnect)

<VIcon name="vi-file-type-storybook" /> La story sur le bouton FranceConnect sur le storybook de [VueDsfr](https://storybook.vue-ds.fr/?path=/docs/composants-dsfrfranceconnect--docs)

## 📐 Structure

- Contient un bouton pour la connexion via FranceConnect.
- Inclut un lien d'aide pour plus d'informations sur FranceConnect.

## 🛠️ Props

| Propriété     | Type      | Description                                                               | Valeur par défaut                                 |
|---------------|-----------|---------------------------------------------------------------------------|---------------------------------------------------|
| `secure`      | `boolean` | Indique si le bouton doit utiliser la version sécurisée FranceConnect+.  | `false`                                           |
| `url`         | `string`  | URL personnalisée pour la connexion (ne doit servir que pour le développement).                                    | `undefined`                                       |

## 📡Événements

Ce composant ne déclenche pas d'événements spécifiques.

## 🧩 Slots

Pas de slot.

## 📝 Exemple

::: code-group

<Story data-title="Démo" min-h="350px">
  <DsfrFranceConnectDemo />
</Story>

<<< docs-demo/DsfrFranceConnectDemo.vue [Code de la démo]

:::

## ⚙️ Code source du composant

::: code-group

<<< DsfrFranceConnect.vue
<<< DsfrFranceConnect.types.ts

:::

`DsfrFranceConnect` est conçu pour être simple et direct, permettant une intégration facile dans n'importe quelle application nécessitant une fonctionnalité de connexion FranceConnect.

Il offre très peu de personnalisation, et cela est voulu (cf. les sections [« À ne pas faire » de la documentation officielle DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/bouton-franceconnect/)).

<script setup lang="ts">
import DsfrFranceConnectDemo from './docs-demo/DsfrFranceConnectDemo.vue'
</script>
