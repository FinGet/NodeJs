/*
buf.length
buf.toString()
buf.fill()
buf.equals()
buf.indexOf()
buf.copy()
*/

const buf = Buffer.from('this is a test');
console.log(buf.length); // 14 加上空格

const buf1 = Buffer.alloc(10);
// buf1.length = 10

console.log(buf.toString('base64')); //dGhpcyBpcyBhIHRlc3Q=

const buf2 = Buffer.allocUnsafe(10);
console.log(buf2);

// buf.fill(value[, offset[, end]][, encoding])
/**
 *  value <string> | <Buffer> | <integer> 用来填充 buf 的值。
    offset <integer> 开始填充 buf 前要跳过的字节数。默认: 0。
    end <integer> 结束填充 buf 的位置（不包含）。默认: buf.length。
    encoding <string> 如果 value 是一个字符串，则这是它的字符编码。默认: 'utf8'。
    返回: <Buffer> buf 的引用。
 */
console.log(buf2.fill(10, 2, 6)); // <Buffer f0 6b 0a 0a 0a 0a 00 00 80 6c>

const buf3 = Buffer.from('test');
const buf4 = Buffer.from('test1');
//如果 buf 与 otherBuffer 具有完全相同的字节，则返回 true，否则返回 false。
console.log(buf3.equals(buf4)); // false