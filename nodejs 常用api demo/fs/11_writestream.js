 const fs = require('fs');

 const ws = fs.createWriteStream('./text.txt');

 const timer = setInterval(() => {
    const num = parseInt(Math.random() * 10);
    if (num < 7) {
        ws.write(num + ''); // 要将数字转出字符串或者buffer对象
    } else {
        clearInterval(timer)
        ws.end()
    }
 }, 200);

 ws.on('finish', () => {
     console.log('end');
 });
