# ElementsApp1

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# elements

# Elements

ng add @angular/elements

npm i @webcomponents/custom-elements

Eliminar  bootstrap: []

agregar en `polyfills.ts` 

``` javascript

import '@webcomponents/custom-elements/src/native-shim';
import '@webcomponents/custom-elements/custom-elements.min';

```
en app.modules.ts agregar

``` javascript
export class AppModule {
  constructor(private injector: Injector) { }
  ngDoBootstrap() {
    const el = createCustomElement(ListProductsComponent, { injector: this.injector });
    // tag de html
    customElements.define('list-products', el);
  }
}

```
Para que funcione en tiempo real ng for ng if, cambiar el dom se debe de hacer esto:

https://www.npmjs.com/package/elements-zone-strategy

npm install --save elements-zone-strategy

``` javascript
export class AppModule {
  constructor(private injector: Injector) { }
  ngDoBootstrap() {
    const strategyFactory = new ElementZoneStrategyFactory(ListProductsComponent, this.injector);
    const el = createCustomElement(ListProductsComponent, { injector: this.injector, strategyFactory });

    customElements.define('list-products', el);
  }
}

```


quitar todo el index.html, poner el tag

$ npm i fs-extra concat --save-dev

``` javascript

const fs = require('fs-extra');
const concat = require('concat');    

(async function build() {

    const files =[
        // main hasta el ultimo y /dist/ depende de cada proytecto 
        './dist/elementsApp1/main.js',
        './dist/elementsApp1/polyfills.js',
        './dist/elementsApp1/runtime.js',
        './dist/elementsApp1/scripts.js',
    ]
    
    await fs.ensureDir('elements')
    
    await concat(files, 'elements/list-products.js')
    console.info('Elements created successfully!')

})()


```
**Eliminar** todo app. componentes, modulos. etc

** Para ng-boostrap con angular 7 

quitar de package.json y re instalar npm install --save @ng-bootstrap/ng-bootstrap

** scrip para build

``` json
 "build-elements": "ng build --prod --output-hashing none && node build-script.js && npm run copy-css",
    "copy-css": "copyfiles  -u 2 dist/elementsApp1/*.css elements/"

```

