import React, { Component } from 'react';
import {
	View, Text
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Settings from './../views/settings';
import { Icon, Button } from 'native-base';

//The route configs object is a mapping from route name to a route config, which tells the navigator what to present for that route.
let RouteConfigs = {
	Add: {
		screen: Settings,
		navigationOptions: ({navigation}) => ({
			title: 'Settings',
			headerLeft:
			<Button transparent onPress={()=>navigation.navigate('DrawerOpen')}>
				<Icon name='ios-menu' style={{color: COLORS.BLACK}}/>
			</Button>,
		}),
	},
}

let StackNavigatorConfig = {
	/* Options for the router: */

	//Sets the default screen of the stack. Must match one of the keys in route configs.
	// initialRouteName: 'Settings',

	//The params for the initial route
	//initialRouteParams

	//Default navigation options to use for screens
	// navigationOptions: ({navigation}) => ({
		
	// }),

	//A mapping of overrides for the paths set in the route configs
	// paths: ['Login',],

	/* Visual options: */

	//Defines the style for rendering and transitions:
	//card - Use the standard iOS and Android screen transitions. This is the default.
	//modal - Make the screens slide in from the bottom which is a common iOS pattern. Only works on iOS, has no effect on Android.
	// mode: 'card',

	//Specifies how the header should be rendered:
	// float - Render a single header that stays at the top and animates as screens are changed. This is a common pattern on iOS.
	// screen - Each screen has a header attached to it and the header fades in and out together with the screen. This is a common pattern on Android.
	// none - No header will be rendered.
	// headerMode: 'none',

	//Use this prop to override or extend the default style for an individual card in stack.
	// cardStyle: {color: 'red'},

	//Function to return an object that overrides default screen transitions.
	// transitionConfig: 

	//Function to be invoked when the card transition animation is about to start.
	// onTransitionStart: () => alert('transition start')

	//Function to be invoked once the card transition animation completes.
	// onTransitionEnd: () => alert('transition End')
}

const SettingsNavigator = StackNavigator(RouteConfigs, StackNavigatorConfig)
export default SettingsNavigator
