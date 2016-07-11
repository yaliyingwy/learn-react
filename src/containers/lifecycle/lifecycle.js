import 'assets/less/lifecycle';

import React, { Component } from 'react';

import Foo from '../../components/lifecycle/foo';
import Bar from '../../components/lifecycle/bar';

import { render } from 'react-dom';

class LifeCycle extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	show: 'foo',
	  	time: new Date().getTime(),
	  };
	  this.displayName = 'LifeCycle';
	  console.log('LifeCycle constructor, state: ', this.state, 'props: ', this.props);
	}

	componentWillMount() {
	  console.log('LifeCycle componentWillMount, state: ', this.state, 'props: ', this.props);   
	}

	componentDidMount() {
	  console.log('LifeCycle componentDidMount, state: ', this.state, 'props: ', this.props);     
	}

	componentWillUnmount() {
	  console.log('LifeCycle componentWillUnmount, state: ', this.state, 'props: ', this.props);       
	}

	componentWillUpdate(nextProps, nextState) {
	  console.log('LifeCycle componentWillUpdate, state: ', this.state, 'props: ', this.props, 'nextState: ', nextState, 'nextProps: ', nextProps);         
	}

	componentDidUpdate(prevProps, prevState) {
	  console.log('LifeCycle componentWillUpdate, state: ', this.state, 'props: ', this.props, 'prevState: ', prevState, 'prevProps: ', prevProps);  
	}

	componentWillReceiveProps(nextProps) {
	  console.log('LifeCycle componentWillReceiveProps, state: ', this.state, 'props: ', this.props, 'nextProps: ', nextProps);     
	}

	show(type) {
	  this.setState({
	  	show: type,
	  	time: new Date().getTime(),
	  });
	}

	render() {
		const { show, time } = this.state;
		return (
			<div className="lifecycle">
				<h1>LifeCycle</h1>
				<div onClick={this.show.bind(this, 'foo')} className="btn">show foo</div>
				<div onClick={this.show.bind(this, 'bar')} className="btn">show bar</div>
				{(() => {
					let view;
					if (show === 'foo') {
						view = <Foo text={time} />
					} else {
						view = <Bar text={time} />
					}
					return view;
				})()}	
			</div>
		);
	}
}

render(<LifeCycle />, document.getElementById('content'));
