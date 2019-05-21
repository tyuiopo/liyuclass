const path = require('path');

module.exports = {
	//指定打包环境
	mode:'development',
	//指定入口


	//单入写法一
	// entry:{
	// 	main:'./src/index.js'
	// }
	//单入写法二
	entry: './src/index.js',


	/*
	//多入口
	entry: {
		//chunk名称:入口文件路径
		index: "./index.js",
		about: "./about.js",
		contact: "./contact.js"
	},
	*/

	//指定出口

	//单出口
	output: {
		//出口文件名称
		filename: 'bundle.js',
		//出口的文件所在的目录
		path: path.resolve(__dirname, 'dist')
	},

	/*
	//多出口
	output: {
		//出口文件名称
		filename: '[name]-[hash].bundle.js',
		//出口的文件所在的目录
		path: path.resolve(__dirname, 'dist')
	},
	*/
	module: {
		rules: [
			//处理css
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			}, 
			//处理图片 
			{
				test: /\.(png|jpg|gif|jpeg)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 20000
						}
					}
				]
			}
		]
	},
};