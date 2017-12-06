var http = require('http');

var a = 100; // 这个语句就在服务器打开的时候，执行一次

var server = http.createServer((req, res) => {
    a++;
    res.end(a.toString());
    /**
     * 每次刷新 a 在上次刷新的基础上 +1
     * 100 101 102 103 104 ……
     */
});

server.listen(3000,'127.0.0.1');