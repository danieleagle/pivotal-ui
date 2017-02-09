const NoErrorsPlugin = require('webpack/lib/NoErrorsPlugin');

module.exports = {
  devtool: 'eval',
  entry: null,
  externals: null,
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      },
      {
        test: /\.(eot|ttf|woff)$/,
        loader: 'url-loader',
      },
      {
        test: /\.s?css$/,
        loader: 'css-loader!sass-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader!image-webpack-loader'
      }
    ]
  },
  output: {filename: 'spec.js' },
  plugins: [
    new NoErrorsPlugin()
  ],
  quiet: true,
  watch: true
}
