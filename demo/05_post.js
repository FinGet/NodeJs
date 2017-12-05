/**
 * 配合form.html页面模拟一个post请求，从而理解nodejs post请求的参数获取
 */
var http = require("http");
var querystring = require('querystring');

// 创建服务器
var server = http.createServer(function (req, res) {
    if (req.url == '/dopost' && req.method.toLowerCase() == 'post') {
        var alldata = '';
        // 下面是post请求接收的公式
        // node为了追求极致，它是一个小段一个小段接收的
        req.addListener('data',function (chunk) {
            alldata += chunk;
            console.log(chunk); // <Buffer ……>
        });
        req.addListener('end', function () {
            // console.log(alldata.toString())
            var datastring = alldata.toString();
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end('SUCCESS');
            // 将datastring 转为一个对象
            var dataObj = querystring.parse(datastring);
            console.log(dataObj); // { name: 'Fin', sex: '男', hobby: [ '睡觉', '撸码', '打怪' ] }
        })
    }
})
server.listen(8080,'127.0.0.1')