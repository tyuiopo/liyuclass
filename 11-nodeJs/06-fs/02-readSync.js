//同步读文件
const fs = require('fs');

/*
//打开文件
const fd = fs.openSync('./01.txt','r');

//读文件
const buf = Buffer.alloc(100)
console.log(buf);
fs.readSync(fd,buf,5,95,0);
console.log(buf);

//关闭文件
fs.closeSync(fd)
*/


//复合
const data = fs.readFileSync('./01.txt',{flags:'r'});
console.log(data)