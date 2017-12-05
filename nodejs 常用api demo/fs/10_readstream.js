 const fs = require('fs');

 const rs = fs.createReadStream('./10_readstream.js')

 rs.pipe(process.stdout); // 输出到控制台