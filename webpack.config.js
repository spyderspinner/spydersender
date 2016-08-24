var Webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'public', 'build');
var mainPath = path.resolve(__dirname, 'app', 'index.js');

var config = {
  devtool: 'eval',
  entry: [
    //hot style updates
    'webpack/hot/dev-server',
    //script refreshing browser on non hot updates
    'webpack-dev-server/client?http://localhost:8080',
  mainPath],
  output: { path: buildPath, filename: 'bundle.js', publicPath: '/build' },
  resolve: {
    extensions: ['', '.js', '.jsx', 'index.js', '.json', 'index.json']
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: [nodeModulesPath], query: { presets: ['es2015']} },
      { test: /\.json$/, loader: "json-loader" }
    ]
  },
  node: {
    fs: "empty",
    net: "empty",
    tls: "empty",
    console: "empty"
  },
  plugins: [new Webpack.HotModuleReplacementPlugin()]
};

module.exports = config;