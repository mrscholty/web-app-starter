# web app starter
starter web app for creating single-page applications using web standards
#### Dependencies

##### at runtime

- [uhtml](https://github.com/WebReflection/uhtml) (for creating HTML templates in JS)
- [vaadin-router](https://vaadin.com/router/) (for routing)

##### at development time
- [Browsersync](https://browsersync.io/) (as local dev server)
- [Rollup.js](https://rollupjs.org/) (for bundling third party ES modules)


#### Install npm dependencies
- `npm install`

#### bundle third party dependencies into single ES module
`npx rollup --config rollup.config.js` bundles ES6 module in src/lib/vendor`

#### Run (using local development server)
- `npm start`
- launch browser `http://localhost:3000`
