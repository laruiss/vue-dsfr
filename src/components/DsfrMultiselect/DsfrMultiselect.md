# Liste déroulante enrichie - `DsfrMultiselect`

## 🌟 Introduction

Le `DsfrMultiselect` est un composant Vue permettant à un utilisateur de choisir un ou plusieurs élément dans une liste donnée.

La liste déroulante fournit une liste d’option parmi lesquelles l’utilisateur peut choisir. L'utilisateur peut filtrer cette liste et utiliser un bouton pour sélectionner/déselectionner tous les éléments visibles

🏅 La documentation sur **liste déroulante riche** sur le [DSFR](https://www.systeme-de-design.gouv.fr/composants-et-modeles/composants-beta/liste-deroulante-riche)

## 📐 Structure

1. Libellé - Obligatoire (prop `label`)
2. Une description - Optionnelle (prop `hint` ou slot `hint`)
3. Une liste, composée d’un ensemble d’options sélectionnables - Obligatoire (prop `options`)

    À l’intérieur de la liste :

     4. Un bouton “tout sélectionner” “tout désélectionner” - Optionnel (props `selectAll` et `selectAllLabel`)
     5. Un champs de saisie - Optionnel

     Une section de formulaire (fieldset) contenant :

     6. Une légende - Optionnelle (qui peut être masquée à l’écran - prop `legend` ou slot `legend`)
     7. Une description du groupe - Optionnelle (qui peut être masquée à l’écran)
     8. Une liste d’options - Obligatoire (prop `options`)

| nom                | type                                  | défaut                                        | obligatoire | Description                                                                   |
|--------------------|---------------------------------------|-----------------------------------------------|-------------|------------------------------------------------------------------------------|
| `id`               | *`string`*                            | *random string*                               |             | Identifiant unique pour l'input. Si non spécifié, un ID aléatoire est généré. |
| `modelValue`       | *`(string \| number)[]`*              | ``                                            | ✅          | La valeur liée au modèle de l'input.                                          |
| `options`          | *`(T \| string \| number)[]`*         |                                               | ✅          | Options sélectionnables.                                                      |
| `label`            | *`string`*                            |                                               | ✅          | Le libellé de l'input.                                                        |
| `labelVisible`     | *`boolean`*                           | `true`                                        |             | Gére l'affichage du label ou non.                                             |
| `labelClass`       | *`string`*                            | `''`                                          |             | Classe personnalisée pour le style du libellé.                                |
| `legend`           | *`string`*                            | `''`                                          |             | Texte de legend.                                                              |
| `hint`             | *`string`*                            | `''`                                          |             | Texte d'indice pour guider l'utilisateur.                                     |
| `successMessage`   | *`string`*                            | `''`                                          |             | Message de validation à afficher en dessous du select.                        |
| `errorMessage`     | *`string`*                            | `''`                                          |             | Message d'erreur à afficher en dessous du select.                             |
| `buttonLabel`      | *`string`*                            | `Sélectionner une option, ...`                |             | Texte qui s'affiche sur le bouton.                                            |
| `selectAll`        | *`boolean`*                           | `true`                                        |             | Gérer l'affichage du bouton de 'sélectionner tout'.                           |
| `search`           | *`boolean`*                           | `true`                                        |             | Gérer le label du 'sélectionner tout'.                                        |
| `selectAllLabel`   | *`[string, string]`*                  | `["Tout sélectionner", "Tout désélectionner"]`|             | Gérer le label du 'sélectionner tout'.                                        |
| `idKey`            | *`keyof T`*                           | `id`                                          |             | Voir ci dessous.                                                              |
| `labelKey`         | *`keyof T`*                           | `label`                                       |             | Voir ci dessous.                                                              |
| `filteringKeys`    | *`(keyof T)[]`*                       | `['label']`                                   |             | Voir ci dessous.                                                              |
| `maxOverflowHeight`| *`CSSStyleDeclaration['maxHeight']`*  | `'400px'`                                     |             | Taille maximum du dropdown.                                                   |

## ⚠️ Cas particuliers

### Cas d'utilisation d'objets dans des options

Pour l'utilisation d'objets comme props, il peut être nécessaire de renseigner `idKey`, `labelKey` et `filteringKeys`:

- `idKey` est la clef d'un identifiant unique de chaque élément. C'est cette valeur qui sera utilisée dans `modelValue`
- `labelKey` est la clef utilisée pour afficher le label des checkboxs
- `filteringKeys` est une array de clefs qui sont utilisé pour filtrer dans le search

### Attributs implicitement déclarés

::: warning Important

Toutes les props passées à `<DsfrMultiselect>` dans une template et qui ne sont pas définies dans les props seront passées à la balise `<button>` native du composant (cf. [Attributs implicitement déclarés (Fallthrough attributes)](https://fr.vuejs.org/guide/components/attrs.html) de la documentation officielle de Vue.js.). Comme par exemple `readonly`.

Voici une liste non-exhaustive:

- `name`
- `readonly`
- `disabled`
- `autocomplete`
- `autofocus` ([déconseillé](https://brucelawson.co.uk/2009/the-accessibility-of-html-5-autofocus/))
- `size`
- `maxlength`
- `pattern`

:::

### DsfrMultiselect dans une iframe

::: warning Important

Si DsfrMultiselect est placé dans une iframe, il n'aura pas accès aux clics exterieurs pour se fermer.

:::

## 📡Évenements

`DsfrMultiselect` émet l'événement suivant :

| Nom                | type                     | Description                                  |
|--------------------|--------------------------|----------------------------------------------|
| `update:modelValue`| *`Array<(T \| string \| number)>`* | Est émis lorsque la valeur du select change. |

## 🧩 Slots

`DsfrMultiselect` permet les slots suivants :

| Nom                | props                                          | Description                                                             |
|--------------------|------------------------------------------------|-------------------------------------------------------------------------|
| `label`            |                                                | Permet de changer le label.                                             |
| `required-tip`     |                                                | Permet de changer le required-tip.                                      |
| `hint`             |                                                | Permet de changer le hint.                                              |
| `button-label`     |                                                | Permet de changer le label du bouton.                                   |
| `legend`           |                                                | Permet de changer la legend du bouton.                                  |
| `checkbox-label`   | *`(props: { option: T \| string \| number })`* | Permet de changer le label des checkboxs.                               |
| `no-results`       |                                                | Permet de changer l'affichage lorsque la recherche donne aucun élément. |

## 📝 Exemples

### Exemple Basique

::: code-group

<Story data-title="Démo simple" min-h="550px">
  <div
  class="flex flex-col"
  >
    <DsfrMultiselectDemoSimple />
  </div>
</Story>

<<< docs-demo/DsfrMultiselectDemoSimple.vue

:::

### Exemple Complexe

::: code-group

<Story data-title="Démo complexe" min-h="550px">
  <div
  class="flex flex-col"
  >
    <DsfrMultiselectDemoComplexe />
  </div>
</Story>

<<< docs-demo/DsfrMultiselectDemoComplexe.vue

:::

## ⚙️ Code source du composant

::: code-group

<<< DsfrMultiselect.vue
<<< DsfrMultiselect.types.ts

:::

<script setup lang="ts">
import DsfrMultiselectDemoSimple from './docs-demo/DsfrMultiselectDemoSimple.vue'
import DsfrMultiselectDemoComplexe from './docs-demo/DsfrMultiselectDemoComplexe.vue'
</script>
