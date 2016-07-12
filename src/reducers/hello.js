import {
  REQUEST_DOC_DONE,
  REQUEST_DOC_FAIL,
  REQUEST_DOC,
  REQUEST_BEGIN,
} from '../constants/actionType';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
  doc: '还没有请求数据哦',
  netBusy: false,
});

export default (state = initialState, action) => {
  let newState = state;
  switch (action.type) {
    case REQUEST_BEGIN:
    case REQUEST_DOC:
      newState = newState.merge({
        doc: '正在请求网络数据。。。',
        netBusy: true,
      });
      return newState;
    case REQUEST_DOC_DONE:
      newState = newState.merge({
        doc: action.responseText,
        netBusy: false,
      });
      return newState;
    case REQUEST_DOC_FAIL:
      newState = newState.merge({
        doc: action.error.message,
        netBusy: false,
      });
      return newState;
    default :
      return state;
  }
};
