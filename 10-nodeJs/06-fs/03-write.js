//异步写文件
const fs = require('fs');


/*
//打开文件
fs.open('./02.txt','a',(err,fd)=>{
	if(err){
		console.log('open err',err)
	}else{
		//写文件
		fs.write(fd,'kuazhu',(err)=>{
			if(err){
				console.log('write err',err)
			}else{
				console.log('write success')
			}
			//退出保存
			fs.close(fd,(err)=>{
				if(err){
					console.log('close',err)
				}else{
					console.log('close success')
				}
			})
		})
	}
});
*/

//复合
fs.writeFile('./02.txt','hello',{flags:'a'},(err)=>{
	if(err){
		console.log('err')
	}else{
		console.log('success')
	}
})

console.log('aaaaaaaaa');