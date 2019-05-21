
var mongoose = require('mongoose');

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
	//2.定义Schema
	var UserSchema = new mongoose.Schema({
		name: String,
		age:Number,
		major:String
	});

	//3.生成模型Model
		//3.1 mongoose.model 第一个参数是指定集合的名称，mongoose会自动变为复数
		//3.2 mongoose.model 第二个参数是指定Schema
	var UserModel = mongoose.model('user', UserSchema);

	//4.用模型操作数据(CRUD)
	var user = new UserModel({ name:"Make",age:23,major:"Computer"});

	/*
	//4.1 插入数据
	user.save((err,doc)=>{
		if(err){
			console.log('save user err::',err)
		}else{
			console.log(doc)
		}
	})
	*/

	/*
	//4.2查找
	UserModel.find({},(err,docs)=>{
		if(err){
			console.log('find user error:',err)
		}else{
			console.log(docs);
		}
	});
	*/

	/*
	//4.3更新(废弃)
	UserModel.update({name:"Make"},{$set:{age:36}},(err,result)=>{
		if(err){
			console.log('update err::',err)
		}else{
			console.log(result)
		}
	})
	*/

	//4.3更新
	UserModel.updateOne({name:"Make"},{$set:{age:46}},(err,result)=>{
		if(err){
			console.log('update err::',err)
		}else{
			console.log(result)
		}
	})

	/*
	//4.4删除
	UserModel.deleteOne({name:"Make"},(err,result)=>{
		if(err){
			console.log('deleteOne err::',err)
		}else{
			console.log(result)
		}
	})
	*/

});
