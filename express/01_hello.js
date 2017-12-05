var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello Express!');
});
app.get('/student/:xuehao', function (req, res) {
    res.send('学生学号：'+req.params.xuehao);
});
var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});