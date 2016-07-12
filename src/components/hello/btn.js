import React, { Component } from 'react';
import Spinner from './spinner';

class Button extends Component {

	render() {
		const { 
			enable,
			clickFunc, 
			title,
			busy,
		} = this.props;

		const cls = `btn ${enable ? '' : 'disabled'}`;
		return (
			<div 
			  className={cls} 
			  onClick={() => {
			  	if (enable && !busy) {
			  		clickFunc();
			  	}
			  }}
			>
				{title}
				{(() => {
					if (busy) {
						return <Spinner />
					}
				})()}
			</div>
		);
	}
}

Button.propTypes = {
  clickFunc: React.PropTypes.func.isRequired,
  enable: React.PropTypes.bool.isRequired,
  title: React.PropTypes.string.isRequired,
  busy: React.PropTypes.bool.isRequired,
};

Button.defaultProps = {
	busy: false,
};

export default Button;
