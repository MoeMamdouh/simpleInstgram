import { config } from './../config/';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from './../actions/types';

import { NavigationActions } from 'react-navigation';
import { MainNavigator } from './../navigators/mainNavigator';

const initialState = MainNavigator.router.getStateForAction(MainNavigator.router.getActionForPathAndParams('Login'));

const navReducer = (state = initialState, action) => {
	console.log('##>NavReducer action: ', action, 'State: ', state)
	switch (action.type) {
		case 'Login':
		  nextState = MainNavigator.router.getStateForAction(
			NavigationActions.back(),
			state
		  );
		  break;
		case 'Drawer':
		  nextState = MainNavigator.router.getStateForAction(
			NavigationActions.navigate({ routeName: 'Drawer' }),
			state
		  );
		  break;
		default:
		  nextState = MainNavigator.router.getStateForAction(action, state);
		  break;
	}

	// Simply return the original `state` if `nextState` is null or undefined.
	return nextState || state;
};

export default navReducer;