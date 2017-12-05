// setImmediate(() => {
//     console.log('setImmediate');
// })
// process.nextTick(() => {
//     console.log('nextTick');
// })
/**
 * nextTick
 * setImmediate
 */


setImmediate(() => {
    console.log('setImmediate');
})
setTimeout(function() {
    console.log('setTimeout');
}, 0);
process.nextTick(() => {
    console.log('nextTick');
})
/**
 * nextTick
 * setTimeout
 * setImmediate
 */