var http = require("http");

// 创建服务器
var server = http.createServer(function (req, res) {
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('SUCCESS');
})
server.listen(8899,'127.0.0.1')