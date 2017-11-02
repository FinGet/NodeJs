const fs = require('fs');

// fs.writeFile('./text.txt', 'This is a test!',{
//     encoding: 'utf8'
// }, err => {
//     if (err) throw err;
//     console.log('success')
// })

const content = Buffer.from('this is a test');
fs.writeFile('./text.txt', content, err=> {
    if (err) throw err;
    console.log('success');
})