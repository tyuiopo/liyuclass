
//自定义可读流
const {Readable}=require('stream');
// console.log(Readable)


/*
const rs=new Readable();
rs.on('data',(chunk)=>{
	console.log(chunk)
})//未实现_read（）方法
*/


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

reader.on('data',(chunk)=>{
	console.log(chunk.toString())
})
reader.on('end',()=>{
	console.log('end...')
})



