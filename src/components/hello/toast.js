import React, { Component } from 'react';

class Toast extends Component {
	render() {
		const {  
			text,
		} = this.props;
		return (
			<div className="toast">
				{text}
			</div>
		);
	}
}

Toast.propTypes = {
  text: React.PropTypes.string.isRequired,
}

export default Toast;
