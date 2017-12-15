var express = require('express');
var app = express();
var db = require('./model/db');

app.get('/',(req, res) => {
   db.insertOne('student',{
       name:'小刚',
       age: 20
   }, function (err, result) {
       if (err) {
           console.log('插入失败');
           return;
       }
       console.log('成功!');
       res.send('success');
   })
})

app.get('/du', function (req, res) {
    db.find('student',{},function (err, result) {
        if (err) {
            return;
        }
        console.log(result);
        res.send(result);
    })
})

app.listen(3000);