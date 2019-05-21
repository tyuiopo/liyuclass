const http = require('http');
const fs = require('fs')


const server = http.createServer((req,res)=>{
	console.log(req.url);
	const filePath = req.url;
	if(filePath == '/index.html'){
		//读取 ./index.html文件
		fs.readFile('./index.html',(err,data)=>{
			if(err){
				res.setHeader('Content-Type',"text/html;charset=utf-8");
				res.statusCode = 500;
				res.end('<h1>出错了</h1>');
			}else{
				res.setHeader('Content-Type',"text/html;charset=utf-8");
				res.end(data);				
			}
		})
	}else if(filePath == '/list.html'){
		//读取 ./list.html文件
		fs.readFile('./list.html',(err,data)=>{
			if(err){
				res.setHeader('Content-Type',"text/html;charset=utf-8");
				res.statusCode = 500;
				res.end('<h1>出错了</h1>');
			}else{
				res.setHeader('Content-Type',"text/html;charset=utf-8");
				res.end(data);				
			}
		})
	}else if(filePath == '/css/index.css'){
		fs.readFile('./css/index.css',(err,data)=>{
			if(err){
				res.setHeader('Content-Type',"text/html;charset=utf-8");
				res.statusCode = 500;
				res.end('<h1>出错了</h1>');
			}else{
				res.setHeader('Content-Type',"text/css;charset=utf-8");
				res.end(data);				
			}
		})
	}else if(filePath == '/img/33.jpg'){
		fs.readFile('./img/33.jpg',(err,data)=>{
			if(err){
				res.setHeader('Content-Type',"image/html;charset=utf-8");
				res.statusCode = 500;
				res.end('<h1>出错了</h1>');
			}else{
				res.setHeader('Content-Type',"image/jpeg;charset=utf-8");
				res.end(data);				
			}
		})
	}else if(filePath == '/js/index.js'){
		fs.readFile('./js/index.js',(err,data)=>{
			if(err){
				res.setHeader('Content-Type',"text/html;charset=utf-8");
				res.statusCode = 500;
				res.end('<h1>出错了</h1>');
			}else{
				res.setHeader('Content-Type',"application/x-javascript;charset=utf-8");
				res.end(data);				
			}
		})
	}else{
		res.setHeader('Content-Type',"text/html;charset=utf-8");
		res.statusCode = 404;
		res.end('<h1>页面找不到</h1>');
	}

});

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at http://127.0.0.1:3000')
})