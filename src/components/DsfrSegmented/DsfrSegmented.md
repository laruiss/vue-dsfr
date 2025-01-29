# Documentation du Composant `DsfrSegmented`

## 🌟 Introduction

👋 Bonjour et bienvenue dans la documentation de `DsfrSegmented`, un composant radio boutonné avec une touche de « je ne sais quoi » à la française! C'est chic, c'est pratique, et en plus, ça supporte des icônes. Alors, allons-y !

Le composant « contrôle segmenté » incite l'utilisateur à choisir entre plusieurs options d'affichage disponibles (vues), mutuellement exclusives avec une valeur sélectionnée par défaut (oui, ça c’est la version sérieuse de l’introduction à ce composant).

🏅 La documentation sur les boutons segmentés sur le [DSFR sera ici](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/controle-segmente) (n’existe pas encore à l’heure où cette documentation est écrite, on est dans l’turfu, nous, qu’on vous dit !).

<VIcon name="vi-file-type-storybook" /> La story sur l’alerte sur le storybook de [VueDsfr est ici](https://storybook.vue-ds.fr/?path=/docs/composants-dsfrsegmented--docs) (merci [Vincent Lainé](https://github.com/vincentlaine/) !).

## 🛠️ Props

| Nom        | Type                                     | Défaut              | obligatoire |  Description                                                       |
|------------|------------------------------------------|----------------     | ----        | -------------------------------------------------------------------|
| `id`       | `string`                                 | ID aléatoire        |             |  Identifiant unique pour le composant.                             |
| `name`     | `string`                                 | `undefined`         |             |  Nom du groupe de boutons radio.                                   |
| `modelValue` | `string \| number`                     | `''`                |             |  La valeur actuellement sélectionnée.                              |
| `value`    | `string \| number`                       |                     | ✅          |  Valeur du bouton radio.                                           |
| `label`    | `string`                                 | `''`                |             |  Texte du label associé au bouton.                                 |
| `disabled` | `boolean`                                | `false`             |             |  Si `true`, désactive le bouton radio.                             |
| `icon`     | `string \| InstanceType<typeof VIcon>['$props']` | `undefined` |             |  Icône à afficher à côté du label (facultatif). Si la valeur est une string commençant par `'fr-'`, cette classe sera ajoutée à la balise `<label>`, sinon c’est une icône [Iconify](/composants/VIcon) qui sera utilisée                        |

::: info Astuce 1

`id`: Si non fourni, un ID est généré automatiquement pour éviter les conflits.

:::

::: info Astuce 2

`icon`: Peut être soit une chaîne représentant le nom de l'icône, soit un objet de props pour `VIcon`.

:::

## 📡 Évenements

| Nom                | Valeur               | Description                                  |
|--------------------|----------------------|----------------------------------------------|
| `update:modelValue` | `string \| number`   | Émis lorsqu'une nouvelle valeur est sélectionnée. |

## 🧩 Slots

Pas de slots ici ! Ce composant est aussi direct qu'un express Paris-Marseille.

## 📝 Exemple

```vue
<DsfrSegmented
  name="group1"
  label="Option 1"
  value="opt1"
  v-model="selectedOption"
  icon="some-icon-name"
/>
```

`DsfrSegmented` s’utilise forcément à l’intérieur d’un `DsfrSegmentedSet`, ainsi, pour un résultat, consultez la documentation de [`DsfrSegmentedSet`](/composants/DsfrSegmentedSet).

## ⚙️ Code source du composant

::: code-group

<<< DsfrSegmented.vue
<<< DsfrSegmented.types.ts

:::
