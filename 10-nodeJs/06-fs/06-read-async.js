const fs = require('fs');
const util = require('util')

const readFile = util.promisify(fs.readFile);

async function callreadFile(){
	let data = await readFile('./02.txt',{flags:'r'})
	// console.log(data)
	return data;
}
callreadFile()
.then(data=>{
	console.log(data)
})