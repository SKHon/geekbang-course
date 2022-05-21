
const { ESLint } = require("eslint");

(async function main() {
  // 1. 创建实例
  const eslint = new ESLint({
    cwd: __dirname,
    baseConfig: {
      parser: '@typescript-eslint/parser',
      rules: {
        'complexity': [
          'error',
          { max: 0 } // 为了查看圈复杂度，我们这里先定义大于0的都统计
        ]
      }
    }
  });

  // 2. 检测文件.
  const results = await eslint.lintFiles(["./demo01.js"]); // 这列demo01.js内容为未重构的shopping函数

  console.log(results[0].messages);
})().catch((error) => {
  process.exitCode = 1;
  console.error(error);
});