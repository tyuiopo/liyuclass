import React,{ Component,Fragment } from 'react'
import Item from './Item.js'

import './App.css'

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			list:["吃饭","睡觉","玩游戏"],
			val:""
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleAdd = this.handleAdd.bind(this)
	}
	handleAdd(){
		this.setState(preState=>({
			list:[...preState.list,preState.val],
			val:''
		}),()=>{
			console.log(this.ul.querySelectorAll('li'))
		})
		// console.log(this.ul.querySelectorAll('li'))(异步)
	}
	handleChange(ev){
		// const val = ev.target.value;
		const val = this.input.value;//(接收DOM节点)
		this.setState(()=>({
			val
		}))
	}
	handleDel(index){
		const list1 = [...this.state.list];
		list1.splice(index,1);

		this.setState(()=>({
			list:list1
		}))
	}
	getItems(){
		return 	this.state.list.map((item,index)=>{
					return <Item key={index} content={item} handleDel={this.handleDel.bind(this,index)} />
				})
	}
	render(){
		return (
			<div className='app'>
				<input 
					onChange={this.handleChange}
					value={this.state.val}
					//获取DOM节点
					ref={(input)=>{
						this.input = input
					}}
				/>
				<button onClick={this.handleAdd}>新增</button>
				<ul ref={(ul)=>{this.ul = ul}}>
					{
						this.getItems()
					}
				</ul>
			</div>
		)
	}
}

export default App