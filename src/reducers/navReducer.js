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

const navigationRouter = AppNavigator.router.getStateForAction;
const initialState = navigationRouter(AppNavigator.router.getActionForPathAndParams('Splash'));

const navReducer = (state = initialState, action) => {
	console.log('##>NavReducer action: ', action, 'State: ', state)
	switch (action.type) {
		case 'Splash':
			nextState = navigationRouter(resetTo('Splash'), state);
		break;

		case 'Login':
			nextState = navigationRouter(resetTo('Login'), state);
		break;

		case 'Drawer':
			nextState = navigationRouter(resetTo('Drawer'), state);
		break;
		
		case 'Home':
			nextState = navigationRouter(navigateTo('Home'), state);
		break;

		case 'Profile':
			nextState = navigationRouter(navigateTo('Profile'), state);
		break;

		default:
		  nextState = navigationRouter(action, state);
		  break;
	}

	// Simply return the original `state` if `nextState` is null or undefined.
	return nextState || state;
};

/**
 * reset navigator
 * @param {*} route 
 */
const resetTo = (route) =>  {
	return (
		NavigationActions.reset({
			index: 0,
			key: null,
			actions: [NavigationActions.navigate({ routeName: route })],
		})
	)
}

/**
 * navigat to navigator
 * @param {*} route 
 */
const navigateTo = (route) =>  {
	return (
		NavigationActions.navigate({
			routeName: route
		})
	)
}

export default navReducer;