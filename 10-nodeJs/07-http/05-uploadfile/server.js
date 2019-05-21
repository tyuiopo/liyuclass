const http = require('http');
const formidable = require('formidable');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req,res)=>{
	console.log('url==',req.url,'methom==',req.method);

	if(req.method.toLowerCase() == 'post'){
		let form = new formidable.IncomingForm();
		form.uploadDir = "./upload";
		form.keepExtensions = true;
		form.parse(req, function(err, fields, files) {
			// console.log({fields: fields, files: files});

			//获取绝对路径(老名字)
			// console.log(__dirname +"\\"+files.avatar.path)
			let oldPath =  __dirname +"\\"+files.avatar.path;

			//获取扩展名
			let extname = path.extname(oldPath);

			//新名字
			let newPath = __dirname + "\\upload\\"+Date.now().toString()+parseInt(Math.random()*10000)
				.toString().padStart(4,'0')+extname;

			console.log(newPath)

			//更改文件名
			fs.rename(oldPath,newPath,(err)=>{
				if(err){
					res.setHeader('Content-Type',"text/html;charset=utf-8");
					res.end('err');
				}else{
					res.setHeader('Content-Type',"text/html;charset=utf-8");
					res.end('ok');					
				}
			});
	    });
	}
});

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at http://127.0.0.1:3000')
})