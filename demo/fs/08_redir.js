const fs = require('fs');
// 移除文件夹
fs.rmdir('testmkdir', err => {
    if (err) throw err;
    console.log('success');
})