const fs = require('fs');
const util = require('util')


/*
//复合
fs.readFile('./02.txt',{flags:'r'},(err,data)=>{
	if(err){
		console.log('err',err)
	}else{
		console.log(data)
	}
})
*/

const readFile = util.promisify(fs.readFile);

readFile('./02.txt',{flags:'r'})
.then(data=>{
	console.log(data)
})