const swig = require('swig');
const querystring = require('querystring');
const {getAll,add:addWish,remove} =  require('../Model/Wish.js');


class Wish{
	index(req,res,...args){
		getAll()
		.then(data=>{
			//用 swig模板分离数据
			let template = swig.compileFile(__dirname+'/../View/Wish/index.html');
			let html = template({
				data
			})
			res.setHeader('Content-Type',"text/html;charset=utf-8");
			res.end(html)
		})
		.catch(err=>{
			res.setHeader('Content-Type',"text/html;charset=utf-8");
			res.status=500;
			res.end('<h1>读取失败</h1>')
		})
	}
	add(req,res,...args){
		//获取添加的数据
		let body = '';
		req.on('data',(chunk)=>{
			body += chunk
		})
		req.on('end',()=>{
			// console.log(body)
			//解析(处理前端post请求数据 变后端对象)
			const obj =querystring.parse(body);
			addWish(obj)
			.then(data=>{
				let result = JSON.stringify({
						status:0,//代表成功
						data:data
				})
				res.end(result);
			})
			.catch(err=>{
				let result = JSON.stringify({
						status:10,//代表失败
						message:'获取失败'
				})
				res.end(result);
			})
		})
	}
	del(req,res,...args){
		remove(args[0])
		.then(data=>{
			let result = JSON.stringify({
					status:0,//代表成功
			})
			res.end(result);
		})
		.catch(err=>{
			let result = JSON.stringify({
					status:10,//代表失败
			})
			res.end(result);
		})
	}
}


module.exports = new Wish();