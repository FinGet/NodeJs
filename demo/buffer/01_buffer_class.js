/**
 * Buffer.byteLength
 * Buffer.isBuffer()
 * Buffer.concat()
 */

 console.log(Buffer.byteLength('test')); // 4
 console.log(Buffer.byteLength('中文')); // 6
 
 console.log(Buffer.isBuffer({})); // false
 console.log(Buffer.isBuffer(Buffer.from([1,2,3]))); // true

 const buf1 = Buffer.from('this');
 const buf2 = Buffer.from('this1');
 const buf3 = Buffer.from('this2');
 const buf4 = Buffer.from('this3');
 const buf = Buffer.concat([buf1,buf2,buf3,buf4]);
 console.log(buf); // <Buffer 74 68 69 73 74 68 69 73 31 74 68 69 73 32 74 68 69 73 33>
 console.log(buf.toString()); // thisthis1this2this3