const http = require('http');
const url = require('url');
const path= require('path');
const fs =require('fs');


const mime = require('./mime.json');


const server = http.createServer((req,res)=>{
	// console.log('url=>',req.url)
	let reqUrl = url.parse(req.url,true);
	let pathname = reqUrl.pathname;
	/*
		约定：
			1.请求以/static/开始的路径认为是静态资源
			2.对于路由请求的约定：/Controller/action/arg1/arg2....
								/Wish/add
								/Wish/del/1235
								/Wish/index
	*/
	if(pathname.startsWith('/static/')){//静态资源的处理
		//获取请求目标的绝对路径
		let filePath = path.normalize(__dirname+pathname);
		// console.log(filePath)

		//获取扩展名
		let extname = path.extname(filePath);
		// console.log(extname);

		//读文件
		fs.readFile(filePath,(err,data)=>{
			if(err){
				res.setHeader('Content-Type',"text/html;charset=utf-8");
				res.end('出错了');
			}else{
				res.setHeader('Content-Type',mime[extname]+";charset=utf-8");
				res.end(data);
			}
		})	
	}else{//路由的处理
		let paths=pathname.split('/');
		let contorller = paths[1] || 'Wish';
		let action = paths[2] || 'index';
		let args = paths[3];

		try{
			let mode = require('./Contorller/'+contorller);
			mode[action] && mode[action].apply(null,[req,res].concat(args));
		}
		catch(err){
			console.log('err::',err);
			res.setHeader('Content-Type',"text/html;charset=utf-8");
			res.end('<h1>请求失败</h1>');			
		}
	}
});

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at http://127.0.0.1:3000')
})