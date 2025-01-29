# En-tête de tableau - `DsfrTableHeader`

Enfant de `DsfrHeaders` (attention au pluriel), `DsfrHeader` (ici donc au singulier) permet de personnaliser complètement les en-tête de vos tableaux, et il va y mettre une touche de magie !

Parfait pour ajouter du texte et des icônes personnalisées, ce composant est un incontournable pour un tableau élégant et fonctionnel.

🏅 La documentation sur le tableau sur le [DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/tableau/)

<VIcon name="vi-file-type-storybook" /> La story sur l’en-tête de tableau sur le storybook de [VueDsfr](https://storybook.vue-ds.fr/?path=/docs/composants-dsfrtableheader--docs)

## 🛠️ Props

| Nom          | Type                          | Défaut | Obligatoire | Description                                                    |
|--------------|-------------------------------|--------|-------------|----------------------------------------------------------------|
| `header`     | `string`                      | `''`   |             | Le texte de l'en-tête du tableau.                              |
| `headerAttrs`| `Object`                      | `{}`   |             | Les attributs HTML supplémentaires pour l'élément `<th>`.      |
| `icon`       | `string \| Object \| undefined` | `undefined` |         | L'icône à afficher dans l'en-tête. Peut être une chaîne ou un objet pour les icônes personnalisées. |

## 📝 Exemples

### Exemple basique

```vue
<DsfrTableHeader header="Nom" />
```

### Exemple avec attributs supplémentaires

```vue
<DsfrTableHeader
  header="Age"
  :headerAttrs="{ class: 'header-age', id: 'age-header' }"
/>
```

### Exemple avec icône

```vue
<DsfrTableHeader
  header="Ville"
  icon="ri-location-pin"
/>
```

### Exemple avec icône

```vue
<DsfrTableHeader
  header="Ville"
  icon="fr-icon-mail-line"
/>
```

### Exemple complet

::: code-group

<Story data-title="Démo" min-h="320px">
  <div class="fr-container">
    <DsfrTableHeaderDemo />
  </div>
</Story>

<<< ./docs-demo/DsfrTableHeaderDemo.vue

:::

## ⚙️ Code source du composant

::: code-group

<<< DsfrTableHeader.vue
<<< DsfrTable.types.ts

:::

<script setup lang="ts">
import DsfrTableHeaderDemo from './docs-demo/DsfrTableHeaderDemo.vue'
</script>
