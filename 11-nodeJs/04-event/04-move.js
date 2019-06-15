const EventEmitter=require('events');

class Myemitter extends EventEmitter{

}

const emitter=new Myemitter();

fn1=()=>{
	console.log('running...')
}

emitter.on('test',fn1)

//emitter.removeListener和emitter.off是同一个方法
// emitter.off('test',fn1);
emitter.removeListener('test',fn1)

console.log(emitter.removeListener==emitter.off)//true

emitter.emit('test');
