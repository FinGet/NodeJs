// 删除
const fs = require('fs');

fs.unlink('./text1.txt',err => {
    if (err) throw err;
    console.log('success');
})