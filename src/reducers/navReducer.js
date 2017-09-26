import { config } from './../config/';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from './../actions/types';

import { MainNavigator } from './../navigators/mainNavigator';

const initialState = MainNavigator.router.getStateForAction(MainNavigator.router.getActionForPathAndParams('Login'));

const navReducer = (state = initialState, action) => {
	console.log('##>NavReducer action: ', action, 'State: ', state)
	const nextState = MainNavigator.router.getStateForAction(action, state);

	// Simply return the original `state` if `nextState` is null or undefined.
	return nextState || state;
};

export default navReducer;