# Amigo Royale

## Synopsis

Angular2 (with Angular CLI) web application about Clash Royale.

## Folder structure

```
amigo-royale
├── LICENSE.md
├── README.md
├── e2e
|  ├── app.e2e-spec.ts
|  ├── app.po.ts
|  └── tsconfig.e2e.json
├── karma.conf.js
├── package.json
├── protractor.conf.js
├── src
|  ├── app
|  |  ├── component
|  |  ├── resource
|  |  ├── shared
|  |  └── test
|  ├── assets
|  ├── environments
|  |  ├── environment.prod.ts
|  |  └── environment.ts
|  ├── favicon.ico
|  ├── images
|  |  └── loading.gif
|  ├── index.html
|  ├── main.ts
|  ├── polyfills.ts
|  ├── styles.css
|  ├── test.ts
|  ├── tsconfig.app.json
|  ├── tsconfig.spec.json
|  └── typings.d.ts
├── tsconfig.json
└── tslint.json
```

## Dependencies

Angular CLI:

	* @angular/cli: 1.4.7
	* node: 8.5.0
	* os: darwin x64
	* @angular/animations: 4.4.6
	* @angular/cdk: 2.0.0-beta.12
	* @angular/common: 4.4.6
	* @angular/compiler: 4.4.6
	* @angular/core: 4.4.6
	* @angular/forms: 4.4.6
	* @angular/http: 4.4.6
	* @angular/material: 2.0.0-beta.12
	* @angular/platform-browser: 4.4.6
	* @angular/platform-browser-dynamic: 4.4.6
	* @angular/router: 4.4.6
	* @angular/cli: 1.4.7
	* @angular/compiler-cli: 4.4.6
	* @angular/language-service: 4.4.6
	* typescript: 2.3.4

## Installation guide

This tutorial is only for UNIX systems.
Start the Angular CLI web application to create local development environment to begin coding:

Open terminal from amigo-royale folder:

```
npm install
ng serve --open
```

Once server has started, the console should show a message like this:

```
** NG Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **
	10% building modules 5/5 modules 0 activewebpack: wait until bundle finished: /
Date: 2017-11-30T19:47:20.624Z
Hash: 06a4616810d20c4df8ac
Time: 16379ms
chunk {inline} inline.bundle.js, inline.bundle.js.map (inline) 5.83 kB [entry] [rendered]
chunk {main} main.bundle.js, main.bundle.js.map (main) 28.4 kB {vendor} [initial] [rendered]
chunk {polyfills} polyfills.bundle.js, polyfills.bundle.js.map (polyfills) 588 kB {inline} [initial] [rendered]
chunk {styles} styles.bundle.js, styles.bundle.js.map (styles) 56 kB {inline} [initial] [rendered]
chunk {vendor} vendor.bundle.js, vendor.bundle.js.map (vendor) 4.89 MB [initial] [rendered]

webpack: Compiled successfully.
```
The application would be hosted at ```localhost:4200```.

## Authors

* **Esteban Martín Busto**

## Contributors

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
