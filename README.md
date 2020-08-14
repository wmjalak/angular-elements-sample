# Web Components with Angular Elements

Sample of how to

* build Web Components with Angular Elements
* publish everything to npm
* use them in your Angular application



## Development

In `app.module.ts` change the `LIBRARY_BUILD` to false:
```
export const LIBRARY_BUILD = false;
```
Run the application and start development.


## Build the Web Components

In `app.module.ts` change the `LIBRARY_BUILD` to true:
```
export const LIBRARY_BUILD = true;
```

Build the library
```
$ npm run build:library
```

Publish to NPM (if needed)
```
$ npm run publish:elements
```

## How to use it in Angular application

```
npm install wc-parma
```
`app.module.ts`:

Add CUSTOM_ELEMENTS_SCHEMA
```
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
...
schemas: [CUSTOM_ELEMENTS_SCHEMA]
```

Add import
```
import 'wc-parma';
```

`app.component.html`:
```
<wc-parma></wc-parma>
...

