[![Published on NPM](https://img.shields.io/npm/v/@advanced-rest-client/paper-masked-input.svg)](https://www.npmjs.com/package/@advanced-rest-client/paper-masked-input)

[![Build Status](https://travis-ci.org/advanced-rest-client/api-url-data-model.svg?branch=stage)](https://travis-ci.org/advanced-rest-client/paper-masked-input)

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/advanced-rest-client/paper-masked-input)

## &lt;paper-masked-input&gt;

`<paper-masked-input>` is a single-line password field with Material Design styling and option to unmask the value.


```html
<paper-masked-input label="Your password"></paper-masked-input>
```

### API components

This components is a part of [API components ecosystem](https://elements.advancedrestclient.com/)

## Usage

### Installation
```
npm install --save @advanced-rest-client/paper-masked-input
```

### In an html file

```html
<html>
  <head>
    <script type="module">
      import '@advanced-rest-client/paper-masked-input/paper-masked-input.js';
    </script>
  </head>
  <body>
    <paper-masked-input></paper-masked-input>
  </body>
</html>
```

### In a Polymer 3 element

```js
import {PolymerElement, html} from '@polymer/polymer';
import '@advanced-rest-client/paper-masked-input/paper-masked-input.js';

class SampleElement extends PolymerElement {
  static get template() {
    return html`
    <paper-masked-input></paper-masked-input>
    `;
  }
}
customElements.define('sample-element', SampleElement);
```

### Installation

```sh
git clone https://github.com/advanced-rest-client/paper-masked-input
cd api-url-editor
npm install
npm install -g polymer-cli
```

### Running the demo locally

```sh
polymer serve --npm
open http://127.0.0.1:<port>/demo/
```

### Running the tests
```sh
polymer test --npm
```
