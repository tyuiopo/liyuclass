//异步读取文件
const fs = require('fs');


/*
//打开文件
fs.open('./02.txt','r',(err,fd)=>{
	if(err){
		console.log('open err',err)
	}else{
		//读取文件
		const buf = Buffer.alloc(100)
		fs.read(fd,buf,2,98,0,(err)=>{
			if(err){
				console.log('read err',err)
			}else{
				console.log('read success');
				console.log(buf);
			}
			//关闭文件
			fs.close(fd,(err)=>{
				if(err){
					console.log('close err')
				}else{
					console.log('close success')
				}
			})
		})
	}
})
*/
//复合
fs.readFile('./02.txt',{flags:'r'},(err,data)=>{
	if(err){
		console.log('err',err)
	}else{
		console.log(data)
	}
})

console.log('aaaaaaaaa');