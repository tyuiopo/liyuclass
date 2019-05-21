import React,{ Component } from 'react';
import PropTypes from 'prop-types';

class Item extends Component{
	constructor(props){
		super(props);
	}
	render(){
		const { handleDel,content } = this.props;
		return (
			<li onClick={handleDel}>
				{content}
			</li>
		)
	}
}

//定义父组件传入子组件数据的校验规则
Item.propTypes = {
    content:PropTypes.string,
    index:PropTypes.number,
    handleDelete:PropTypes.func,
    test:PropTypes.string.isRequired
}

//设置默认值
Item.defaultProps = {
    test:'Hello'
}
export default Item