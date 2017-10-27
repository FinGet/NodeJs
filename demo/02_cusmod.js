/*
 * @Author: FinGet 
 * @Date: 2017-10-27 14:17:26 
 * @Last Modified by: FinGet
 * @Last Modified time: 2017-10-27 14:35:50
 */
console.log("this is a module");

const testVar = 100;
function test () {
    console.log(testVar)
}
// 对外输出
module.exports.testVar = testVar;
module.exports.testFn = test