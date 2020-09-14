<h1 align="center">Team-180-a-Frontend</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
  <a href="README.md" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://app.codacy.com/gh/BuildForSDGCohort2/Team-180-a-Frontend?utm_source=github.com&utm_medium=referral&utm_content=BuildForSDGCohort2/Team-180-a-Frontend&utm_campaign=Badge_Grade_Settings" target="_blank">
    <img alt="Codacy Badge" src="https://api.codacy.com/project/badge/Grade/dce60ca7a76344a9989cbea885395289">
  </a>
</p>

> Client side app for Team-180-a

## Install

```sh
npm install
```

## Usage

Run the development server:

```sh
npm start
```

Incase you run into issues launching the development server, try setting this environmental variable:

```sh
echo 'SKIP_PREFLIGHT_CHECK=true' >> .env
```

## Run tests

TODO

```sh
npm run test
```

## Lint

```sh
npm run lint
```

## Fix lint errors/ warnings

```sh
npm run lint:fix
```

## Format

Code formatting with prettier

```sh
npm run format
```

## Components

This is the component file structure we are using including the naming conventions:
```
├───components
    └───navbar
        └───navbar.component.jsx
        └───navbar.module.css
        └───navbar.spec.jsx
        └───navbar.container.jsx
        └───navbar.utils.jsx
    └───footer
        └───footer.component.jsx
        └───footer.module.css
        └───footer.spec.jsx
├───pages
    └───homepage
        └───homepage.component.jsx
        └───homepage.module.css
        └───homepage.spec.jsx
    └───about
        └───about.component.jsx
        └───about.module.css
        └───about.spec.jsx
```
You will notice the `css` files are labeled as `.module.css`, this is because we want to make use of css modules which allow the scoping of CSS by automatically creating a unique classname of the format [filename]\_[classname]\_\_[hash]. If you'd like to read more on css modules, here are some useful links (it's easy don't worry 😉):
* https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/
* https://github.com/css-modules/css-modules