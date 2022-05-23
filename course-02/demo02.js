const { jscpd } = require('jscpd'); 
(async () => {
  const clones = await jscpd(['', '',  '-p', './demo01/src/**/*.js', '-k', '15', '-l', '5']);
  console.log(clones);
})();