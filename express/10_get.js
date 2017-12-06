var express = require('express');

var app = express();

app.get('/',(req, res) => {
    console.log(req.query);
    /**
     * URL : http://127.0.0.1:3000/?id=5&sex=nan&sex=nv
     * {
     *      id: '5',
     *      sex: ['nan','nv']
     * }
     */
    res.end('success');
});

app.listen(3000);