import React, { Component } from 'react';

class Child extends Component {

	hello() {
		alert('say hello in child');
	}

	close(msg) {
		const { closeFunc } = this.props;
		closeFunc(msg);
	}

	render() {
		const { time } = this.props;
		return (
			<div className="child">
				<div>{`time from father ${time}`}</div>
				<h3 className="btn" onClick={this.close.bind(this, 'msg from child')}>点击我调用父组件的方法关闭子组件</h3>
			</div>
		);
	}
}

Child.propTypes = {
  time: React.PropTypes.number.isRequired,
  closeFunc: React.PropTypes.func.isRequired,
}

export default Child;
