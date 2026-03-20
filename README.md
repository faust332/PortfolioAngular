# Portfolio Angular – CapsuleDevLab

## Description

Portfolio web développé avec Angular dans le cadre de mon apprentissage du framework et de TypeScript.

Ce projet m’a permis de découvrir la structure d’une application front-end, d’organiser des composants et de mettre en place un site web fonctionnel.

---

## Objectifs

* Découvrir Angular et TypeScript
* Concevoir un site web avec Angular
* Comprendre l’organisation d’une application front-end
* Mettre en pratique les bases du développement web
* Disposer d’un portfolio pour des candidatures (alternance / université)

---

## Technologies utilisées

* Angular
* TypeScript
* HTML5 / CSS3
* Node.js / npm
* Netlify

---

## Structure du projet

```text
PortfolioAngular/
├── public/
│   ├── documents/        # CV et documents
│   └── images/           # Images du portfolio
│
├── src/
│   ├── app/
│   │   ├── pages/        # Sections principales du site
│   │   │   ├── about/
│   │   │   ├── bdd/
│   │   │   ├── formation/
│   │   │   ├── linux/
│   │   │   ├── singe/
│   │   │   ├── skills/
│   │   │   └── vaisseaux-spatiaux/
│   │   │
│   │   ├── components/   # Composants réutilisables
│   │   │   ├── agrandir/
│   │   │   ├── contact/
│   │   │   ├── header/
│   │   │   └── project-grid/
│   │   │
│   │   ├── app.ts
│   │   ├── app.routes.ts
│   │   └── app.config.ts
│   │
│   ├── index.html
│   ├── main.ts
│   └── styles.css
│
├── angular.json
├── package.json
├── tsconfig.json
└── netlify.toml
```

---

## Installation

Cloner le projet :

```bash
git clone https://github.com/faust332/PortfolioAngular.git
cd PortfolioAngular
```

Installer les dépendances :

```bash
npm install
```

---

## Lancer le projet

```bash
ng serve
```

Puis ouvrir :

```
http://localhost:4200/
```

---

## Build de production

```bash
ng build
```

Les fichiers générés seront disponibles dans le dossier :

```
dist/
```

---

## Déploiement

Le projet est configuré pour un déploiement via Netlify grâce au fichier :

```
netlify.toml
```
```
https://rayan-zouaoui.netlify.app/
```
---

## Compétences démontrées

* Découverte et prise en main d’Angular
* Utilisation de TypeScript
* Structuration d’une application front-end
* Organisation d’un projet web
* Déploiement d’une application

---
