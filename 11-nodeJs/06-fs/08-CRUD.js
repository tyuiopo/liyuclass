//crud = create(增加)  read(读取)  updata(更新)  delete(删除)

const fs = require('fs');
const util =require('util')

const filePath = './data.json'
const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)

/*
//增加
const add = (name,callback)=>{
	//1.获取原有数据
	fs.readFile(filePath,(err,data)=>{
		if(err){
			callback(err);
		}else{
			//解析
			let arr = JSON.parse(data);
			// console.log(arr);
			//2.添加数据到原有数据中
			arr.push({
				id:Date.now().toString()+parseInt(Math.random()*10000)
				.toString().padStart(4,'0'),
				name:name
			})
			let strArr = JSON.stringify(arr)
			//3.保存
			fs.writeFile(filePath,strArr,(err)=>{
				if(err){
					callback(err);
				}else{
					callback(null,arr);
				}
			})
		}
	})	
}
add('Tom',(err,data)=>{
	if(err){
		console.log('err',err)
	}else{
		console.log(data)
	}
});
*/

//增加
async function add(name){
	//获取原有文件
	let data = await readFile(filePath);
	//解析
	let arr = JSON.parse(data);
	arr.push({
				id:Date.now().toString()+parseInt(Math.random()*10000)
				.toString().padStart(4,'0'),
				name:name
			})
	//解析
	let strArr = JSON.stringify(arr);
	//保存
	await writeFile(filePath,strArr);

	return arr;
}

//读取(查找)
async function get(id){
	//1.获取原有数据
	let data = await readFile(filePath);
	//解析
	let arr = JSON.parse(data);
	//2.查找对应的id对象
	return arr.find(val=>{
		return val['id']==id;
	})
}

//更新(修改)
async function updata(id,name){
	//1.获取原有数据
	let data = await readFile(filePath);
	//解析
	let arr = JSON.parse(data);
	//2.查找对应的id对象
	let obj = arr.find(val=>{
		return val['id']==id;
	})
	if(obj){
		obj.name = name;
		//解析
		let strArr = JSON.stringify(arr);
		//保存
		await writeFile(filePath,strArr);
		return arr;
	}else{
		return obj;
	}
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


/*
add('Make')
.then(data=>{
	console.log(data)
})
.catch(err=>{
	console.log('add err',err)
})
*/


/*
get('15535027475039851')
.then(data=>{
	console.log(data)
})
.catch(err=>{
	console.log('get err',err)
})
*/

/*
updata('15535027902225195','jack')
.then(data=>{
	console.log(data)
})
.catch(err=>{
	console.log('updata err',err)
})
*/

remove('15535027475039851')
.then(data=>{
	console.log(data)
})
.catch(err=>{
	console.log('delete err',err)
})
