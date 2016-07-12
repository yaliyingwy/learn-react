import { DEBUG, API_SERVER, API_DEV_SERVER } from '../constants/setting';
import { json2Form } from '../utils/func';

import {
  CALL_API,
  SHOW_LOADING,
  HIDE_LOADING,
  SHOW_TOAST,
  REQUEST_BEGIN,
} from '../constants/actionType';

import cacheMap, {
  USE_LATEST,
  DOUBLE_CB,
  NO_CACHE,
  ONLY_CACHE,
} from '../constants/cache';

import {
  toast,
} from '../actions/toast';

const API_ROOT = DEBUG ? API_DEV_SERVER : API_SERVER;

function callApi(api, options) {
  const fullUrl = (api.indexOf('http') === -1) ? API_ROOT + api : api;

  return fetch(fullUrl, options)
    .then(response =>
      response.text().then(text => ({ text, response }))
    ).then(({ text, response }) => {
      if (!response.ok) {
        return Promise.reject(text);
      }

      return { text };
    });
}


export default store => next => action => {

  if (action.type !== CALL_API) {
    return next(action);
  }

  const {
    api,
    method = 'GET',
    body = {},
    headers = {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    loading = false,
    success,
    fail = SHOW_TOAST,
    cache = NO_CACHE,
  } = action.payload;

  function actionWith(data) {
    const finalAction = Object.assign({}, action, data);
    delete finalAction[CALL_API];
    return finalAction;
  }

  if (cache === ONLY_CACHE && !cacheMap.get(api)) {
    throw new Error('当cache类型为ONLY_CACHE时，cacheMap中必须指定失效时间');
  }

  let cacheData;

  if (cache !== NO_CACHE) {
    cacheData = JSON.parse(localStorage.getItem(api));
  }

  console.log('cacheData:', cacheData);

  if (cacheData) {
    next(actionWith({
      responseText: cacheData.responseText,
      type: success,
    }));

    if (cache === ONLY_CACHE && (new Date().getTime() - cacheData.updateAt) < cacheMap.get(api)) {
      return;
    }
  } else {
    next(actionWith({
      type: REQUEST_BEGIN,
    }));    
  }

  if (loading && !cacheData) {
    next(actionWith({
      type: SHOW_LOADING,
      payload: { text: '网络请求进行中' }, 
    }));
  }

  const options = {
    headers,
    body: {
      version: '111',
      data: json2Form(body),
      uuid: 'dsfd',
    },
    method,
  };



  return callApi(api, options).then(
    response => {
      if (loading) {
        next(actionWith({ type: HIDE_LOADING }));
      }
      // todo: 检查json,code为成功才存
      if (cache !== NO_CACHE) {
        localStorage.setItem(api, JSON.stringify({
          responseText: response.text,
          updateAt: new Date().getTime(),
        }));
      }

      if (!cacheData || cache === DOUBLE_CB) {
        next(actionWith({
          responseText: response.text,
          type: success,
        }));
      }
    },
    error => {
      if (loading) {
        next(actionWith({ type: HIDE_LOADING }));
      }
      if (fail === SHOW_TOAST) {
        next(toast(error.message || '请求出错'), 3000);
      } else {
        next(actionWith({
          type: fail,
          error: error.message || '请求出错',
        }));
      }
    }
  );
};
