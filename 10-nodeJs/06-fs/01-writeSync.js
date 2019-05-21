//同步写文件

const fs = require('fs');
// console.log(fs)

/*
//1.打开文件
// const fd = fs.openSync('./01.txt','w')
const fd = fs.openSync('./01.txt','a')
// console.log(fd)

//写入数据
fs.writeSync(fd,'good')

//保存退出
fs.closeSync(fd)
*/

//复合
fs.writeFileSync('./01.txt','kuazhu',{flags:'w'})