# Node.js 从零开始

nodejs

---
## Node.js是什么
	Node.js is a JavaScript runtime built on Chrome's V8
	Node.js uses an event-driven, non-blocking I/O model（事件驱动，非阻塞I/O(input/output)）
	- 阻塞：I/O 时进程休眠等待I/O完成后进行下一步
	- 非阻塞：I/O 时函数立即返回，进程不等待I/O完成
## Node.js的特点
1. 单线程 （single thread）

        在Java、PHP或者.net等服务器端语言中，会为每一个客户端连接创建一个新的线程。而每个线程需要耗费大约2MB内存。也就是说，理论上，一个8GB内存的服务器可以同时连接的最大用户数为4000个左右。要让Web应用程序支持更多的用户，就需要增加服务器的数量，而Web应用程序的硬件成本当然就上升了。
        Node.js不为每个客户连接创建一个新的线程，而仅仅使用一个线程。当有用户连接了，就触发一个内部事件，通过非阻塞I/O、事件驱动机制，让Node.js程序宏观上也是并行的。使用Node.js，一个8GB内存的服务器，可以同时处理超过4万用户的连接。
        另外，单线程的带来的好处，还有操作系统完全不再有线程创建、销毁的时间开销。
        坏处，就是一个用户造成了线程的崩溃，整个服务都崩溃了，其他人也崩溃了。
2. 非阻塞I/O （Non-blocking I/O）

    	例如，当在访问数据库取得数据的时候，需要一段时间。在传统的单线程处理机制中，在执行了访问数据库代码之后，整个线程都将暂停下来，等待数据库返回结果，才能执行后面的代码。也就是说，I/O阻塞了代码的执行，极大地降低了程序的执行效率。
		由于Node.js中采用了非阻塞型I/O机制，因此在执行了访问数据库的代码之后，将立即转而执行其后面的代码，把数据库返回结果的处理代码放在回调函数中，从而提高了程序的执行效率。
		当某个I/O执行完毕时，将以事件的形式通知执行I/O操作的线程，线程执行这个事件的回调函数。为了处理异步I/O，线程必须有事件循环，不断的检查有没有未处理的事件，依次予以处理。
		阻塞模式下，一个线程只能处理一项任务，要想提高吞吐量必须通过多线程。而非阻塞模式下，一个线程永远在执行计算操作，这个线程的CPU核心利用率永远是100%。所以，这是一种特别有哲理的解决方案：与其人多，但是好多人闲着；还不如一个人玩命，往死里干活儿。
3. 事件驱动 (Event Driven)

    	在Node中，客户端请求建立连接，提交数据等行为，会触发相应的事件。在Node中，在一个时刻，只能执行一个事件回调函数，但是在执行一个事件回调函数的中途，可以转而处理其他事件（比如，又有新用户连接了），然后返回继续执行原事件的回调函数，这种处理机制，称为“事件环”机制。
		Node.js底层是C++（V8也是C++写的）。底层代码中，近半数都用于事件队列、回调函数队列的构建。用事件驱动来完成服务器的任务调度，这是鬼才才能想到的。针尖上的舞蹈，用一个线程，担负起了处理非常多的任务的使命。
> CPU密集： 压缩、解压、加密、解密
> I/O密集： 文件操作、网络操作、数据库

## 高并发应对之道
	- 增加机器数
	- 增加每台机器的CPU数 —— 多核
## 进程与线程
- 进程：是计算机中的程序关于某数据集合上的一次运行活动，是系统进行资源分配的调度的基本单位。
> 例：打开音乐播放器，这个播放器就被加载到内存中执行，这个执行中的程序就是进程。
- 线程：进程内一个相对独立的、可调度的执行单位,与同属一个进程的线程共享进程的资源
- 多线程：启动一个进程，在一个进程内启动多个线程，这样，多个线程也可以一起执行多个任务
## Node.js的单线程
- 单线程只是针对主进程，I/O操作系统底层多线程调度
- 单线程并不是单进程（cpu有几个核就启动几个进程，不会浪费cpu的能力）
## 常用场景
- Web Server
- 本地代码构建
- 实用工具开发
## Node.js环境
+ CommonJs (nodejs模块规范)
> - 每个文件是一个模块，有自己的作用域
> - 在模块内部module变量代表模块本身
> - module.exports属性代表模块对外接口
+ global (全局对象，没有window对象)
+ process (进程)
## require 规则
- `/` 表示绝对路径，`./`表示相对于当前文件的
- 支持 `js`、`json`、`node`拓展名，不写依次尝试
- 不写路径则认为是`build-in`模块或者各级`node_modules`内的第三方模块
## require 特性
- module 被加载的时候执行，加载后缓存
- 一旦出现某个模块被循环加载，就只输出已经执行的部分，还未执行的部分不会输出
## exports/module.exports
>Nodejs中，一个javascript文件中定义的变量、函数，都只在这个文件内部有效。
>当需要从此js文件外部引用这些变量、函数时，必须使用exports对象进行暴露。使用者要用require()命令引用这个js文件

exports是module.exports的引用，它可以添加属性，但是不能直接赋值，直接赋值exports与module.exports就没有了引用关系
> exports只是对module.exports的一个全局引用，最初被定义为一个可以添加属性的空对象。所以
> exports.xxx只是module.exports.xxx的简写
```
exports.test =100; // 等同于 module.exports.test = 100

// 不能这样赋值
exports = {
	a:1,
	b:2,
	test:100
}
```
## global
- CommonJS
- Buffer、process、console
- timer

----------

# Express 框架

>Express框架是后台的Node框架，所以和jQuery、zepto、yui、bootstrap都不一个东西。

[http://expressjs.com/](http://expressjs.com/ "Express 英文网")Express 英文网

[http://www.expressjs.com.cn/](http://www.expressjs.com.cn/ "Express 中文网")Express 中文网

原生Node开发，会发现有很多问题。比如：
- 呈递静态页面很不方便，需要处理每个HTTP请求，还要考虑304问题
- 路由处理代码不直观清晰，需要写很多正则表达式和字符串函数
- 不能集中精力写业务，要考虑很多其他的东西

>更多代码演示 查看express文件夹的详细demo

----------

# Mongodb

- 安装mongodb
>进入mongodb官网直接下载与自己系统对应的安装包，一直下一步
- 配置环境变量
>在环境变量path后加上C:\Program Files\MongoDB\Server\3.4\bin

![](https://i.imgur.com/9wQK9yV.png)
- 启动数据库
>`mongod --dbpath c:/Mongodb/data` (任意路径)
- 命令行，使用mongodb
>`mongo`

![](https://i.imgur.com/5RDzu2B.png)

### 常用命令
- `show dbs` // 查看数据库
- `use  集合名` // 使用数据库(如果不存在这个集合则会新建一个)
 ##### 插入一条数据 `insert`
![插入数据](https://i.imgur.com/Pi7yv1c.png)
- `show collections`查看当前数据库中的所有集合
 ##### 查找数据
- `db.xxxx.find()` 查找某一集合下所有数据`db.student.find()`
![查找数据](https://i.imgur.com/zTbIwct.png)
- `db.student.find({'name':'xiaoming'})`查找`name==xiaoming`的数据
- `db.student.find({"score.shuxue":70})` // 精准匹配
- `db.student.find({"score.shuxue":70 , "age":12})` // 多条件查询 与
- `db.student.find({"score.yuwen":{$gt:50}})` // 大于条件
- `db.student.find({$or:[{"age":9},{"age":11}]})` // 或
 ##### 修改数据
- `db.student.update({"score.shuxue":70},{$set:{"age":33}})` // 查找数学成绩是70，把年龄更改为33岁
- `db.student.update({"sex":"男"},{$set:{"age":33}},{multi: true})` // 更改所有匹配项目
- `db.student.update({"name":"小明"},{"name":"大明","age":16})`
 ##### 删除数据
- `db.dropDatabase()` //删除数据库
- `db.collection.drop() ` // 删除集合
- `db.restaurants.remove( { "borough": "Queens" }, { justOne: true } )` // `{ justOne: true }`只删一个 
 ##### 导入数据
>`mongoimport --db test --collection restaurants --drop --file primer-dataset.json`

- `--db tset` 想往哪个数据库里导入
- `--collection restaurants` 想往哪个数据库导入
- `--drop` 把集合清空
- `--file primer-dataset.json` 哪个文件

