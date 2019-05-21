const http = require('http');
const url = require('url');
const path= require('path');
const fs =require('fs');
const mime = require('./mime.json')

const server = http.createServer((req,res)=>{

	console.log('url=>',req.url);
	let reqUrl = url.parse(req.url,true);
	// console.log(reqUrl);
	let pathname = reqUrl.pathname;

	//约定：如果请求的是目标，则返回目录下的index.html页面
	if(pathname.lastIndexOf('.')==-1){//判断文件目录
		pathname = pathname + "/index.html"
	}

	//获取请求目标的绝对路径
	let filePath = path.normalize(__dirname + '/static/'+pathname);
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
});

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at http://127.0.0.1:3000')
})