const EventEmitter = require('events');//返回的是一个类


//通常我们需要继承EventEmitter类来实现事件
class MyEmitter extends EventEmitter{

}
const emitter=new MyEmitter();
// console.log(emitter)

/*
//绑定事件
emitter.on('test',()=>{
	console.log('1::running...')
})

emitter.addListener('test',()=>{
	console.log('2::running....')
})

console.log(emitter.addListener==emitter.on)
//触发事件
emitter.emit('test')
*/

/*
emitter.on('test',()=>{
	console.log('1::running...')
})
emitter.emit('test');
emitter.emit('test');

emitter.once('test',()=>{//once事件只触发一次
	console.log('3::running...')
})
emitter.emit('test');
*/
emitter.setMaxListeners(11)
//一个EventEmitter对象默认最大可以有10个监听,可以通过emitter.setMaxListeners(n)来设置最大监听数
emitter.on('test',()=>{
	console.log('1::running...')
})
emitter.on('test',()=>{
	console.log('2::running...')
})
emitter.on('test',()=>{
	console.log('3::running...')
})
emitter.on('test',()=>{
	console.log('4::running...')
})
emitter.on('test',()=>{
	console.log('5::running...')
})
emitter.on('test',()=>{
	console.log('6::running...')
})
emitter.on('test',()=>{
	console.log('7::running...')
})
emitter.on('test',()=>{
	console.log('8::running...')
})
emitter.on('test',()=>{
	console.log('9::running...')
})
emitter.on('test',()=>{
	console.log('10::running...')
})
emitter.on('test',()=>{
	console.log('11::running...')
})
emitter.emit('test');