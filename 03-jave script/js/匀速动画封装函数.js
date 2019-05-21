function animate(obj,attr,target){
		clearInterval(obj.tmer);
		var iSneep=0;
		obj.tmer=setInterval(function(){
			var current=parseFloat(getComputedStyle(obj,false)[attr]);
			if(attr=='opacity'){
				current=Math.round(current*100);
			}
			if(current<target){
				iSneep=3;
			}else{
				iSneep=-3;
			}         
			if(Math.abs(target-current)<Math.abs(iSneep)){
				if(attr=='opacity'){
					obj.style.opacity=target/100;
				}else{
					obj.style[attr]=target;
				}
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