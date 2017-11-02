const fs = require('fs');
// 异步
fs.readFile('./01_readfile.js','utf8',(err, data) => {
    if (err) throw err;
    console.log(data);
    /*
    <Buffer 63 6f 6e 73 74 20 66 73 20 3d 20 72 65 71 75 69 
    72 65 28 27 66 73 27 29 3b 0d 0a 0d 0a 66 73 
    2e 72 65 61 64 46 69 6c 65 28 27 2e 2f 30 31 5f 72 65 61 ... >
    */
    // console.log(data.toString());
})

// 同步
const data = fs.readFileSync('./01_readfile.js', 'utf8');
console.log(data);