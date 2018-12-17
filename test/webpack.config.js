const path = require('path');

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    path: path.resolve('.', 'dist'),
    publicPath: 'dist/',
    filename: 'index.min.js',
  },
};
