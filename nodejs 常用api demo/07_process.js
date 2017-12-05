/*
    argv
    argv0
    execArgv
    execPath
*/

const {argv, argv0, execArgv, execPath} = process;
argv.forEach(item => {
    console.log(item);
    /*node .\demo\07_process.js --tset a=1
    D:\node\node.exe
    C:\Users\admin\Desktop\NodeJs\demo\07_process.js
    --tset 
    a=1
    */
});
console.log(argv0); // D:\node\node.exe

console.log(execArgv); 
/**
 * node --inspect .\demo\07_process.js
 * ['--inspect]
 */

 console.log(execPath); // D:\node\node.exe