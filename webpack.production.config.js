const { merge } = require('webpack-merge')
const base = require('./webpack.config')

module.exports = merge(base, {
  mode: 'production',
  devtool: 'hidden-source-map',
  module: {
    rules: [],
  },
  plugins: [],
})
