import {
	REQUEST_DOC_DONE,
	REQUEST_DOC_FAIL,
	REQUEST_DOC,
	CALL_API,
} from '../constants/actionType';

export function requestDoc(url) {
	return (dispatch) => {
		// 先发个action,网络请求开始
		dispatch({
			type: REQUEST_DOC,
		});

		// 进行网络请求
		fetch(url).then(response => response.text())
		  .then(text => {
				dispatch({
					type: REQUEST_DOC_DONE,
					payload: {
						text,
					},
				});
			})
			.catch(error => {
				dispatch({
					type: REQUEST_DOC_FAIL,
					error: error,
				});
			});

	};
}

export function requestDocDone(text) {
	return { 
		type: REQUEST_DOC_DONE,
		payload: { text },
	};
}

export function requestDocFail(error) {
	return { type: REQUEST_DOC_FAIL, error };
}

export function callApi(params) {
  const {
    api,
    success,
  } = params;

  if (typeof api !== 'string') {
    throw new Error('接口地址必须是字符串');
  }

  if (typeof success !== 'string') {
    throw new Error('success 参数必须传，类型为actionType中定义');
  }

  return {
    type: CALL_API,
    payload: params,
  };
}
