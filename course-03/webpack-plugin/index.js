
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
      // nmf.hooks.afterResolve.tapAsync('DepAnalysisPlugin', (result, callback) => {
          
      //     const resourceResolveData = result?.createData?.resourceResolveData;
      //     const curFile = resourceResolveData?.path;
      //     const parentFile = resourceResolveData?.context?.issuer
          
          
      //     // 对于合法文件进行分析
      //     if(curFile && checkFile(curFile)) {
      //       console.log(parentFile);
      //       console.log(curFile);
      //       // console.log(resourceResolveData);
      //       console.log('\n\n');
            

      //       // 如果有父级文件，则直接添加
      //       if(parentFile) {
      //         const curNode = BFSTravel(this.dependenciesTree, parentFile);
      //         if(curNode) {
      //           curNode.deps.push({
      //             path: curFile,
      //             deps: []
      //           })
      //         } 
      //       } else { // 说明是根路径
      //         this.dependenciesTree = {
      //           path: curFile,
      //           deps: []
      //         }
      //       }
      //       // console.log(JSON.stringify(this.dependenciesTree), '\n');
      //       fs.writeFileSync('student-2.json', JSON.stringify(this.dependenciesTree));
      //     } 
      //     callback()
      //   }
      // )

    });
   
  } 
}