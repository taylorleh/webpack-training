

module.exports = {
  entry: './entry.js',
  output: {
    filename: 'bundle.js'
  },
  devtool: 'soure-map',
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css!' }
    ]
  }
};
