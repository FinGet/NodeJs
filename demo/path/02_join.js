// path.join() 方法使用平台特定的分隔符把全部给定的 path 片段连接到一起，并规范化生成的路径。
const {join} = require('path');

console.log(join('/user','local','ssw'));
// \user\local\ssw