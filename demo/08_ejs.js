const ejs = require('ejs');

var string = 'this is a iphone<%= a %>',
    data = {
        a : 'X'
    };

var html = ejs.render(string, data);

console.log(html)