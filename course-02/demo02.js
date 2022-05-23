const { jscpd } = require('jscpd'); 

(async () => {
  // jscpd具体参数可通过命令 jscpd -h 查看
  await jscpd(['', '',  '-p', './demo01/src/**/*.js', '-k', '15', '-l', '5', '-r', 'html']);
})();