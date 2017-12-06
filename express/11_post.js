var bodyParser = require('body-parser');
var express = require('express');

var app = express();

//设置模板引擎
app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("form");
});
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// app.use(multer()); // for parsing multipart/form-data

app.post('/', function (req, res) {
    console.log(req.body);
    res.json(req.body);
})
app.listen(3000);