const EventEmitter = require('events');


class MyEmitter extends EventEmitter{

}

const emitter=new MyEmitter();

/*
emitter.on('test',(event,arg1,arg2)=>{
	console.log(event,arg1,arg2)//hello good undefined
	//和浏览器端的事件不同,监听函数的第一个参数就是触发时传入的参数而不是event对象
})
emitter.emit('test','hello','good')
*/

/*
emitter.on('test',(arg1,arg2)=>{
	console.log(arg1,arg2)//hello good
})
emitter.emit('test','hello','good')
*/

const arr=['hello','good']
emitter.on('test',(arg1,arg2)=>{
	console.log(arg1,arg2)//hello good
})
emitter.emit('test',...arr)
