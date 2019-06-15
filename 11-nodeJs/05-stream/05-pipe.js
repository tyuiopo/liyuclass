
//自定义可读流(模拟读取大数据)
const {Readable}=require('stream');
// console.log(Readable)

class MyReader extends Readable{
	constructor(){
		super();
		this.index=0
	}
	_read(){//会推送数据到读取队列
		this.index++;
		if(this.index>5){
			this.push(null)
		}else{
			const str=this.index+''
			this.push(str)
		}
	}
}

const reader= new MyReader();

/*
let body='';

reader.on('data',(chunk)=>{
	console.log(chunk.toString());
	body += chunk;
})
reader.on('end',()=>{
	console.log(body)
	console.log('end...')
})
*/


//readable.pipe(writable) 将可读流的数据传递给可写流
reader.pipe(process.stdout)
