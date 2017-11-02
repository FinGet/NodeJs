const fs = require('fs');

fs.readdir('./', (err, files) => {
    if (err) throw err;
    console.log(files)
})
/*
[ '01_readfile.js',
  '02_writefile.js',
  '03_stat.js',
  '04_rename.js',
  '05_unlink.js',
  '06_readdir.js' ]
*/