
//state计算属性

export default {
		//数据总个数
	total(state){
		return state.todos.length
	},
	//选中的个数
	totalDone(state){
		return state.todos.reduce((total,item)=>{
			if(item.done){
				total++
			}
			return total
		},0)
	},
	allDone(state,getter){
		return getter.total ==getter.totalDone && (getter.total != 0)
	}
}