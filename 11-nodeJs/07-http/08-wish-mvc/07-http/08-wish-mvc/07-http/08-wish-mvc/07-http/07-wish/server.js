const http = require('http');
const url = require('url');
const path= require('path');
const fs =require('fs');
const swig = require('swig');
const querystring = require('querystring');
const mime = require('./mime.json');
const {getAll,add,remove} =  require('./WishModel.js')

const server = http.createServer((req,res)=>{
	// console.log('url=>',req.url)
	let reqUrl = url.parse(req.url,true);
	let pathname = reqUrl.pathname;
	if(pathname == '/' || pathname == '/index.html'){//获取首页
		getAll()
		.then(data=>{
			// console.log('url=>',data);
			/*
			let html =`<!DOCTYPE html>
							<html lang="en">
							<head>
								<meta charset="UTF-8">
								<title>许愿墙</title>
								<link rel="stylesheet" href="css/index.css">
							</head>
							<body>
								<div class="wall">`
						data.forEach(item=>{
							html += `<div class="wish" style="background:${item.color}">
										<a href="javascript:;" class="close" data-id=${item.id}></a>
										${item.content}
									</div>`
						})
					html +=		`</div>
								<div class="form-box">
									<div>
										<textarea name="content" id="content" cols="30" rows="20"></textarea>
									</div>
									<div>
										<a href="javascript:;" class="sub-btn">许下心愿</a>
									</div>
								</div>	
							</body>
							<script src="js/jquery.min.js"></script>
							<script src="js/jquery.pep.js"></script>
							<script src="js/index.js"></script>
							</html>`;
			*/
			//用 swig模板分离数据
			let template = swig.compileFile(__dirname+'/static/index.html');
			let html = template({
				data
			})

			res.setHeader('Content-Type',"text/html;charset=utf-8");
			res.end(html)
		})
		.catch(err=>{
			res.setHeader('Content-Type',"text/html;charset=utf-8");
			res.status=500;
			res.end('<h1>出错了</h1>')
		})
	}else if(pathname == '/add' && req.method.toLowerCase() == 'post'){
		//获取添加的数据
		let body = '';
		req.on('data',(chunk)=>{
			body += chunk
		})
		req.on('end',()=>{
			// console.log(body)
			//解析(处理前端post请求数据 变后端对象)
			const obj =querystring.parse(body);
			add(obj)
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
	}else if(pathname == '/del'){
		let id = reqUrl.query.id;
		remove(id)
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

	else{//请求获取静态资源
	
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
	}
});

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at http://127.0.0.1:3000')
})