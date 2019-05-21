const str='Good'

const fn = ()=>{
	console.log('fn...')
}

const obj={
	name:'Tom',
	age:18
}


/*
console.log(exports);
console.log(module.exports);
console.log(exports==module.exports)
*/

/*
//导出的始终是module.exports指向的对象
exports.str=str;
exports.fn=fn;
exports.obj=obj;
console.log(exports);
*/

/*
//可以在module.exports对象或者exports对象上添加属性来导出值
module.exports.str=str;
module.exports.fn=fn;
module.exports.obj=obj;
console.log('m05::',module.exports);
*/

/*
//module.exports对象可以赋值一个对象来导出值,如果module.exports被赋值
一个对象,则exports对象的值就不会被导出
	1.如果要导出一个对象,只能使用module.exports对象,此时exports对象的值就不会被导出
	2.如果要添加属性来导出值,可以使用module.exports对象或者exports对象
module.exports={
	str,
	fn,
	obj
}
exports.arr=[11,22,33,44];
console.log(module.exports===exports);
*/

module.exports={
	str,
	fn,
	obj
}
module.exports.arr=[11,22,33,44];
console.log(module.exports===exports);