const MongoClient = require('mongodb').MongoClient;
// console.log(MongoClient)

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name(创建数据库名)
const dbName = 'kuazhu';

// Create a new MongoClient
const client = new MongoClient(url,{ useNewUrlParser: true });

// Use connect method to connect to the Server
client.connect(function(err) {

	console.log("Connected successfully to server");

	const db = client.db(dbName);

	// Get the documents collection(创建集合名)
	const collection = db.collection('users');

	/*
	//插入文档
	collection.insertMany([{name:"Loe",age:28,major:"backetball"},{name:"Jeck",age:20,major:"muise"}],(err,result)=>{
		if(err){
			console.log('insertMany err:',err)
		}else{
			console.log(result)
		}
	})
	*/

	/*
	//查找所有文档
	collection.find({}).toArray(function(err, docs){
		if(err){
			console.log('find err:',err)
		}else{
			console.log(docs)
		}
	})
	*/
	/*
	//条件查找文件
	collection.find({age:18}).toArray(function(err, docs){
		if(err){
			console.log('find err:',err)
		}else{
			console.log(docs)
		}
	})
	*/

	/*
	//更新文档
	collection.updateOne({name:"Tom"},{$set:{age:88}},(err,result)=>{
		if(err){
			console.log('updateOne err:',err)
		}else{
			console.log(result)
		}
	})
	*/

	//删除文档
	collection.deleteOne({name:"Jeck"},(err,result)=>{
		if(err){
			console.log('remove err:',err)
		}else{
			console.log(result)
		}
	})

	client.close();
});