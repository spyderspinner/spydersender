var path = require('path')

module.exports = {
  entry: "./index.js",
  target: 'node',
  output: {
    path: path.join(__dirname, 'app', 'static', 'generated'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', 'index.js', '.json', 'index.json']
  },
  module: {
    loaders: [
      { test: /\.json$/, loader: "json-loader" }
    ]
  },
  node: {
    fs: "empty"
  }
}