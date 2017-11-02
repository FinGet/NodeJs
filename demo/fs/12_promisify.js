// 回调地狱
/*
    () => {
        () => {
            () => {

            }
        }
    }
*/
const fs = require('fs');
const promisify = require('util').promisify;
const read = promisify(fs.readFile);

read('./12_promisify.js').then(data => {
    console.log(data);
}).catch(ex => {
    console.log(ex);
})