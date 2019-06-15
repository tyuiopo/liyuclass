/*
	1.Node中的event没有默认行为和事件冒泡
	2.const EventEmitter = require('events');//返回的是一个类
	3.通常我们需要继承EventEmitter类来实现事件
	4.一个EventEmitter对象默认最大可以有10个监听,可以通过emitter.setMaxListeners(n)来设置最大监听数
	5.大多数 Node.js 核心对象都继承事件类
*/




const EventEmitter = require('events');//返回的是一个类
// console.log(EventEmitter);


/*
const emitter=new EventEmitter();
// console.log(emitter)

//绑定事件
emitter.on('test',()=>{
	console.log('running....')
})
//触发事件
emitter.emit('test')
*/



//通常我们需要继承EventEmitter类来实现事件
class MyEmitter extends EventEmitter{

}
const emitter=new MyEmitter();
// console.log(emitter)
//绑定事件
emitter.on('test',()=>{
	console.log('running...')
})
//触发事件
emitter.emit('test')