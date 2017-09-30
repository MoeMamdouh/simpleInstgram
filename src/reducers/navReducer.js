import { config } from './../config/';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from './../actions/types';

import { NavigationActions } from 'react-navigation';
import { AppNavigator } from './../navigators/appNavigator';

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Splash'));

const navReducer = (state = initialState, action) => {
	console.log('##>NavReducer action: ', action, 'State: ', state)
	switch (action.type) {
		case 'Splash':
			nextState = AppNavigator.router.getStateForAction(NavigationActions.reset({
				index:0,
				key: null,
				actions: [
					NavigationActions.navigate({ routeName: 'Splash'})
				]
			}),
			state);
		break;

		// case 'Login':
		// 	nextState = AppNavigator.router.getStateForAction(
		// 		NavigationActions.navigate({ routeName: 'Login' }),
		// 		state
		// 	);
		// break;

		case 'Login':
			nextState = AppNavigator.router.getStateForAction(NavigationActions.reset({
				index:0,
				key: null,
				actions: [
					NavigationActions.navigate({ routeName: 'Login'})
				]
			}),
			state);
		break;

		  
		// case 'Drawer':
		// 	nextState = AppNavigator.router.getStateForAction(
		// 		NavigationActions.navigate({ routeName: 'Drawer' }),
		// 		state
		// 	);
		// break;
		
		case 'Drawer':
			nextState = AppNavigator.router.getStateForAction(NavigationActions.reset({
				index:0,
				key: null,
				actions: [
					NavigationActions.navigate({ routeName: 'Drawer'})
				]
			}),
			state);
		break;
		
		case 'Profile':
			nextState = AppNavigator.router.getStateForAction(
				NavigationActions.navigate({ routeName: 'Profile' }),
				state
			);
		break;
		
		case 'App':
			nextState = AppNavigator.router.getStateForAction(
				NavigationActions.navigate({ routeName: 'App' }),
				state
			);
		break;

		default:
		  nextState = AppNavigator.router.getStateForAction(action, state);
		  break;
	}

	// Simply return the original `state` if `nextState` is null or undefined.
	return nextState || state;
};

export default navReducer;