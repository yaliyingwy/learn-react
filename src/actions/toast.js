import {
  SHOW_TOAST,
  HIDE_TOAST,
} from '../constants/actionType';

export function toast(text, time = 1500) {
  return (dispatch) => {
    const timestamp = new Date().getTime();
    dispatch({
      type: SHOW_TOAST,
      payload: {
        text,
        timestamp,
      },
    });

    setTimeout(() => {
      dispatch({
        type: HIDE_TOAST,
        payload: {
          timestamp,
        },
      });
    }, time);
  };
}
