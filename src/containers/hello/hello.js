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

import {
	requestDoc,
	requestDocDone,
	requestDocFail,
	callApi,
} from '../../actions/hello';

import {
	REQUEST_DOC_DONE,
	REQUEST_DOC_FAIL,
} from '../../constants/actionType';

import cacheMap, {
  USE_LATEST,
  DOUBLE_CB,
  NO_CACHE,
  ONLY_CACHE,
} from '../../constants/cache';

import Toast from '../../components/hello/toast';
import Loading from '../../components/hello/loading';

class Hello extends Component {

	render() {
		console.log('render----');
		const {
			btnEnabled,
			enableBtn,
			disableBtn,
			showToast,
			toast,
			request,
			doc,
			netBusy,
			showLoading,
			loadingText,
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

				<Button 
				  title="请求网络" 
				  clickFunc={request} 
				  enable={true}
				  busy={netBusy}
				/>
				<div>{doc}</div>

				{(() => {
					if (showLoading) {
						return <Loading text={loadingText} />;
					}
				})()}
			</div>
		);
	}
}

function mapStateToProps(state) {
  const { 
  	btn, 
  	toast, 
  	hello,
  	loading,
  } = state;
  return {
  	btnEnabled: btn.get('enabled'),
  	toast,
  	netBusy: hello.get('netBusy'),
  	doc: hello.get('doc'),
  	showLoading: loading.get('show'),
  	loadingText: loading.get('text'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    enableBtn: () => dispatch(enable()),
    disableBtn: () => dispatch(disable()),
    showToast: () => dispatch(toast(`当前时间戳${new Date().getTime()}`)),
    request: () => dispatch(callApi({
    	api: 'http://localhost:8080/webpack-dev-server/lifecycle.html',
    	success: REQUEST_DOC_DONE,
    	loading: true,
    	cache: USE_LATEST,
    	fail: REQUEST_DOC_FAIL,
    })),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
