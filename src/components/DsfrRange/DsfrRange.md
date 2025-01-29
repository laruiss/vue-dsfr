# Curseur - `DsfrRange`

## 🌟 Introduction

Bienvenue dans la documentation du `DsfrRange`, un composant Vue qui va slider dans votre coeur comme un croissant bien chaud glisse dans votre petit déjeuner. Ce composant est un véritable couteau suisse pour les curseurs, capable de tout faire, de l'affichage simple à la gestion de valeurs doubles. Mettez vos ceintures, on décolle !

Les curseurs sont des entrées numériques qui permettent de voir graphiquement une sélection par rapport a une valeur minimale et maximale. Ils servent à montrer en temps réel les options choisies et éclairer la prise de décision. ("Why so serious?" 🦇🃏)

🏅 La documentation sur le curseur importante sur le [DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/bandeau-d-information-importante)

<VIcon name="vi-file-type-storybook" /> La story sur le curseur importante sur le storybook de [VueDsfr](https://storybook.vue-ds.fr/?path=/docs/composants-dsfrnotice--docs)

## 📐 Structure

- Le composant est encapsulé dans une `div` avec la classe `fr-range-group`, qui peut afficher un message d'erreur via `message`.
- Le `label` est affiché en haut, suivi par un texte d'indice (`hint`) si fourni.
- Le curseur (`input type="range"`) est stylisé avec des classes pour gérer la taille et l'état désactivé.
- Les valeurs minimales et maximales sont affichées si `hideIndicators` est `false`.
- Un second curseur est présent si la prop `double` est `true`.
- Les messages d'erreur ou autres sont affichés dans une `div` spécifique.

## 🛠️ Props

| Nom | Type | Défaut | Description |
| --- | --- | --- | --- |
| `id` | `string` | `useRandomId('range')` | Identifiant unique du curseur. Si non fourni, un id est généré aléatoirement. |
| `min` | `number` | `0` | Valeur minimale du curseur. |
| `max` | `number` | `100` | Valeur maximale du curseur. |
| `modelValue` | `number` | `0` | Valeur actuelle du curseur. |
| `label` | `string` | - | Texte de l'étiquette associée au curseur. |
| `hint` | `string` | `undefined` | Texte d'indice optionnel. |
| `message` | `string` | `undefined` | Message à afficher en cas d'erreur. |
| `prefix` | `string` | `undefined` | Texte à afficher avant la valeur. |
| `suffix` | `string` | `undefined` | Texte à afficher après la valeur. |
| `small` | `boolean` | `undefined` | Si `true`, réduit la taille du curseur. |
| `hideIndicators` | `boolean` | `undefined` | Cache les indicateurs de valeur min/max si `true`. |
| `step` | `number` | `undefined` | Pas d'incrément du curseur. |
| `double` | `boolean` | `undefined` | Active un second curseur si `true`. |
| `disabled` | `boolean` | `undefined` | Désactive le curseur si `true`. |

## 📡 Évenements

- **`update:modelValue`**: Émis lors de la modification de la valeur du curseur. Renvoie la nouvelle valeur.

## 📝 Exemple

::: code-group

<Story data-title="Démo" min-h="340px">
  <DsfrRangeDemo />
</Story>

<<< docs-demo/DsfrRangeDemo.vue [Code de la démo]

<<< DsfrRange.vue
<<< DsfrRange.types.ts
:::

<script setup lang="ts">
import DsfrRangeDemo from './docs-demo/DsfrRangeDemo.vue'
</script>

Et voilà ! Notre DsfrRange est prêt à être croqué dans vos interfaces comme une baguette bien croustillante. N'oubliez pas de l'assaisonner avec vos styles et logiques pour qu'il s'intègre parfaitement dans le festin visuel de votre application. Bon codage ! 🥖💻
