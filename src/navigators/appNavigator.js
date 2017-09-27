import React, { Component } from 'react';
import {
	View, Text, Button
} from 'react-native';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import MainNavigator from './mainNavigator';
import Launch from './../views/launch';
import Login from './../views/login';
import DrawerNav from './drawerNavigator';
import { connect } from 'react-redux';
import { combineReducers } from 'redux';

//The route configs object is a mapping from route name to a route config, which tells the navigator what to present for that route.
let RouteConfigs = {
	Launch: {
		screen: Launch,
		// Optional: Override the `navigationOptions` for the screen
		navigationOptions: ({navigation}) => ({
			// String that can be used as a fallback for headerTitle. Additionally, will be used as a fallback for tabBarLabel (if nested in a TabNavigator) or drawerLabel (if nested in a DrawerNavigator)
			title: 'Launch',

			// React Element or a function that given HeaderProps returns a React Element, to display as a header. Setting to null hides header.
			// header: null,

			// String or React Element used by the header. Defaults to scene title
			// headerTitle 

			// Title string used by the back button on iOS, or null to disable label. Defaults to the previous scene's headerTitle
			// headerBackTitle 

			// Title string used by the back button when headerBackTitle doesn't fit on the screen. "Back" by default.
			// headerTruncatedBackTitle 

			// React Element to display on the right side of the header
			// headerRight 

			// React Element to display on the left side of the header
			// headerLeft 

			// Style object for the header
			// headerStyle 

			// Style object for the title component
			// headerTitleStyle 

			// Style object for the back title
			// headerBackTitleStyle 

			// Tint color for the header
			// headerTintColor 

			// Color for material ripple (Android >= 5.0 only)
			// headerPressColorAndroid 

			// Whether you can use gestures to dismiss this screen. Defaults to true on iOS, false on Android.
			// gesturesEnabled : false
		}),
	},

	Login: {
		screen: Login,
		// Optional: Override the `navigationOptions` for the screen
		navigationOptions: ({navigation}) => ({
			// String that can be used as a fallback for headerTitle. Additionally, will be used as a fallback for tabBarLabel (if nested in a TabNavigator) or drawerLabel (if nested in a DrawerNavigator)
			title: 'Login',

			// React Element or a function that given HeaderProps returns a React Element, to display as a header. Setting to null hides header.
			// header: null,

			// String or React Element used by the header. Defaults to scene title
			// headerTitle 

			// Title string used by the back button on iOS, or null to disable label. Defaults to the previous scene's headerTitle
			// headerBackTitle 

			// Title string used by the back button when headerBackTitle doesn't fit on the screen. "Back" by default.
			// headerTruncatedBackTitle 

			// React Element to display on the right side of the header
			// headerRight 

			// React Element to display on the left side of the header
			// headerLeft 

			// Style object for the header
			// headerStyle 

			// Style object for the title component
			// headerTitleStyle 

			// Style object for the back title
			// headerBackTitleStyle 

			// Tint color for the header
			// headerTintColor 

			// Color for material ripple (Android >= 5.0 only)
			// headerPressColorAndroid 

			// Whether you can use gestures to dismiss this screen. Defaults to true on iOS, false on Android.
			// gesturesEnabled : false
		}),
	},
	Drawer: { 
		screen: DrawerNav,
		navigationOptions: ({navigation}) => ({
			// gesturesEnabled : false
		}),
	},
	// App: { 
	// 	screen: MainNavigator,
	// 	navigationOptions: ({navigation}) => ({
	// 		// gesturesEnabled : false
	// 	}),
	// },
}

let StackNavigatorConfig = {
	/* Options for the router: */

	//Sets the default screen of the stack. Must match one of the keys in route configs.
	initialRouteName: 'Launch',

	//The params for the initial route
	//initialRouteParams

	//Default navigation options to use for screens
	navigationOptions: ({navigation}) => ({
		gesturesEnabled : false
	}),

	//A mapping of overrides for the paths set in the route configs
	// paths: ['Launch',],

	/* Visual options: */

	//Defines the style for rendering and transitions:
	//card - Use the standard iOS and Android screen transitions. This is the default.
	//modal - Make the screens slide in from the bottom which is a common iOS pattern. Only works on iOS, has no effect on Android.
	mode: 'card',

	//Specifies how the header should be rendered:
	// float - Render a single header that stays at the top and animates as screens are changed. This is a common pattern on iOS.
	// screen - Each screen has a header attached to it and the header fades in and out together with the screen. This is a common pattern on Android.
	// none - No header will be rendered.
	headerMode: 'none',

	//Use this prop to override or extend the default style for an individual card in stack.
	// cardStyle: {color: 'red'},

	//Function to return an object that overrides default screen transitions.
	// transitionConfig: 

	//Function to be invoked when the card transition animation is about to start.
	// onTransitionStart: () => alert('transition start')

	//Function to be invoked once the card transition animation completes.
	// onTransitionEnd: () => alert('transition End')
}

export const AppNavigator = StackNavigator(RouteConfigs, StackNavigatorConfig)

class App extends React.Component {
	render() {
	  return (
		<AppNavigator navigation={addNavigationHelpers({
			dispatch: this.props.dispatch,
			state: this.props.nav,
		})} />
	  );
	}
  }


const mapStateToProps = (state) => ({
  nav: state.nav
});

export const AppWithNavigationState = connect(mapStateToProps)(App);