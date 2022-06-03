const DepAnalysisPlugin = require('../webpack-plugin/index');
module.exports = function override(config, env) {
 
  config.mode = 'development';

  config.cache = false;
  config.plugins.push(
    new DepAnalysisPlugin({
      dirPath: __dirname
    })
  );
  
  // 一定要把新的 config 返回
  return config;
}