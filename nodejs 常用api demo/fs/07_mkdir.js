const fs = require('fs');

fs.mkdir('testmkdir', err => {
    if (err) throw err;
    console.log('success');
})