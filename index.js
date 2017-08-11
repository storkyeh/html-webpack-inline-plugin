var inline = require('inline-source')

function HtmlWebpackInlinePlugin(options) {
  // Setup the plugin instance with options...
  this.options = options
}

HtmlWebpackInlinePlugin.prototype.apply = function(compiler) {
  var self = this
  compiler.plugin('compilation', function(compilation, options) {
    compilation.plugin('html-webpack-plugin-before-html-processing', function(htmlPluginData, callback) {
      var html = htmlPluginData.html
      inline(html, self.options, function(err, html) {
        if (!err) {
          htmlPluginData.html = html
        }
        callback(null, htmlPluginData)
      })
    });
  });
};

module.exports = HtmlWebpackInlinePlugin
