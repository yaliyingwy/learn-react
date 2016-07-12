/**
 * 必填参数
 * @return {[type]} [description]
 */
function required(paramName = '') {
  throw new Error(`函数必填参数${paramName}不能为空！`);
}

/**
 * 从url中获取参数对象
 * @param  {String} url 待解析的url
 * @return {Object}     参数对象
 */
function getUrlQueryObj(url) {
  const query = {};
  if (url.includes('=')) {
    const urlParts = url.split('?');
    let queryStr;
    if (urlParts.length > 1) {
      queryStr = urlParts[1];
    } else {
      queryStr = urlParts[0];
    }
    const queryArr = queryStr.split('&');
    queryArr.forEach((q) => {
      let key = '';
      let value = '';
      const ind = q.indexOf('=');
      if (ind > -1) {
        key = q.substring(0, ind);
        value = q.substring(ind + 1);
      }

      query[key] = decodeURIComponent(value);

      // const arr = q.split('=');
      // const value = decodeURIComponent(arr[1]);
      // query[arr[0]] = value;
    });
  }
  return query;
}


function json2Form(obj) {
  let result = '';
  Object.keys(obj).forEach((key, index) => {
    result += `${index === 0 ? '' : ','}${key}`;
  });
  return result;
}

function valueBettween({
  min = required('最小值min'),
  max = required('最大值max'),
  value = required('输入值value'),
}) {
  return Math.min(Math.max(min, value), max);
}

function abstractMethod(msg = '该方法为抽象方法，必须实现') {
  throw new Error(msg);
}

function trimHtmlTags(html) {
  const reg = /(<([^>]+)>)/ig;
  return html ? html.replace(reg, '') : '';
}


function actionCreator({ type, payload, err }) {
  if (!type) {
    throw new Error('action 的type 不能为空！');
  }

  return {
    type,
    payload,
    err,
  };
}


function decimalToHex(d, padding = 2) {
  let hex = Number(d).toString(16);

  while (hex.length < padding) {
    hex = `0${hex}`;
  }

  return hex;
}

export {
  required,
  abstractMethod,
  valueBettween,
  getUrlQueryObj,
  trimHtmlTags,
  json2Form,
  actionCreator,
  decimalToHex,
};
