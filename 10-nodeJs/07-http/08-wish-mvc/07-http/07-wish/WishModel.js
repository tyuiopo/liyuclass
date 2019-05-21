//crud = create(增加)  read(读取)  updata(更新)  delete(删除)

const fs = require('fs');
const util =require('util');

const filePath = './data/wish.json';
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const arrColor = ['#f21','#a36','#d67','#694','#123']

const getRandom = (min,max) =>{	
	return Math.round(min + (max-min)*Math.random());
}

//增加
async function add(options){
	//获取原有文件
	let data = await readFile(filePath);
	//解析
	let arr = JSON.parse(data);
	options.id = Date.now().toString()+parseInt(Math.random()*10000).toString().padStart(4,'0');
	options.color = arrColor[getRandom(0,arrColor.length-1)]
	arr.push(options)
	//解析
	let strArr = JSON.stringify(arr);
	//保存
	await writeFile(filePath,strArr);

	return options;
}

//读取(查找)
async function getAll(){
	//1.获取原有数据
	let data = await readFile(filePath);
	//解析
	let arr = JSON.parse(data);
	return arr;
}

//删除
async function remove(id){
	//1.获取原有数据
	let data = await readFile(filePath);
	//解析
	let arr = JSON.parse(data);
	//找不是对应id的数据
	let newArr = arr.filter(val=>{
		return val['id'] != id;
	})
	// console.log(newArr);
	let strArr = JSON.stringify(newArr);
	//保存
	await writeFile(filePath,strArr);
	return newArr;
}

module.exports = {
	add,
	getAll,
	remove
}