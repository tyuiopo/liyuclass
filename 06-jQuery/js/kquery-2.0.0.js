

;(function($){
function God($elem,options){
	this.$elem=$elem;
	this.options=options;

	this.init();

}
Dod.prototype={
	constructor:Dod,

	init:function(){
		this.css({
			width:this.options.width;
			height:this.options.height;
			left:this.options.left;
			top:this.options.top
		})
	},
	leftTop:function(){
		this.css({'left':0,'top':50})
	},
	rightBottom:function(){
		this.css({'right':0,'bottom':0})
	}
}
Dod.DEFAULTS={

}


$.fn.extend({
	god:function(options){
		return this.each(function(){
			var $elem=$(this);
			options=extend({},DEFAULTS,options);
			new Dod();
		})
	}
})




}
})(jQuery);
	/*
	var DERTY={

	}
	$.fn.extend(function(options){
		shown:function(options){
			return this.each(function(){
				var $elem=$(this);
				var options=extend({},DERTY,options);
				$elem.show();
			});
		},
	})
	*/
