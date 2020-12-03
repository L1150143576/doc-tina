const MonacoWebpackPligin = require("monaco-editor-webpack-plugin")
const CircularDependencyPlugin = require("circular-dependency-plugin")
module.exports = {
  chainWebpack (config) {
    config.plugin('monaco').use(new MonacoWebpackPligin())
    config.plugin('circular').use(new CircularDependencyPlugin())
  }
}