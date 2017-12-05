/**
 * 用node运行此文件
 * 打开localhost:8899可运行static文件夹中的静态页面（类似一个简易的Apache）
 */
var http = require("http");
var fs = require("fs");
var url = require("url");
var path = require("path");

// 准备一个映射关系
// var mime = {
//     '.jpg': 'image/jpeg',
//     '.jpeg': 'image/jpeg',
//     '.png': 'image/png',
//     '.html': 'text/html;charset=UTF-8',
//     '.css': 'text/css',
//     '.js': 'application/x-javascript'
// }
var mime = require('./mime.json')
// 创建服务器
var server = http.createServer(function (req, res) {

    // 得到地址
    var pathname = url.parse(req.url).pathname;
    // 得到拓展名
    var extname = path.extname(pathname);
    // 判断用户此时输入的地址是文件还是文件夹
    if(pathname.indexOf('.') == -1) {
        pathname += '/index.html';
    }
    var fileURL = path.normalize('./static' + pathname);
    fs.readFile(fileURL,function (err, data) {
        if(err) {
            // fs.readFile('./static/404.html',function (err, data) {
                res.writeHead(404,{"Content-Type":'text/html;charset=UTF8'});
                res.end('页面没有找到');
            // })
        }
        //res.writeHead(200,{"Content-Type":'text/html;charset=UTF8'});
        // 检查是否属于我已知的mime类型
        if(mime.hasOwnProperty(extname)) {
            res.writeHeader(200,{"content-type":mime[extname]});
        }
        res.end(data);
    })
})
server.listen(8899,'127.0.0.1')