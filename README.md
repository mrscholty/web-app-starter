# web app starter
boilerplate for (SPA) web app using web standards and web components

#### Dependencies
- [Browsersync](https://browsersync.io/) (local dev server)
- [Rollup.js](https://rollupjs.org/) (for creating third party ES6 modules)
- [lit-html](https://lit-html.polymer-project.org/) (for managing HTML templates in JS)

#### Install npm dependencies
- `npm install`

#### create ES6 modules from third party dependencies
lit-html
- `npx rollup --config rollup/rollup.lit-html.config.js`
- create `lit-html.js` ES6 module in `src/lib/vendor`

#### Run (using local development server)
- `npm start`
- launch browser `http://localhost:3000`
