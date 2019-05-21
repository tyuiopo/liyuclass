

const fs = require('fs');

const ws = fs.createWriteStream('./ws.txt');//可写流

const rs = fs.createReadStream('./rs.txt');//可读流

/*
ws.on('open',()=>{
	console.log('ws open...')
})
ws.on('close',()=>{
	console.log('ws close...')
})
ws.on('finish',()=>{
	console.log('ws finish...')
})

ws.write('aabbcc');
ws.write('good');
ws.end()



rs.on('open',()=>{
	console.log('rs open...')
})
rs.on('close',()=>{
	console.log('rs close...')
})
rs.on('data',(chunk)=>{
	console.log(chunk)
});
rs.on('end',()=>{
	console.log('rs end...')
})
*/
rs.pipe(ws)