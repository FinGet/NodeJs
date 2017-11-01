const {basename, extname, dirname} = require('path');

const filePath = '/user/local/bin/no.txt';

console.log(basename(filePath)); // no.txt

console.log(extname(filePath)); // .txt

console.log(dirname(filePath)); // /user/local/bin