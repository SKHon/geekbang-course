const webpack = require('webpack');
const DepAnalysisPlugin = require('../webpack-plugin')
module.exports = function override(config, env) {

  // 通过自定义
  config.plugins.push(
    // new DepAnalysisPlugin({
    //   dirPath: __dirname
    // })
    // new webpack.NormalModuleReplacementPlugin(
    //   './components/Home',
    //   './aaaaa/components/Home'
    // )
  )
  
  return config;
}