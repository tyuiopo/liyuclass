
const  mongoose = require('mongoose');

//1.定义Schema
const UserSchema = new mongoose.Schema({
	name: String,
	age:Number,
	major:String
});

//2.生成模型Model
	//2.1 mongoose.model 第一个参数是指定集合的名称，mongoose会自动变为复数
	//2.2 mongoose.model 第二个参数是指定Schema
var UserModel = mongoose.model('user', UserSchema);

//导出模型
module.exports = UserModel;