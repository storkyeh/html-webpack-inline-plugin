# Embed Scripts Inline for the HTML Webpack Plugin

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
  <!-- inline-plugin path="web_modules/lib/lib.js"-->
</head>
<body>
</body>
</html>
```

# License

This project is licensed under [MIT](https://github.com/jantimon/html-webpack-plugin/blob/master/LICENSE).
