// 封装对数据库的常用操作
var MongoClient = require('mongodb').MongoClient;

// 连接数据库
function _connectDB(callback) {
    var url = 'mongodb://localhost:27017/testMongo';

    MongoClient.connect(url, (err, db) => {
        console.log('连接成功');
        callback(err, db);
    });
}

/**
 * 插入一条数据
 * @param collectionName 集合名称
 * @param json 数据
 * @param callback 回调函数
 */
exports.insertOne = function (collectionName, json, callback) {
    _connectDB(function (err, db) {
        if (err) {
            callback(err,null);
            return;
        }
        db.collection(collectionName).insertOne(json, function (err, result) {
            callback(err, result);
            db.close();
        })
    })
}

/**
 * 查找数据
 * @param collectionName 集合名
 * @param json 数据
 * @param callback 回调函数
 */
exports.find = function (collectionName, json, callback) {
    var result = [];
    if (arguments.length != 3) {
        callback('find函数接受三个参数',null);
    }
    _connectDB(function (err, db) {
        var cursor = db.collection(collectionName).find(json);
        cursor.each(function (err, doc) {
            if(err) {
                callback(err,null);
                return;
            }
            if (doc != null) {
                result.push(doc);
            } else {
                // 遍历结束，没有更多文档
                callback(null, result);
            }
        })
    })
}