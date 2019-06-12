
// 浏览器缓存-强缓存

var  http=require('http');
var fs=require('fs');
var url=require('url')


var server=http.createServer(function(req,res){
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
		if(urlStr.search(/\?/)!=-1){
			var parm=url.parse(urlStr,true).query;
			var json=JSON.stringify(parm);
			res.end(json);
		}
		if(/\.css$/.test(urlStr)){
			res.setHeader("Content-Type",'text/css;');
			//强缓存1
			res.setHeader("Expires",new Date(Date.now()+10000));
			//强缓存2(两个同时存在 2优先),一个相对时间
			res.setHeader("Cache-Control",'max-age=10');
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
server.listen(3000,'127.0.0.1',function(){
	console.log('Sever is running at http://127.0.0.1:3000')
})
