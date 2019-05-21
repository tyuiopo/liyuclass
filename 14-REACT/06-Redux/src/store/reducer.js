
import {ADD_ITEM,CHANGE_ITEM,DEL_ITEM} from './actionType.js'

const defaultState = {
	list:["吃饭","睡觉"],
	val:"玩游戏"
}

export default (state=defaultState,action)=>{

	if(action.type == CHANGE_ITEM){
		/*
		不推荐使用
		state.val = action.payload;
		return state
		*/
		
		//1.先copy上次的state
		const newState = JSON.parse(JSON.stringify(state));
		//2.修改新的state再返回
		newState.val = action.payload;
		return newState
	}
	if(action.type == ADD_ITEM){
		//1.先copy上次的state
		const newState = JSON.parse(JSON.stringify(state));
		//2.修改新的state再返回
		newState.list.push(state.val);
		newState.val='';
		return newState
	}
	if(action.type == DEL_ITEM){
		//1.先copy上次的state
		const newState = JSON.parse(JSON.stringify(state));
		//2.修改新的state再返回
		newState.list.splice(action.payload,1)
		return newState		
	}
	return state
}