var http=require('http');

var server=http.createServer(function(req,res){
	res.end('hello');
})

server.listen(3000,'127.0.0.1',function(){
	console.log('Sever is running at http://127.0.0.1:3000')
})