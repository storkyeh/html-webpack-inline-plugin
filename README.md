# html-webpack-inline-plugin

[![NPM Version](https://img.shields.io/npm/v/html-webpack-inline-plugin.svg?style=flat-square)](https://www.npmjs.com/package/html-webpack-inline-plugin)

> Inline all `<script>`, `<link>` and `<img>` tags that contain the `inline` attribute with [inline-source](https://github.com/popeindustries/inline-source).

## Installation


```shell
npm install --save-dev html-webpack-inline-plugin
```

## Basic Usage
Require the plugin in your webpack config:

```javascript
var HtmlWebpackInlinePlugin = require('html-webpack-inline-plugin');
```

Add the plugin to your webpack config as follows:

```javascript
plugins: [
  new HtmlWebpackPlugin(),
  new HtmlWebpackInlinePlugin()
]  
```

Add the tag to your html template as follows:

```html
<!DOCTYPE html>
<html>
  <head>
    <script inline src="web_modules/lib/lib.js"></script>
  </head>
  <body>
  </body>
</html>
```

# Inspired by
[gulp-inline-source](https://github.com/fmal/gulp-inline-source)

# License

This project is licensed under [MIT](https://github.com/jantimon/html-webpack-plugin/blob/master/LICENSE).
