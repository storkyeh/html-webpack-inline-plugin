var fs = require('fs')

var inlineReg = /<!-- inline-plugin[\w\W\r\n]*?-->/g
var pathReg = /path="(.*?)"/

function wrapScript(script) {
  return '<script>' + script + '</script>\n'
}

function HtmlWebpackInlinePlugin(options) {
  // Setup the plugin instance with options...
  this.options = options
}

HtmlWebpackInlinePlugin.prototype.apply = function(compiler) {
    compiler.plugin('compilation', function(compilation, options) {
        compilation.plugin('html-webpack-plugin-before-html-processing', function(htmlPluginData, callback) {
          var html = htmlPluginData.html
          var tags = html.match(inlineReg)
          if (tags) {
            tags.forEach(function(tag) {
              var ret = tag.match(pathReg)
              if (ret && ret[1]) {
                var scriptContent = fs.readFileSync(ret[1], 'utf8')
                html = html.replace(tag, wrapScript(scriptContent))
              }
            })
            htmlPluginData.html = html
          }
          callback(null, htmlPluginData)
        });
    });
};

module.exports = HtmlWebpackInlinePlugin
