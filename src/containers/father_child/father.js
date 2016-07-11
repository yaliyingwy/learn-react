import 'assets/less/father_child';

import React, { Component } from 'react';

import Child from '../../components/father_child/child';

import { render } from 'react-dom';

class Father extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	showChild: true,
	  	time: new Date().getTime(),
	  };
	  this.displayName = 'Father';
	  this.closeChild = this.closeChild.bind(this);
	  this.updateTime = this.updateTime.bind(this);
	  this.showChild = this.showChild.bind(this);
	  this.sayHello = this.sayHello.bind(this);
	}

	closeChild(msg) {
		alert(msg);
	  this.setState({
	  	showChild: false,
	  });
	}

	showChild() {
		this.setState({
			showChild: true,
		});
	}

	updateTime() {
		this.setState({
			time: new Date().getTime(),
		});
	}

	sayHello() {
		this.refs.child.hello();
	}

	render() {
		const { showChild, time } = this.state;
		return (
			<div className="father">
				<h2>father</h2>
				<div onClick={this.updateTime} className="btn">更新child时间</div>
				<div onClick={this.showChild} className="btn">显示child</div>			
				{(() => {
					if (showChild) {
						return (
							<div>
								<div onClick={this.sayHello} className="btn">child say hello</div>
								<Child ref="child" time={time} closeFunc={this.closeChild} />
							</div>
						);
					}
				})()}
			</div>
		);
	}
}

render(<Father />, document.getElementById('content'));
