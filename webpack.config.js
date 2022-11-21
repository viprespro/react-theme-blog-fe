const { resolve } = require('path')
const HtmlPlugin = require('html-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'

const loaders = [
  isProd ? MiniCssExtractPlugin.loader : 'style-loader',
  'css-loader',
  'postcss-loader',
]

module.exports = {
  entry: {
    index: './src/index.tsx',
  },
  output: {
    path: resolve(__dirname, 'dist'),
    publicPath: isProd ? './' : '/',
    filename: '[name].js',
  },
  target: 'web',
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    mainFields: ['module', 'browser', 'main'],
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.css$/,
        use: [...loaders],
      },
      {
        test: /\.less$/,
        use: [...loaders, 'less-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg)$/,
        loader: 'url-loader',
        options: {
          limit: 8 * 1024,
          name: 'img/[name].[hash:7].[ext]',
          esModule: false,
        },
      },
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HtmlPlugin({
      template: 'public/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
  ],
  performance: {
    maxEntrypointSize: 2500000,
    maxAssetSize: 2000000,
  },
}
