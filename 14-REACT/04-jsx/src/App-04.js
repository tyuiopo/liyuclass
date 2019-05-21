import React,{ Component,Fragment } from 'react'
import Item from './Item.js'

import './App.css'

class App extends Component{
	//挂载阶段开始
	constructor(props){
		super(props);
		this.state = {
			list:["吃饭"],
			val:""
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
		console.log('app  constructor..')
	}
	//挂载阶段结束
	componentDidMount(){//多用于发送ajax
		console.log('App  componentDidMount')
	}


	//挂载阶段中期、更新阶段开始
	static getDerivedStateFromProps(nextProps, prevState){//多用于如果props有变化,需要更新state的场景,该方法返回state的更新
		console.log('App static getDerivedStateFromProps(nextProps, prevState)',nextProps, prevState)
		return {
			// list:["睡觉"]
		}
	}

	//更新阶段
	shouldComponentUpdate(nextProps, nextState){//该方法返回布尔值,根据返回的布尔值决定是否执行后续的周期函数,一般用来阻止不必要的页面渲染
		console.log('App shouldComponentUpdate(nextProps, nextState)',nextProps, nextState)
		return true
	}
	//更新阶段
	getSnapshotBeforeUpdate(prevProps, prevState){//该方法返回一个值,这个值会随后被传入到 componentDidUpdate 中使用
		console.log('App getSnapshotBeforeUpdate(prevProps, prevState)',prevProps, prevState)
		return 123
	}
	//更新阶段结束
	componentDidUpdate(prevProps, prevState,snapshot){//组件更新完成后执行
		console.log('App componentDidUpdate(prevProps, prevState,snapshot)',prevProps, prevState,snapshot)
	}


	handleAdd(){
		this.setState(preState=>({
			list:[...preState.list,preState.val],
			val:''
		}))
	}
	handleChange(ev){
		const val = ev.target.value;
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
		console.log('app  render ..')
		return (
			<div className='app'>
				<input onChange={this.handleChange} value={this.state.val} />
				<button onClick={this.handleAdd}>新增</button>
				<ul>
					{
						this.getItems()
					}
				</ul>
			</div>
		)
	}
}

export default App