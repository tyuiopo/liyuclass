
/*
	模块标识其实就是传递给require()方法的参数
	模块标识可以是绝对路径也可以是相对路径
	用绝对路径的话系统会直接加载路径指定的文件
	用相对路径时注意,当前目录一定要写“./”,否则表明要加载系统的核心模块
*/
/*
模块加载规则:
	首先按照模块的文件名进行查找
	如果没有找到,则会在模块名称后面加上.js后缀进行查找
	如果还没有找到,则会在模块名称后面加上.json后缀进行查找
	如果还没有找到,则会在模块名称后面加上.node 后缀进行查找
	如果还没有找到,则会报错
*/

// const m05 = require('./m05.js');

const m05 = require('E:/liyuclass/10-nodeJs/01-modules/file/m05.js');

console.log(m05)