
//封装

var  http=require('http');
var fs=require('fs');
var url=require('url')


/*
什么是Cookie
	Cookie是服务器发送到用户浏览器并保存在本地的一小块数据,
	它会在浏览器下次向同一服务器再发起请求时被携带并发送到服务器上

Cookie的主要作用
	记录客户端的状态信息,解决HTTP无状态的问题

创建Cookie
	服务器使用Set-Cookie响应头部向浏览器发送Cookie信息。
	服务器创建并返回Cookie后,对该服务器发起的每一次新请求,
	浏览器都会将之前保存的Cookie信息通过Cookie请求头部再发送给服务器
	
Cookie的特点
	Cookie的大小限制是4k
	Cookie会存在于请求头中
	主域名中的Cookie会在子域名中存在
*/
var server=http.createServer(function(req,res){
	var urlStr=req.url;
	console.log(req.method);
	console.log('req.url::',urlStr);

	
	var date=new Date('2019-03-07 20:00:00').toUTCString();
	//Expires属性指定一个具体的到期时间(可以用Date对象的toUTCString()方法),到了指定时间以后,浏览器就不再保留这个 Cookie
	// res.setHeader('Set-Cookie',["username=tom;Expires"+date]);

	//Max-Age属性指定从现在开始 Cookie 存在的秒数,过了这个时间以后,浏览器就不再保留这个 Cookie
	// res.setHeader('Set-Cookie',["username=tom;max-age=100"]);

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
