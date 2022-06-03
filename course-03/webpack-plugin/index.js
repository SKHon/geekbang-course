
const _ = require('lodash');
const fs = require('fs');
const { checkFile, BFSTravel } = require('./util').default;

module.exports = class DemoPlugin {
  constructor(options) {
    this.dependenciesTree = {};
    this.options = options;
    this.dirPath = options.dirPath || __dirname;
  }
  apply(compiler) {
    compiler.hooks.normalModuleFactory.tap('DepAnalysisPlugin', (nmf) => {
      nmf.hooks.afterResolve.tap('DepAnalysisPlugin', (result) => {
          
          const resourceResolveData = result?.createData?.resourceResolveData;
          const curFile = resourceResolveData?.path;
          const parentFile = resourceResolveData?.context?.issuer
          
          
          // 对于合法文件进行分析
          if(curFile && checkFile(curFile)) {
            // 如果有父级文件，则直接添加
            if(parentFile) {
              const curNode = BFSTravel(this.dependenciesTree, parentFile);
              if(curNode) {
                curNode.deps.push({
                  path: curFile,
                  deps: []
                })
              } 
            } else { // 说明是根路径
              this.dependenciesTree = {
                path: curFile,
                deps: []
              }
            }
          } 
        }
      )
    });
    // 编译完成之后，操作依赖书
    compiler.hooks.done.tap("DepAnalysisPlugin", stats => {
			console.log(this.dependenciesTree);
		});
   
  } 
}