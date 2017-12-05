const {sep, delimiter, win32, posix} = require('path')

/**
 * path.sep
 * 提供了平台特定的路径片段分隔符：
Windows 上是 \
POSIX 上是 /
 */
console.log('sep:', sep); // \
console.log('posix sep:', posix.sep); // /

console.log('PATH',process.env.PATH)

/**
 * path.delimiter
 * 提供平台特定的路径分隔符：
Windows 上是 ;
POSIX 上是 :
 */
console.log('delimiter:',delimiter); // ;
console.log('posix delimiter:',posix.delimiter); // :