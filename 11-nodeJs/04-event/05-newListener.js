const EventEmitter=require('events');

class Myemitter extends EventEmitter{

}

const emitter=new Myemitter();

//'newListener'事件,当有新的监听被添加是触发,回调函数接受两个参数分别是添加的事件名称和函数的
emitter.on('newListener',(eventName,cb)=>{
	console.log('newListener...');
	console.log(eventName);
	// console.log(cb)
	cb();
})

emitter.on('test1',()=>{
	console.log('1::running....')
})
emitter.on('test2',()=>{
	console.log('2::running....')
})
