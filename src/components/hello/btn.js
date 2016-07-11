import React, { Component } from 'react';

class Button extends Component {

	render() {
		const { 
			enable,
			clickFunc, 
			title,
		} = this.props;

		const cls = `btn ${enable ? '' : 'disabled'}`;
		return (
			<div 
			  className={cls} 
			  onClick={() => {
			  	if (enable) {
			  		clickFunc();
			  	}
			  }}
			>
				{title}
			</div>
		);
	}
}

Button.propTypes = {
  clickFunc: React.PropTypes.func.isRequired,
  enable: React.PropTypes.bool.isRequired,
  title: React.PropTypes.string.isRequired,
}

export default Button;
