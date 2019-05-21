
/*
const stream=require('stream');
// console.log(stream)
console.log(stream.Writable);
*/

//自定义可写流
const {Writable} =require('stream');
// console.log({Writable})

class MyWrite extends Writable{
	_write(chunk, encoding, callback){
		console.log(chunk);//<Buffer 68 65 6c 6c 6f>
		// console.log(encoding);
		callback && callback();
	}
}

const writer=new MyWrite();
writer.write('hello','utf-8',()=>{
	console.log('good..')
})
writer.write('kuazhu')

writer.on('finish',()=>{
	console.log('finish....')
})

// console.log(writer)

writer.end();

