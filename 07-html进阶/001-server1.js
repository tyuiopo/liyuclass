
//封装

var  http=require('http');
var fs=require('fs');
var url=require('url')


var server=http.createServer(function(req,res){
	var urlStr=req.url;
	console.log(req.method);
	console.log('req.url::',urlStr);

	var date=new Date('2019-03-07 20:00:00').toUTCString();
	res.setHeader('Set-Cookie',["username=tom;Expires"+date]);

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
