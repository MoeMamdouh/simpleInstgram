import { config } from './../config/';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED
} from './../actions/types';

const INITIAL_STATE = {
//   email: '',
//   password: ''
	email: config.user.email,
	password: config.user.password
};

export default (state = INITIAL_STATE, action) => {
	console.log('==>AuthReducer action: ', action, 'State: ', state)
	switch (action.type) {
		case EMAIL_CHANGED:
			return { ...state, email: action.payload };
		case PASSWORD_CHANGED:
			return { ...state, password: action.payload };
		default:
		return state;
	}
};
