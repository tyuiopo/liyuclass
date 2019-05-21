/*
	process（进程）
	process 和 global.process是同一个对象
	process.argv 属性返回一个数组，其中包含当启动 Node.js 进程时传入的命令行参数
	process.env 属性返回包含用户环境的对象
	process.pid 属性返回进程的PID。
	process.nextTick(callback) 方法将 callback 添加到下一个时间点的队列。
	一旦当轮的事件循环全部完成，则调用下一个时间点的队列中的所有回调。
*/

/*
console.log(process);
console.log(global.process);
console.log(global.process==process);
*/

// console.log(process.argv)
/*
process.argv 属性返回一个数组，其中包含当启动 Node.js 进程时传入的命令行参数
[ 'C:\\Program Files\\nodejs\\node.exe',
  'E:\\liyuclass\\10-nodeJs\\03-global\\process.js' ]
*/

// console.log(process.env);
//process.env 属性返回包含用户环境的对象

// console.log(process.pid)
//process.pid 属性返回进程的PID。



console.log(1)
process.nextTick(()=>{
	console.log(2)
})
console.log(3)

//process.nextTick(callback) 方法将 callback 添加到下一个时间点的队列。一旦当轮的事件循环全部完成，则调用下一个时间点的队列中的所有回调。