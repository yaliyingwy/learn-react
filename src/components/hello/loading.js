import React, { Component } from 'react';

class Loading extends Component {
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

Loading.propTypes = {
  text: React.PropTypes.string.isRequired,
}

export default Loading;
