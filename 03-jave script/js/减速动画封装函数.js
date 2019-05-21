function animate(obj,attr,target){
		clearInterval(obj.tmer);
		obj.tmer=setInterval(function(){
			var current=parseFloat(getComputedStyle(obj,false)[attr])
			if(attr=='opacity'){
				current=Math.round(iOpacity*100);
			}
			iSneep=(target-current)/10
			iSneep= iSneep<0?Math.floor(iSneep):Math.ceil(iSneep)

			if(target==current){
				clearInterval(obj.tmer);
			}else{
				if(attr=='opacity'){
					obj.style.opacity=(current+iSneep)/100;
				}else{
					obj.style[attr]=current+iSneep+'px';
				}
			}
		},30)
	}
	function getScrollTop(){
		return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop
	}