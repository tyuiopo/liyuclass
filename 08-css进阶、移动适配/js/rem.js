	(function(win,doc){
		//1rem=1个根元素(html)的font-size
		//元素需要显示的大小和设备的宽度成正比
		//设备越宽 1个根元素(html)的font-size 越大

		//获取根元素
		var oRoot=document.getElementsByTagName('html')[0];
		function refreshFontSize(){
			//获取整个视口的宽度
			var iWidth=doc.body.clientWidth || doc.documentElement.clientWidth;
			//转换
			var iFontSize=iWidth / 10;
			//设置
			oRoot.style.fontSize=iFontSize+'px';
		}
		//监听事件
		win.addEventListener('resize',refreshFontSize,false);
		// win.addEventListener('load',refreshFontSize,false);
		win.addEventListener('DOMContentLoaded',refreshFontSize,false);
	})(window,document)