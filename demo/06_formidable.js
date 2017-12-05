/**
 * 配合form.html页面模拟一个post请求，从而理解nodejs formidable文件上传
 */
var http = require("http"),
    util = require('util'),
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
            res.writeHead(200, {'content-type': 'text/plain;charset=UTF8'});
            res.write('received upload:\n\n');
            res.end(util.inspect({fields: fields, files: files}));
            /**
             * received upload:

             { fields: { name: 'Fin', sex: '男', hobby: '打怪' },
               files:
                { file:
                   File {
                     domain: null,
                     _events: {},
                     _eventsCount: 0,
                     _maxListeners: undefined,
                     size: 53544,
                     path: 'upload\\upload_b517c34676b5cef14c287aaf892e8006',
                     name: 'FaceQ1503419073385.png',
                     type: 'image/png',
                     hash: null,
                     lastModifiedDate: 2017-12-05T07:36:39.867Z,
                     _writeStream: [Object] } } }
             */
        });

        return;
    }
})
server.listen(8080,'127.0.0.1');