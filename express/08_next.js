var express = require('express');
var app = express();

app.get("/",function(req,res,next){
    console.log(1);
    res.send('success1');
    next(); // 不加这个语句,下面的事件不会触发  但是这里send()之后，下面就不能再send()否则会报错
});

app.get("/",function(req,res){
    console.log(2);
    res.send("success2");
});
app.listen(3000);