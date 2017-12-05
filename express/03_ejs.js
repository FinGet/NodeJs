var express = require('express'),
    ejs = require('ejs');

var app = express();

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