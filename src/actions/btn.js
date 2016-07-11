import {
  DISABLE_BTN,
  ENABLE_BTN,
} from '../constants/actionType';

export function enable() {
	return {
		type: ENABLE_BTN,
	};
}

export function disable() {
	return {
		type: DISABLE_BTN
	}
}
