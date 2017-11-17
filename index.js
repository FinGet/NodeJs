var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var querystring = require('querystring');

// 准备一个映射关系
var mime = {
	'.jpg': 'image/jpeg',
	'.jpeg': 'image/jpeg',
	'.png': 'image/png',
	'.html': 'text/html;charset=UTF-8',
	'.css': 'text/css',
	'.js': 'application/x-javascript'
}
http.createServer((req, res) => {
	// 用户读取什么
	var pathname = url.parse(req.url).pathname;
	// 得到拓展名
	var extname = path.extname(pathname);

	// 真的去读这个文件
	fs.readFile('./myweb/'+pathname, (err, data) => {
		if (err) {
			res.end("没有这个文件");
			return
		}
		// 检查是否属于我已知的mime类型
		if(mime.hasOwnProperty(extname)) {
			res.setHeader("content-type",mime[extname]);
		}
		res.end(data)
	})
}).listen(3000, '127.0.0.1');
console.log('server start at 3000 port');