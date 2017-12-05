var msg = 'this is a module'
var msg1 = 'this is a module1'
// exports.msg = msg // 正确
// module.exports.msg = msg // 正确
module.exports = { // 正确
    msg: msg,
    msg1 : msg1
}
/** 错误的赋值
 * exports = {
    msg: msg,
    msg1 : msg1
   }
 *
 */
