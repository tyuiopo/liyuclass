
//跨域解决方案-CORS-简单请求

var  http=require('http');
var fs=require('fs');
var url=require('url')


var server=http.createServer(function(req,res){
	//跨域解决方案-CORS-简单请求
		//设置允许的端口号,必须设置
	res.setHeader('Access-Control-Allow-Origin','http://127.0.0.1:3000');
		//设置允许getResponseHeader方法获取服务区响应的默认6个类型字段(可选设置)
	res.setHeader('Content-Type','test/html');
		//设置允许getResponseHeader方法获取服务区响应的其他字段(可设置多个,用逗号隔开)
	res.setHeader("Access-Control-Expose-Headers",'Date,Access-Control-Allow-Origin,Kuazhu-Test')
		//设置允许getResponseHeader方法获取服务区响应的自定义字段
	res.setHeader('Kuazhu-Test','Kuazhu-Control');

	var urlStr=req.url;
	console.log(req.method);
	console.log('req.url::',urlStr)
	if(urlStr=='/favicon.ico'){
		res.end('/favicon.ico')
	}
	if(req.method=='POST'){
		// res.end('post data...')
		var body='';
		req.on('data',function(chunk){
			body+=chunk;
		});
		req.on('end',function(){
			// console.log('get post data',body);
			res.end(body);
		})
	}else if(req.method=='GET'){
		//判断浏览器请求是否有带参数
		if(urlStr.search(/\?/)!=-1){
			var parm=url.parse(urlStr,true).query;
			var json=JSON.stringify(parm);
			res.end(json);
		}
		var filePath='./'+urlStr;
		fs.readFile(filePath,function(err,data){
			if(!err){
				res.end(data);
			}else{
				res.statusCode=404;
				res.end('not found');
			}
		})
	}else{
		res.end('ok');
	}
	
});
server.listen(3001,'127.0.0.1',function(){
	console.log('Sever is running at http://127.0.0.1:3001')
})
