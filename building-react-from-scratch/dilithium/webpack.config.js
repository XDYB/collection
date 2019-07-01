let webpack = require('./node_modules/webpack/lib/webpack');
const path = require('path');

module.exports = {
  entry: './dilithium.js',
  output: {
    path: path.resolve(__dirname, "build"),
    filename: 'Dilithium.js',
    libraryTarget: 'var',
    library: 'Dilithium'
  }
}
