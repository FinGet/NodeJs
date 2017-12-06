var express = require('express');
var app = express();

app.use("/admin",function(req,res){
    // GET 'http://www.example.com/admin/new'
    res.write(req.originalUrl + '\n'); // '/admin/new'
    res.write(req.baseUrl + '\n'); // '/admin'
    res.write(req.path + '\n'); // '/new'
    res.end('sucess');
    /** http://127.0.0.1:3000/admin/www/212
     *  /admin/www/212
        /admin
        /www/212
        sucess
     */
});
app.listen(3000);