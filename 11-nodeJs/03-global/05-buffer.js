/*
	Buffer（缓冲器）
	Buffer是用来存放二进制数据的容器
		控制台中输出的buffer,一个数字或者字母代表一个十六进制数
*/
/*
	一个二进制的0 或 1 代表1bit(位)
	8bit(位) = 1B(字节) = 2个16进制数
	00000000 - 11111111
	十进制：   0 - 255 
	十六进制： 00 - ff

	1个英文字符 = 1B
	1个汉字 = 3B
*/


const buf1=Buffer.from('hi');
console.log(buf1)//<Buffer 68 69>

const buf2=Buffer.from('你好');
console.log(buf2)//<Buffer e4 bd a0 e5 a5 bd>




const buf3=Buffer.alloc(10);
console.log(buf3)//<Buffer 00 00 00 00 00 00 00 00 00 00>
buf3[0]=10;
console.log(buf3)//<Buffer 0a 00 00 00 00 00 00 00 00 00>
buf3[1]=0xff;
console.log(buf3)//<Buffer 0a ff 00 00 00 00 00 00 00 00>
buf3[2]=0x10;
console.log(buf3)//<Buffer 0a ff 10 00 00 00 00 00 00 00>
buf3[9]=0x11;
console.log(buf3)//<Buffer 0a ff 10 00 00 00 00 00 00 11>
buf3[10]=0x13;
console.log(buf3)//buf3 最大为10个数组