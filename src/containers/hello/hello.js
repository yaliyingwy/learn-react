import 'assets/less/hello';

import React, { Component } from 'react';

import Button from '../../components/hello/btn';

import { connect } from 'react-redux';

import {
	enable,
	disable,
} from '../../actions/btn';

class Hello extends Component {
	render() {
		console.log('render----');
		const {
			btnEnabled,
			enableBtn,
			disableBtn,
		} = this.props;
		return (
			<div className="hello">
				<h2>hello redux</h2>
				<Button 
				  title="禁用按钮三" 
				  clickFunc={() => disableBtn()} 
				  enable={true}
				/>
				<Button 
				  title="启用按钮三" 
				  clickFunc={() => enableBtn()} 
				  enable={true}
				/>
				<Button 
				  title="我是按钮三" 
				  clickFunc={() => alert('btn clicked!')} 
				  enable={btnEnabled}
				/>
			</div>
		);
	}
}

function mapStateToProps(state) {
  const { btn } = state;
  return {
  	btnEnabled: btn.get('enabled'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    enableBtn: () => dispatch(enable()),
    disableBtn: () => dispatch(disable()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
