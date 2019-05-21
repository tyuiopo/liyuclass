function animate(obj,attr,target,isLinear){
		if(isLinear==undefined){
				isLinear=true;
			}
		clearInterval(obj.tmer);
		var iSneep=0;
		
		obj.tmer=setInterval(function(){
			var isStop=false;
			var current=parseFloat(getComputedStyle(obj,false)[attr])

			if(attr=='opacity'){
				current=Math.round(current*100);
			}
			if(isLinear){
				if(current<target){
					iSneep=3;
				}else{
					iSneep=-3;
				}
				if(Math.abs(target-current)<Math.abs(iSneep)){
					if(attr=='opacity'){
						obj.style.opacity=target/100;
					}else{
						obj.style[attr]=target+'px';
					}
					isStop=true;
				}
			}else{
				iSneep=(target-current)/10;
				iSneep= iSneep<0?Math.floor(iSneep):Math.ceil(iSneep);
				if(target==current){
					isStop=true;
				}
			}
			if(isStop){
				clearInterval(obj.tmer);
			}else{
				if(attr=='opacity'){
					obj.style.opacity=(current+iSneep)/100;
				}else{
					obj.style[attr]=current+iSneep+'px'
				}
			}
		},30)
	}
	function getScrollTop(){
		return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop
	}
	function getScrollLeft(){
		return window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft
	}