/*
 * @Author: FinGet 
 * @Date: 2017-10-27 14:37:11 
 * @Last Modified by: FinGet
 * @Last Modified time: 2017-10-27 14:49:16
 */
const fs = require('fs');

fs.readFile('./05_run.js', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
})
