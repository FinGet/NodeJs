var express = require('express');
var app = express();

app.get('/ABB',function(req,res){
    res.send('不区分大小写！');
})

app.get(/^\/student\/([\d]{10})$/,function(req,res) {
    res.send('路由支持正则表达式' + req.params[0]);
})

app.get('/teacher/:id',function(req, res) {
    var id  = req.params.id,
        reg = /^[\d]{6}$/;
    if (reg.test(id)) {
        res.send('teacher:id,teacher’s id :' + req.params.id);
    } else {
        res.send('不够6位');
    }
    
})
app.listen(3000);