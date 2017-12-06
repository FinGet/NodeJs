var express = require('express');
var app = express();

var a = 100;

app.get("/",function(req,res){
    //将数据添加进入数据库
    a++;
    res.send(a.toString());
    /**
     * 每次刷新 a 在上次刷新的基础上 +1
     * 100 101 102 103 104 ……
     */
});
app.listen(3000);