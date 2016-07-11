import 'assets/less/hello';

import React, { Component } from 'react';

import Button from '../../components/hello/btn';

import { connect } from 'react-redux';

import {
	enable,
	disable,
} from '../../actions/btn';

import {
	toast,
} from '../../actions/toast';

import Toast from '../../components/hello/toast';

class Hello extends Component {


	render() {
		console.log('render----');
		const {
			btnEnabled,
			enableBtn,
			disableBtn,
			showToast,
			toast,
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
				<Button 
				  title="显示toast" 
				  clickFunc={showToast} 
				  enable={true}
				/>
				{(() => {
					if (toast.get('show')) {
						return <Toast text={toast.get('text')} />;
					}
				})()}
				
			</div>
		);
	}
}

function mapStateToProps(state) {
  const { btn, toast } = state;
  return {
  	btnEnabled: btn.get('enabled'),
  	toast,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    enableBtn: () => dispatch(enable()),
    disableBtn: () => dispatch(disable()),
    showToast: () => dispatch(toast(`当前时间戳${new Date().getTime()}`)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
