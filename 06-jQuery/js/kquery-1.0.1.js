(function(window){
	var kQuery=function(selector){
		return new kQuery.fn.init(selector);
	};
	kQuery.fn= kQuery.prototype={
		constructor:kQuery,
		//核心函数
		init:function(selector){
			//布尔值是false
			//空对象
			if(!selector){
				return this;
			}
			//函数
			else if(kQuery.isFunction(selector)){
				window.addEventListener('DOMContentLoaded',selector);
				this[0]=document;
				this.length=1;
				// return this;
			}
			//字符串
			else if(kQuery.isString(selector)){
				//3.1 html代码
				if(kQuery.isHtml(selector)){
					var tempDom=document.createElement('div');
					tempDom.innerHTML=selector;
					for(var i=0;i<tempDom.children.length;i++){
						this[i]=tempDom.children[i];
					}
					this.length=tempDom.children.length;
					// return this;
				}
				//3.2 选择器
				else{
					var doms=document.querySelectorAll(selector);
					for(var i=0;i<doms.length;i++){
						this[i]=doms[i];
					}
					this.length=doms.length;
					// return this;
				}
			}
			//4.数组
			else if(kQuery.isArray(selector)){
				for(var i=0;i<selector.length;i++){
					this[i]=selector[i];
				}
				this.length=selector.length;
				return this;
			}
			//5. 对象(其他)
			else{
				this[0]=selector;
				this.length=1;
			}
		},
		//get方法实现
		get:function(num){
			if(num){
				if(kQuery.isNumber(num)){
					if(num>=0){
						return this[num]
					}else{
						return this[this.length+num]
					}
				}
			}else{
				var arr=[];
				for(var i=0;i<this.length;i++){
					arr.push(this[i])
				}
				return arr;
			}
		}
		
	};
	//extend方法
	kQuery.fn.exend=kQuery.exend=function(potions){
		for(key in potions){
			this[key]=potions[key];
		}
	};

	kQuery.exend({
		isFunction:function(str){
		return typeof str=='function';
		},
		isString:function(str){
			return typeof str=='string';
		},
		isHtml:function(str){
			return /<[^<>]+>/.test(str);
		},
		isArray:function(str){
			return typeof str=='object'&& length in str;
		},
		isNumber:function(str){
			return typeof str=='number';
		}
	})

/*
	kQuery.isFunction=function(str){
		return typeof str=='function';
	};
	kQuery.isString=function(str){
		return typeof str=='string';
	};
	kQuery.isHtml=function(str){
		return /<[^<>]+>/.test(str);
	};
	kQuery.isArray=function(str){
		return typeof str=='object'&& length in str;
	};
	kQuery.isNumber=function(str){
		return typeof str=='number';
	};

*/
	kQuery.fn.init.prototype=kQuery.fn;
	window.kQuery=window.$=kQuery;
})(window);