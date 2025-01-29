# Ligne de tableau - `DsfrTableRow`

Rencontrez `DsfrTableRow`, le composant incontournable pour structurer les lignes de votre tableau Vue avec style et efficacité. Parfait pour organiser les données et les présenter de manière claire, ce composant est un véritable atout dans votre boîte à outils de développeur.

## 🛠️ Props

| Nom        | Type                   | Défaut | Obligatoire | Description                                                 |
|------------|------------------------|--------|-------------|-------------------------------------------------------------|
| `rowData`  | `Array`                | `[]`   |             | Les données pour chaque cellule de la rangée.               |
| `rowAttrs` | `Object`               | `{}`   |             | Les attributs HTML supplémentaires pour l'élément `<tr>`.   |

### Description des Types

- **`rowData`**: Un tableau contenant les données de chaque cellule. Chaque élément peut être une chaîne ou un objet avec des propriétés supplémentaires pour la cellule.
- **`rowAttrs`**: Un objet représentant des attributs HTML supplémentaires, comme des classes ou des styles, à appliquer sur la rangée.

## 🧩 Slots

- **Slot par défaut**: Utilisé pour insérer du contenu personnalisé dans la rangée du tableau, avant les cellules générées automatiquement.

## 📝 Exemples

### Exemple basique

```vue
<DsfrTableRow :rowData="['Alice', 30, 'Paris']" />
```

### Exemple avec attributs de ligne (*row*)

```vue
<DsfrTableRow
  :rowData="['Bob', 24, 'Lyon']"
  :rowAttrs="{ class: 'highlighted-row', id: 'row-bob' }"
/>
```

### Exemple complexe

::: code-group

<Story data-title="Démo" min-h="320px">
  <div class="fr-container">
    <DsfrTableRowDemo />
  </div>
</Story>

<<< ./docs-demo/DsfrTableRowDemo.vue

:::

## ⚙️ Code source du composant

::: code-group

<<< DsfrTableRow.vue
<<< DsfrTable.types.ts

:::

Voilà ! `DsfrTableRow` est prêt à transformer vos données en un tableau visuellement attrayant et fonctionnel.

<script setup lang="ts">
import DsfrTableRowDemo from './docs-demo/DsfrTableRowDemo.vue'
</script>
