/**
 * 配合form.html页面模拟一个post请求，从而理解nodejs formidable文件上传
 */
var http = require("http"),
    util = require('util'),
    path = require('path'),
    fs   = require('fs'),
    formidable = require('formidable');

// 创建服务器
var server = http.createServer(function (req, res) {
    if (req.url == '/dopost' && req.method.toLowerCase() == 'post') {
        // Creates a new incoming form.
        var form = new formidable.IncomingForm();
        // 设置文件上传路径
        form.uploadDir = "./upload";

        // 执行里面的回调函数的时候，表单已经全部接收完毕
        // 所有的文本域、单选框、都在fields存放
        // 所有的文件域都在files存放
        form.parse(req, function(err, fields, files) {
            if(err) {
                throw err;
            }
            // console.log(files.file.name)
            var extname = path.extname(files.file.name),
                oldpath = __dirname + '/' + files.file.path,
                newpath = __dirname + '/upload/' + parseInt(Math.random()*1000) + extname;

            // 改名
            fs.rename(oldpath,newpath,function (err) {
                if (err) {
                    throw Error('rename failed');
                }
                res.writeHead(200, {'content-type': 'text/plain;charset=UTF8'});
                res.write('received upload:\n\n');
                res.end(util.inspect({fields: fields, files: files}));
            })
        });
    }
})
server.listen(8080,'127.0.0.1');