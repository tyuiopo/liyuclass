(function($){

	function getRandom(min,max) {	
		return Math.round(min + (max-min)*Math.random());
	}
	let $wish = $('.wish');
	let $wall = $('.wall');
	//获取父容器和自身的宽高
	var wishWidth = $wish.width(),
		wishHeight = $wish.height(),
		wallWidth = $wall.width(),
		wallHeight = $wall.height()

	function handWishPep($elem){
		//设置卡片拖动
		$elem.pep({  constrainTo: '.wall' });

		//随机显示卡片位置
		$elem.each(function(){
			let x = getRandom(0,wallWidth-wishWidth);
			let y = getRandom(0,wallHeight-wishHeight);
			$(this).css({
				transform:"matrix(1, 0, 0, 1,"+x+","+y+")"
			})
		})
		$elem.hover(function(){
			$(this).css({
				zIndex:999
			})
		},function(){
			$(this).css({
				zIndex:0
			})
		})	
	}
	handWishPep($wish)

	//添加监听事件
	$('.sub-btn').on('click',function(){
		$.ajax({
			url:'/add',
			type:'post',
			dataType:'json',
			data:{
				content:$('#content').val()
			}
		})
		.done(function(result){
			if(result.status == 0){
				var $dom = $(`		
					<div class="wish" style="background:${result.data.color}">
						<a href="javascript:;" class="close" data-id='${result.data.id}'></a>
						${result.data.content}
					</div>
				`)
				$wall.append($dom);
				handWishPep($wall);
				$('#content').val('');
			}else{
				alert(result.message)
			}
		})
	})

	//监听删除事件
	$wall.on('click','.close',function(){
		var $this = $(this);
		$.ajax({
			url:'del',
			dataType:'json',
			data:'id='+ $this.data('id')
		})
		.done(function(result){
			if(result.status == 0){
				$(this.parentNode).remove()
			}else{
				alert(result.message)
			}
		}.bind(this))
	})
})(jQuery);	
