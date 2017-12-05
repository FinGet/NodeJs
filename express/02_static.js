var express = require('express');
var app = express();

// express 一句话实现静态文件服务器
app.use(express.static('../demo/static'));

app.listen(3000);