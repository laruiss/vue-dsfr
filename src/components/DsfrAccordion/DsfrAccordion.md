# Accordéon - `DsfrAccordion`

## 🌟 Introduction

Les accordéons permettent aux utilisateurs d'afficher et de masquer des sections de contenu présentés dans une page.

🏅 La documentation sur l’accordéon sur le [DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/accordeon)

<VIcon name="vi-file-type-storybook" /> La story sur l’accordéon sur le storybook de [VueDsfr](https://storybook.vue-ds.fr/?path=/docs/composants-dsfraccordion--docs)

## 📐 Structure

Un accordéon est constitué des éléments suivants :

- un en-tête (prop **`title`**, de type `string`), correspondant au titre de la section - obligatoire.
- une icône, <VIcon name="ri-arrow-drop-down-line" scale="1.25" /> indique quand le panneau est fermé, <VIcon name="ri-arrow-drop-up-line" scale="1.25" /> quand le panneau est ouvert.
- un séparateur
- une zone de contenu, masquée par défaut pouvant contenir tout type d'élément, le `slot` par défaut est fait pour ça

Autres props :

- **`id`** : identifiant du contenu de l’accordéon, qui est utilisé aussi pour l’attribut `aria-controls` du bouton qui permet de plier et déplier l’accordéon
- **`expandedId`** : identifiant de l’accordéon actuellement déplié (pour savoir si l’accordéon doit être déplié)

## 🛠️ Props

|  Nom                    |   Type                                    |  Défaut          | Obligatoire  |
| ----------------------- | ----------------------------------------- | ---------------- | -------------|
| `title`                 | *`string`*                                | `useRandomId('accordion')`                 | ✅           |
| `titleTag`              | [*`TitleTag`*](/docs/types.md#title-tag)  |    `'h3'`        |              |
| `id`                    | *`string`*                                | *random string*  |              |

## 📡Évenements

Pas d'événements spécifiques émis directement par ce composant.

## 🧩 Slots

- **`title`** : Slot pour le contenu personnalisé du titre de l’accordéon. Si non utilisé, le texte fourni via la prop `title` sera utilisé.
- **`default`** : Slot pour le contenu principal de l'accordéon, affiché dans la section repliable.

## 📝 Exemples

Ce composant peut être utilisé uniquement avec [`DsfrAccordionsGroup`](/composants/DsfrAccordionsGroup).

## ⚙️Code source du composant

::: code-group
<<< DsfrAccordion.vue
<<< DsfrAccordion.types.ts
<<< injection-key.ts
:::
