const fs = require('fs');

fs.rename('./text.txt', 'text1.txt', err => {
    if (err) throw err;
    console.log('success');
})