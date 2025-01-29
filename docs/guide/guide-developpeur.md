# Guide du développeur

## Comment contribuer

::: info NOTE

Ceci est le guide du développeur pour contribuer au projet de cette bibliothèque.
Si vous cherchez à utiliser cette bibliothèque, veuillez vous référer au
[Guide d’utilisation](./pour-commencer.md).

:::

### TL;DR

Les commits doivent suivre la spécification des **[Commits Conventionnels](https://www.conventionalcommits.org/fr/v1.0.0/)**

Une PR doit être faite avec une branche **à jour avec la branche `develop` en `rebase` (et sans `merge`) avant demande de fusion**,
et **la fusion doit être demandée dans `develop`.**

### Cloner le projet

```shell
git clone https://github.com/dnum-mi/vue-dsfr
```

### Installer le projet

Se positionner à la racine du projet, puis lancer la commande

```shell
npm install
```

Si le paquet cypress n'arrive pas à se télécharger lors de la précédente commande, alors il faut télécharger le fichier cypress.zip manuellement sur le site cypress.io, et spécifier le fichier dans la variable CYPRESS_INSTALL_BINARY

```shell
CYPRESS_INSTALL_BINARY=/chemin/vers/cypress/cypress.zip npm install
```

### Pré-requis

- npm : version 10 minimum
- Node.js : version 20 minimum

#### Installation des pré-requis (testé sous Ubuntu 22.04)

Suivez la procédure suivante en lançant les commandes détaillées ci-dessous :

1. Mise à jour des dépôts :

```shell
wget -qO- https://deb.nodesource.com/setup_20.x | sudo -E bash -
```

2. Installer `Node.js` :

```shell
sudo apt install -y nodejs
```

3. (Optionnel) Installer `volta` (Node Version Manager) :

Avec la commande curl :

```shell
curl https://get.volta.sh | bash
```

5. Fermer et rouvrir un terminal, ou bien taper la commande suivante dans tous les terminaux déjà ouverts :

```shell
source ~/.bashrc
```

6. Vérifier la version de Volta installée :

```shell
volta --version
```

7. La version de node sera utilisée automatiquement

Dans le dossier `vue-dsfr`, si vous lancer la commande suivante :

```shell
node --version
```

Vous devriez voir 20.x.x

### Comment contribuer au projet

- Cloner le projet et créer des [pull-request](https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)
- Indiquer les bugs dans des [issues](https://github.com/dnum-mi/vue-dsfr/issues)
- Faire des demandes dans [discussions](https://github.com/dnum-mi/vue-dsfr/discussions)
- Rejoindre le [server Discord](https://discord.gg/jbBJ9769ZZ)

### Àpropos des pull-requests

Les commits doivent suivre la spécification des **[Commits Conventionnels](https://www.conventionalcommits.org/fr/v1.0.0/)** afin que
l’outil de release automatique détecte les nouvelles fonctionnalités et les corrections d’anomalies.

Les branches doivent être le plus possible **à jour avec la branche `develop` en `rebase` (et sans `merge`) avant demande de fusion**,
et **la fusion doit être demandée dans `develop`.**
