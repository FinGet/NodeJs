const ejs = require('ejs'),
      http = require('http'),
      fs  = require('fs');


var server = http.createServer(function (req, res) {
    fs.readFile('./views/index.ejs',function (err, data) {
        // 绑定模板
        var template = data.toString(),
            dictionary = {
                a:'X',
                news : [
                    {title:'first news',time:'2017-12-03'},
                    {title:'second news',time:'2017-12-03'},
                    {title:'thirld news',time:'2017-12-03'}
                ]
            };

        // 显示
        var html = ejs.render(template, dictionary);
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(html);
    })
})
server.listen(8899,'127.0.0.1')