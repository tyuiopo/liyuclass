/*
	定时器
	setTimeout()/clearTimeout()
	setInterval()/clearInterval()
	setImmediate()/clearImmediate() 立即执行
*/

/*
console.log(1);
setTimeout(()=>{
	console.log(2)
},200)
console.log(3)
*/


/*
console.log(1);
const timer=setInterval(()=>{
	console.log(2)
},200)
console.log(3)
clearInterval(timer)
*/

console.log(1);
setImmediate(()=>{
	console.log(2)
},200000)
console.log(3)