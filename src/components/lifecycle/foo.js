import React, { Component } from 'react';

class Foo extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	count: 0,
	  };
	  this.displayName = 'Foo';
	  this.increaseCount = this.increaseCount.bind(this);
	  console.log('Foo constructor, state: ', this.state, 'props: ', this.props);
	}

	componentWillMount() {
	  console.log('Foo componentWillMount, state: ', this.state, 'props: ', this.props);   
	}

	componentDidMount() {
	  console.log('Foo componentDidMount, state: ', this.state, 'props: ', this.props);     
	}

	componentWillUnmount() {
	  console.log('Foo componentWillUnmount, state: ', this.state, 'props: ', this.props);       
	}

	componentWillUpdate(nextProps, nextState) {
	  console.log('Foo componentWillUpdate, state: ', this.state, 'props: ', this.props, 'nextState: ', nextState, 'nextProps: ', nextProps);         
	}

	componentDidUpdate(prevProps, prevState) {
	  console.log('Foo componentWillUpdate, state: ', this.state, 'props: ', this.props, 'prevState: ', prevState, 'prevProps: ', prevProps);  
	}

	componentWillReceiveProps(nextProps) {
	  console.log('Foo componentWillReceiveProps, state: ', this.state, 'props: ', this.props, 'nextProps: ', nextProps);     
	}

	increaseCount() {
	  const { count } = this.state;
	  this.setState({
	  	count: count + 1,
	  });
	}

	render() {
		const { text } = this.props;
		const { count } = this.state;
		const content = `count in state: ${count}, text in props: ${text}`;
		return (
			<div className="foo">
				<h3>foo</h3>
				{content}
				<div className="btn" onClick={this.increaseCount}>点我增加count</div>	
			</div>
		);
	}
}

Foo.propsTypes = {
	text: React.PropTypes.string.isRequired,
}

export default Foo;
