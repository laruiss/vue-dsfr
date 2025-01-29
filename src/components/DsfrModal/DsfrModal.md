# Modale - `DsfrModal`

## 🌟 Introduction

La modale permet de concentrer l’attention de l’utilisateur exclusivement sur une tâche ou un élément d’information, sans perdre le contexte de la page en cours. Ce composant nécessite une action de l’utilisateur afin d'être ouvert ou fermé.

Le composant `DsfrModal` est une fenêtre modale configurable, offrant des fonctionnalités avancées telles que le piégeage de focus, l'écoute des touches d'échappement pour la fermeture, et la gestion des boutons d'action. Ce composant est conçu pour afficher des dialogues et des alertes de manière accessible et ergonomique.

🏅 La documentation sur la modale sur le [DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/modale/)

<VIcon name="vi-file-type-storybook" /> La story sur la modale sur le storybook de [VueDsfr](https://storybook.vue-ds.fr/?path=/docs/composants-dsfrmodal--docs)

## 📐 Structure

La modale par défaut permet de mettre en évidence une information qui ne nécessite pas d’action de l’utilisateur. Elle s’affiche à la suite du clic sur un bouton.

Elle se compose des éléments suivants :

- Le bouton Fermer
- Le titre **obligatoire** (prop **`title`**), avec icône, *optionnelle*.
- La zone de contenu (**slot par défaut**), **obligatoire**.
- La zode de **pied de modale** qui peut être rempli en utilisant le slot nommé **`"footer"`** et/ou avec des boutons (prop **`actions`** qui contient un tableau d’objets de type [`DsfrButtonProps`](/types#dsfrbutton-et-dsfrbuttongroup))

## 🛠️ Props

| Propriété            | Type                           | Description                                                                                                    | Valeur par défaut                                              | Obligatoire  |
|----------------------|--------------------------------|----------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|--------------|
| `title`              | `string`                       | Titre de la modale.                                                                                            |                                                                | ✅            |
| `modalId`            | `string`                       | Identifiant unique pour la modale.                                                                             | `useRandomId('modal', 'dialog')`                               |              |
| `opened`             | `boolean`                      | Indique si la modale est ouverte.                                                                              | `false`                                                        |              |
| `actions`            | `DsfrButtonProps[]`            | Liste des boutons d'action pour le pied de page de la modale.                                                  | `[]`                                                           |              |
| `isAlert`            | `boolean`                      | Spécifie si la modale est une alerte (rôle `"alertdialog"` si `true`) ou non (le rôle sera  alors `"dialog"`). | `false`                                                        |              |
| `origin`             | `{ focus: () => void }`        | Référence à l'élément d'origine pour redonner le focus après fermeture.                                        | `{ focus() {} }`                                               |              |
| `icon`               | `string`                       | Nom de l'icône à afficher dans le titre de la modale.                                                          | `undefined`                                                    |              |
| `size`               | `'sm' \| 'md' \| 'lg' \| 'xl'` | Taille de la modale.                                                                                           | `'md'`                                                         |              |
| `closeButtonLabel`   | `string`                       | Label du bouton de fermeture˘.                                                                                 | `'Fermer'`                                                     |              |
| `closeButtonTitle`   | `string`                       | Titre pour le bouton de fermeture (pour l'accessibilité).                                                      | `'Fermer la fenêtre modale'`                                   |              |

## 📡Événements

- `close` : Événement émis lorsque la modale est fermée.

## 🧩 Slots

- `default` : Slot pour le contenu principal de la modale.
- `footer` : Slot pour le pied de page de la modale, contenant les boutons d'action supplémentaires.

## 📝 Exemples

### Modale simple

::: code-group

<Story data-title="Démo" min-h="300px">
  <DsfrModalDemo />
</Story>

<<< docs-demo/DsfrModalDemo.vue [Code de la démo]

:::

::: tip N.B.

la modale apparaît ici **en bas de l’écran** parce que l’iframe qui les contient est contenu dans une **largeur** correspondant à un **appareil mobile**. Sur un écran plus large, la modale apparaît au milieu de l’écran.

:::

### Modale avec actions

::: code-group

<Story data-title="Démo" min-h="400px">
  <DsfrModalDemoActions />
</Story>

<<< docs-demo/DsfrModalDemoActions.vue [Code de la démo]

:::

### Modale pour changer le thème

::: code-group

<Story data-title="Démo" min-h="600px">
  <DsfrModalDemoTheme />
</Story>

<<< docs-demo/DsfrModalDemoTheme.vue [Code de la démo]

:::

::: tip N.B.

la modale apparaît ici **en bas de l’écran** et avec les **boutons d’actions verticaux** parce que l’iframe qui les contient est contenu dans une **largeur** correspondant à un **appareil mobile**. Sur un écran plus large, la modale apparaît au milieu de l’écran et les boutons sont par défaut distribués horizontalement.

:::

## ⚙️ Code source du composant

::: code-group
<<< DsfrModal.vue
<<< DsfrModal.types.ts
<<< ../DsfrButton/DsfrButton.types.ts
:::

<script setup lang="ts">
import DsfrModalDemo from './docs-demo/DsfrModalDemo.vue'
import DsfrModalDemoActions from './docs-demo/DsfrModalDemoActions.vue'
import DsfrModalDemoTheme from './docs-demo/DsfrModalDemoTheme.vue'
</script>
