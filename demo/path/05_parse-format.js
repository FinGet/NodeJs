const {parse, format} = require('path');

const filePath =  '/user/local/bin/no.txt';

console.log(parse(filePath));
/**
 * { root: '/',
  dir: '/user/local/bin',
  base: 'no.txt',
  ext: '.txt',
  name: 'no' }
 */

console.log(format(parse(filePath)));
// /user/local/bin\no.txt