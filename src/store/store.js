import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';
import api from '../middleware/api';

const store = createStore(
  rootReducer,
  {},
  applyMiddleware(thunkMiddleware, api, createLogger({
    duration: true,
    // 打印immutablejs的state
    stateTransformer: (state) => {
      const result = {};
      Object.keys(state).forEach((key) => {
        result[key] = state[key].toJS();
      });
      return result;
    },
  }))
);

export default store;
