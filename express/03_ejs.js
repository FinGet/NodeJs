var express = require('express'),
    ejs = require('ejs');

var app = express();

// app.set("views", 'a'); // 可以设置自己想存放ejs文件的文件夹a
app.set('view engine','ejs');

app.get('/', function (req,res) {
    res.render('index',{
        a:'X',
        news : [
            {title:'first news',time:'2017-12-03'},
            {title:'second news',time:'2017-12-03'},
            {title:'thirld news',time:'2017-12-03'}
        ]
    })
})

app.listen(3000);