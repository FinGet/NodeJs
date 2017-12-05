console.log(Buffer.alloc(10));
// <Buffer 00 00 00 00 00 00 00 00 00 00>

console.log(Buffer.alloc(5, 1));
// <Buffer 01 01 01 01 01>

console.log(Buffer.allocUnsafe(5, 1));
// <Buffer e8 dc 08 26 bb>

console.log(Buffer.from([1, 2, 3]));
// <Buffer 01 02 03>

console.log(Buffer.from('test'));
// <Buffer 74 65 73 74>

console.log(Buffer.from('test', 'base64'));
// <Buffer b5 eb 2d>