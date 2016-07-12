import {
  SHOW_LOADING,
  HIDE_LOADING,
  REQUEST_DOC_DONE,
} from '../constants/actionType';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
  show: false,
  text: '加载中。。。',
});

export default (state = initialState, action) => {
  let newState = state;
  switch (action.type) {
    case SHOW_LOADING:
      newState = state.merge({
        show: true,
        text: action.payload.text,
      });
      return newState;
    case REQUEST_DOC_DONE:
    case HIDE_LOADING:
      newState = newState.merge({
        show: false,
      });
      return newState;
    default :
      return state;
  }
};
