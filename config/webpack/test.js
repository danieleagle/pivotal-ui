import puiAliases from '../../helpers/pui-aliases';
import NoErrorsPlugin from 'webpack/lib/NoErrorsPlugin';

module.exports = {
  devtool: 'cheap-module-source-map',
  externals: null,
  module: {
    loaders: [{
      test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'
    }, {
      test: /\.(eot|ttf|woff)$/, loader: 'url-loader',
    }, {
      test: /\.s?css$/, loader: 'css-loader!sass-loader',
    }]
  },
  output: {filename: 'spec.js'},
  plugins: [new NoErrorsPlugin()],
  quiet: true,
  resolve: {
    alias: Object.assign({
      'raf': `${__dirname}/../../spec/pivotal-ui-react/support/mock_raf.js`,
      'performance-now': `${__dirname}/../../spec/pivotal-ui-react/support/mock_performance_now.js`,
      'lodash.throttle': `${__dirname}/../../spec/pivotal-ui-react/support/mock_throttle.js`,
      'fbjs/lib/warning': `${__dirname}/../../spec/pivotal-ui-react/support/mock_warning.js`
    }, puiAliases)
  },
  watch: true
};