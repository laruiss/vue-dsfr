# Page d’erreur - `DsfrErrorPage`

## 🌟 Introduction

Bonjour et bienvenue dans la documentation du composant DsfrErrorPage ! Ce composant est une merveilleuse façon de gérer les erreurs, spécialement les fameuses erreurs 404. Imaginez-vous en train de parcourir un charmant village français, mais soudain, vous vous retrouvez dans une impasse. Eh bien, DsfrErrorPage est là pour vous montrer le chemin de retour avec style et élégance !

## 🛠️ Props

| Nom           | Type        | Défaut                                                                  | Obligatoire   | Description                                                                                                              |
|---------------|-------------|-------------------------------------------------------------------------|---------------|--------------------------------------------------------------------------------------------------------------------------|
| `title`       | `string`    | `"Page non trouvée"`                                                    |               | Titre de la page d'erreur.                                                                                                |
| `subtitle`    | `string`    | `"Erreur 404"`                                                          |               | Sous-titre pour la page d'erreur.                                                                                         |
| `description` | `string`    | `"La page que vous cherchez est introuvable. Excusez-nous pour la..."` |               | Description détaillée de l'erreur.                                                                                        |
| `help`        | `string`    | `"Si vous avez tapé l'adresse web dans le navigateur, vérifiez..."`    |               | Conseil ou suggestion pour aider l'utilisateur.                                                                           |
| `buttons`     | `Function`  | `() => []`

## 📡Événements

Ce composant ne déclenche pas d'événements spécifiques. Il est tranquille comme une petite ville française un dimanche matin.

## 🧩 Slots

| Nom          | Description                                                             |
|--------------|-------------------------------------------------------------------------|
| `default`    | Slot par défaut. Utilisé pour insérer du contenu après ou à la place des boutons. Peut-être pour suggérer un retour à la page d'accueil ou un lien vers un site touristique local ? 🏰 |

## 📝 Exemples

Voici un petit exemple pour illustrer comment utiliser `DsfrErrorPage` dans votre pittoresque application Vue :

::: code-group
<Story data-title="Démo" minH="500px">
  <DsfrErrorPageDemo />
</Story>

<<< docs-demo/DsfrErrorPageDemo.vue [Code de la démo]
:::

Et voilà ! Avec DsfrErrorPage, gérer les erreurs devient presque un plaisir. Bon codage ! 🎨👩‍💻🇫🇷

<script setup>
import DsfrErrorPageDemo from './docs-demo/DsfrErrorPageDemo.vue'
</script>
