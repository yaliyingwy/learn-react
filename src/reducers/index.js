import { combineReducers } from 'redux';
import btn from './btn';
import toast from './toast';
import hello from './hello';
import loading from './loading';

export default combineReducers({
  btn,
  toast,
  hello,
  loading,
});

