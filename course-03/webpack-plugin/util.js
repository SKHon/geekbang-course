const path = require('path');
const _ = require('lodash');

const LEGAL_FILES = ['.js', '.ts', '.jsx', '.tsx', '.css'];

function checkFile(filePath) {
  const ext = path.extname(filePath);
  return LEGAL_FILES.includes(ext) && !filePath.includes('/node_modules/');
}

const a = {
  path: 'aa',
  dep: [
    {
      path: 'bb',
      dep: [],
    },
    {
      path: 'cc',
      dep: [
        {
          path: 'dd',
          dep: [],
        }
      ],
    },
  ]
}


// BFS 遍历对象
const BFSTravel = (root, parentPath) => {
  const queue = [root];

  while (queue.length) {
    const curNode = queue.shift();
    const { path = '', deps = [] } = curNode
    
    if( path === parentPath ) {
      return curNode;
    }
    let len = deps.length;
    let i = 0;
    while(i < len) {
      queue.push(deps[i]);
      i++;
    }
  }
  return false;
 
}



exports.default = {
  checkFile,
  BFSTravel
}
