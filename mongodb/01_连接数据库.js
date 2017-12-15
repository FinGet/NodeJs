var express = require('express');
var app = express();

// nodejs原生操作mongodb
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
/**
 * assert.equal(null, err); // 比较err是否为null，如果是则会return
 * 类似于：
 *  if(err) {
 *      return ;
 *  }
 */

app.get('/',(req, res) => {
    // url是数据库地址 / 假如数据库不存在，则会自动创建
    var url = 'mongodb://localhost:27017/testMongo';

    MongoClient.connect(url, (err, db) => {
        // 回调函数表示连接成功做的事，db参数就是数据库实体
        if (err) {
            console.log('数据库连接失败');
            return;
        }
        console.log('连接成功');

        // 选择一个集合 插入数据   "mongodb": "^2.2.33" 不然会报错
        db.collection('student').insertOne({
            'name' :'Bios',
            'age': parseInt(Math.random() * 100)
        }, (err, result) => {
        // 插入之后做的事件， result表示插入结果
            console.log(result);
            res.send('连接成功！');
            db.close();
        });
    })
})

app.listen(3000);