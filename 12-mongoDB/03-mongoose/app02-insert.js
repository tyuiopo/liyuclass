

//mongoose 新增文档

var mongoose = require('mongoose');

//构建数据用
const getRandom = (min,max) =>{	
	return Math.round(min + (max-min)*Math.random());
}

const names = ["Arry","Tom","jack","Mick","Leo","Peter","Yoloc"]
const majors = ["art","Computer","sport","music"]

const getName = ()=> names[getRandom(0,names.length-1)]
const getMajor = ()=> majors[getRandom(0,majors.length-1)]


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

	//4.1 插入数据
	/*
	user.save((err,doc)=>{
		if(err){
			console.log('save user err::',err)
		}else{
			console.log(doc)
		}
	})
	*/

	UserModel.updateMany({name:getName(),age:getRandom(20,150),major:getMajor()},(err,docs)=>{
		if(err){
			console.log('updateMany err::',err)
		}else{
			console.log(docs)
		}
	})

});
