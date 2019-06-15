
const mongoose = require('mongoose');
const UserModel = require('./models/user.js');

//1.连接数据库服务(地址)
mongoose.connect('mongodb://localhost/kuazhu', {useNewUrlParser: true});

var db = mongoose.connection;

//连接失败
db.on('error',(err)=>{
	console.log('connection error:');
	throw err;
});

//连接成功
db.once('open', function() {
	console.log('connection success:');

	UserModel.insertMany({
		name:"Tom",
		age:18,
		major:"Computer"
	},(err,docs)=>{
		if(err){
			console.log('insertMany err::',err)
		}else{
			console.log(docs)
		}
	})
});
