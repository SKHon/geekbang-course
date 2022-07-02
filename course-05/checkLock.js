const fs = require('fs');

const LOCK_FILE = ['package-lock.json', 'yarn.lock', 'pnpm-lock.yaml'];

var readDir = fs.readdirSync("./example");

const isHasLock = readDir.some(dir => LOCK_FILE.includes(dir));

console.log(isHasLock);

