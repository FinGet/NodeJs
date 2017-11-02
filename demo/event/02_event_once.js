const EventEmitter = require('events');

class CustomEvent extends EventEmitter{}

const ce = new CustomEvent();

// 只 执行一次
ce.once('test', ()=>{
    console.log('test event');
})

setInterval(()=>{
    ce.emit('test')
},500)