# Gestionnaire de consentement - `DsfrConsent`

## 🌟 Introduction

Le gestionnaire de consentement permet à l'utilisateur de définir ses préférences sur l'utilisation de ses données personnelles, notamment le dépôt de cookies non fonctionnels dans son navigateur.

🏅 La documentation du gestionnaire de consentement sur le [DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/gestionnaire-de-consentement)

<VIcon name="vi-file-type-storybook" /> La story du gestionnaire de consentement sur le storybook de [VueDsfr](https://storybook.vue-ds.fr/?path=/docs/composants-dsfrconsent--docs)

## 📐 Structure

Le gestionnaire de consentement est constitué des éléments suivants :

- une description, le composant en propose une générique et le `slot` par défaut permet d'en personnaliser une et de contenir tout type d'élément,
- un lien (prop **`url`**, de type `string`), correspondant au chemin menant aux "Données personnelles et cookies" de votre site ou application.

## 🛠️ Props

|  nom                    |   type        |  défaut          | obligatoire |
| ----------------------- | ---------     | ---------------- | --------    |
| `url`                   | *`string`*    | `''`             |             |

## 📡 Évenements

`DsfrConsent` dispose de trois boutons qui déclenchent chacun un évènement spécifique au clic permettant à l'utilisateur de l'attraper afin de déclencher une fonction correspondante.

|  nom                   |  donnée (*payload*)  | détail de la donnée  |
| ---------------------- | -------------------- | -------------------- |
| `'accept-all'`         |                      |                      |
| `'refuse-all'`         |                      |                      |
| `'customize'`          |                      |                      |

## 🧩 Slots

`DsfrConsent` possède un slot par défaut pour laisser la possibilité à l'utilisateur d'ajouter une description personnalisée.

```vue{6,15,16,25,26}
<template>
  <DsfrConsent>
    <p>
      Nous avons recours à plusieurs cookies afin d'améliorer votre
      expérience sur cette application. Vos données vous appartiennent
      et ce bandeau vous permet de sélectionner les cookies que vous
      souhaitez activer. Pour plus d'informations, consultez notre page
      <a :href="url">Données personnelles et cookies</a>.
    </p>
  </DsfrConsent>
</template>
```

Cf. la [documentation Vue](https://vuejs.org/guide/essentials/event-handling.html#accessing-event-argument-in-inline-handlers) pour plus de détails.

## 📝 Exemple complet

::: code-group

<Story data-title="Démo" min-h="200px">
  <DsfrConsentDemo />
</Story>

<<< docs-demo/DsfrConsentDemo.vue [Code de la démo]

:::

## ⚙️ Code source du composant

::: code-group

<<< DsfrConsent.vue
<<< DsfrConsent.types.ts

:::

<script setup>
import DsfrConsentDemo from './docs-demo/DsfrConsentDemo.vue'
</script>
