module.exports = function(env = null) {
  return {
    webpackConfig: require(`./webpack/${env}`),
    config: {
      bail: false,
      module: {
        loaders: [
          {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel'}
        ]
      },
      output: {
        filename: '[name].js',
        chunkFilename: '[id].js',
        pathinfo: true
      }
    }
  }
};
