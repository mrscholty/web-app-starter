# web app starter
starter web app for creating single-page applications using web standards and web components
#### Dependencies
- [Browsersync](https://browsersync.io/) (local dev server)
- [Rollup.js](https://rollupjs.org/) (for creating third party ES6 modules)
- [lit-html](https://lit-html.polymer-project.org/) (for managing HTML templates in JS)
- [vaadin-router](https://vaadin.com/router/) (for routing)

#### Install npm dependencies
- `npm install`

#### create ES6 modules from third party dependencies
`npx rollup --config rollup.config.js creates ES6 module in src/lib/vendor`

#### Run (using local development server)
- `npm start`
- launch browser `http://localhost:3000`
