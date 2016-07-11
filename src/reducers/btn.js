import {
  DISABLE_BTN,
  ENABLE_BTN,
} from '../constants/actionType';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
  enabled: true
});

export default (state = initialState, action) => {
  let newState = state;
  switch (action.type) {
    case DISABLE_BTN:
      newState = newState.set('enabled', false);
      return newState;
    case ENABLE_BTN:
      newState = newState.set('enabled', true);
      return newState;
    default :
      return state;
  }
};
