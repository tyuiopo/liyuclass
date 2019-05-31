<template>
	<div 
		class="Item"
		:style="{background:bgColor}"
		@mouseenter="handleShow(true)" 
		@mouseleave="handleShow(false)" 
	>
		<input type="checkbox" v-model="todo.done">
		<span>{{todo.task}}</span>
		<button v-show="isShow" @click="handleDel">删除</button>
	</div>
</template>

<script>
	export default {
		name:'Item',
		props:{
			todo:Object,
			index:Number
		},
		data(){
			return {
				bgColor:'#fff',
				isShow:false
			}
		},
		methods:{
			handleShow(flsg){
				//数据驱动变化背景色
				this.bgColor = flsg ? '#ccc' : '#fff';
				//数据驱动变化删除按钮
				this.isShow = flsg
			},
			//删除事件
			handleDel(){
				if(window.confirm('您确定要删除'+this.todo.task+'吗?')){
					this.$store.dispatch('delToDo',this.index)
				}
			}
		}
	}
</script>

<style scoped>
	.Item{
		width: 100%;
		height: 30px;
		line-height: 30px;
		border: 1px dashed #ff6700;
		margin-bottom: 10px;
	}
	.Item input{
		float: left;
		margin-top: 9px;
		margin-right:10px; 
	}
	.Item button{
		float: right;
		margin-top: 4px;
	}
</style>