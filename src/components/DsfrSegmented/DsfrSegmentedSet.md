# Contrôle segmenté - `DsfrSegmentedSet`

🌟 Bienvenue dans l'univers de `DsfrSegmentedSet`, le chef d'orchestre de vos composants radio boutonnés `DsfrSegmented`. Ce composant est là pour vous aider à organiser et afficher un ensemble de choix avec élégance et fonctionnalité. Préparez-vous, ça va être aussi sympa qu'une balade sur la Seine !

Le composant « contrôle segmenté » incite l'utilisateur à choisir entre plusieurs options d'affichage disponibles (vues), mutuellement exclusives avec une valeur sélectionnée par défaut (Il faut toujours ramener un peu de sérieux dans l’affaire...).

🏅 La documentation sur les boutons segmentés sur le [DSFR sera ici](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/controle-segmente) (n’existe pas non plus à l’heure où cette documentation est écrite, on est trop en avance, nous !).

<VIcon name="vi-file-type-storybook" /> La story sur l’alerte sur le storybook de [VueDsfr est ici](https://vue-ds.fr/?path=/docs/composants-dsfrsegmentedset--docs) (oui parce que nous on fait rien à moitié, nous 😏, merci [Vincent Lainé](https://github.com/vincentlaine/) !).

## 🛠️ Props

| Nom         | Type                                  | Défaut         | Obligatoire | Description                                                    |
|-------------|---------------------------------------|----------------|-------------|-------------------------------------------------               |
| `titleId`   | `string`                              | ID aléatoire   |             | Identifiant unique pour le titre du groupe.                    |
| `disabled`  | `boolean`                             | `false`        |             | Si `true`, désactive tous les boutons radio du groupe.         |
| `small`     | `boolean`                             | `false`        |             | Si `true`, Utilise la version réduite des contrôles segmentés. |
| `inline`    | `boolean`                             | `false`        |             | Si `true`, la légende sera alignée avec les boutons, sinon, ils seront chacun sur une ligne (`false`, défaut).                       |
| `name`      | `string`                              | `'no-name'`    |             | Nom par défaut pour le groupe de boutons radio.                |
| `hint`      | `string`                              | `undefined`    |             | Texte d'indice affiché sous la légende (facultatif).           |
| `legend`    | `string`                              | `''`           |             | Texte de la légende pour le groupe de boutons radio.           |
| `modelValue`| `string \| number`                    |                | ✅          | La valeur actuellement sélectionnée.                           |
| `options`   | `DsfrSegmentedProps[]`                | `[]`           |             | Tableau d’objets : chaque objet contient les props à passer à [`DsfrSegmented`](/composants/DsfrSegmented).                    |

### Notes

- `titleId`: Généré automatiquement si non spécifié.
- `options`: Chaque élément représente un bouton radio avec ses props spécifiques.

## 📡 Événements

| Nom                | Valeur               | Description                                  |
|--------------------|----------------------|----------------------------------------------|
| `update:modelValue` | `string \| number`   | Émis lorsqu'une nouvelle valeur est sélectionnée dans le groupe. |

## 🧩 Slots

1. **slot par défaut**: Permet de personnaliser les boutons radio individuellement.
2. **Slot `legend`**: Permet de personnaliser la légende avec du contenu riche.

## 📝 Exemple

```vue
<DsfrSegmentedSet
  legend="Votre Choix"
  :options="[
    {
      label: 'Croissant',
      value: 'croissant',
    },
    {
      label: 'Pain au chocolat (noooon ! Cho-co-la-tine ! C’est pas compliqué, pourtant !)',
      value: 'chocolatine',
      disabled: true,
    }
  ]"
  v-model="selectedOption"
/>
```

Assurez-vous d'importer `DsfrSegmentedSet` ainsi que `DsfrSegmented` dans votre projet. Puis, utilisez-le dans votre template en fournissant les props et les options nécessaires.

::: code-group

<Story data-title="Démo" min-h="150px">
  <DsfrSegmentedDemo />
</Story>

<<< docs-demo/DsfrSegmentedDemo.vue [Code de la démo]

:::

## ⚙️ Code source du composant

::: code-group

<<< DsfrSegmentedSet.vue
<<< DsfrSegmented.types.ts

:::

<script setup lang="ts">
import DsfrSegmentedDemo from './docs-demo/DsfrSegmentedDemo.vue'
</script>
