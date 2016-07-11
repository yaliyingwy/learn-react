import React, { Component } from 'react';

class Bar extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	count: 0,
	  };
	  this.displayName = 'Bar';
	  this.increaseCount = this.increaseCount.bind(this);
	  console.log('Bar constructor, state: ', this.state, 'props:', this.props);
	}

	componentWillMount() {
	  console.log('Bar componentWillMount, state: ', this.state, 'props: ', this.props);   
	}

	componentDidMount() {
	  console.log('Bar componentDidMount, state: ', this.state, 'props: ', this.props);     
	}

	componentWillUnmount() {
	  console.log('Bar componentWillUnmount, state: ', this.state, 'props: ', this.props);       
	}

	componentWillUpdate(nextProps, nextState) {
	  console.log('Bar componentWillUpdate, state: ', this.state, 'props: ', this.props, 'nextState: ', nextState, 'nextProps: ', nextProps);         
	}

	componentDidUpdate(prevProps, prevState) {
	  console.log('Bar componentWillUpdate, state: ', this.state, 'props: ', this.props, 'prevState: ', prevState, 'prevProps: ', prevProps);  
	}

	componentWillReceiveProps(nextProps) {
	  console.log('Bar componentWillReceiveProps, state: ', this.state, 'props: ', this.props, 'nextProps: ', nextProps);     
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
			<div className="bar">
				<h3>bar</h3>
				{content}		
				<div className="btn" onClick={this.increaseCount}>点我增加count</div>	
			</div>
		);
	}
}

Bar.propsTypes = {
	text: React.PropTypes.string.isRequired,
}

export default Bar;
