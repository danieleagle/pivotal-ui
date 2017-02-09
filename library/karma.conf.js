const karmaWebpackConfig = require('./config/webpack.config')('test').webpackConfig
const path = require('path')

module.exports = config => {
  config.set({
    frameworks: ['jasmine'],
    files: [
      'spec/**/*_spec.js' // needs to be spec or else random entry point errors (???)
    ],
    browsers: ['Chrome'],
    preprocessors: {
      'spec/**/*.js': ['webpack'],
      'src/**/*.js': ['webpack']
    },
    reporters: ['spec', 'kjhtml'],
    webpack: karmaWebpackConfig,
    webpackMiddleware: {noInfo: true}
  })
}