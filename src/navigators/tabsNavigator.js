import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {TabNavigator, TabBarBottom} from "react-navigation";
// import { Icon } from 'react-native-elements'
import { Icon, Button } from 'native-base';
import { COLORS, textStyles, config } from '../config/';
import HomeNavigator from './../navigators/homeNavigator';
import SearchNavigator from './../navigators/searchNavigator';
import ProfileNavigator from './../navigators/profileNavigator';
import AddNavigator from './../navigators/addNavigator';
import NotificationNavigator from './../navigators/notificationNavigator';
import Profile from './../views/profile';

let RouteConfigs = {
	HomeNavigator: {
		screen: HomeNavigator,
		navigationOptions: (navigation) =>({
			// header: null,
			tabBarLabel: 'Home',
			tabBarIcon: ({ tintColor }) => <Icon name="ios-home" style={{color:tintColor}}/>
		}),
	},
	SearchNavigator: {
		screen: SearchNavigator,
		navigationOptions: {
			tabBarLabel: 'search',
			tabBarIcon: ({ tintColor }) => <Icon name="ios-search" style={{color:tintColor}}/>,
		},
	},
	AddNavigator: {
		screen: AddNavigator,
		navigationOptions: {
			tabBarLabel: 'add',
			tabBarIcon: ({ tintColor }) => <Icon name="md-add-circle" style={{color:tintColor}}/>,
		},
	},
	NotificationNavigator: {
		screen: NotificationNavigator,
		navigationOptions: {
			tabBarLabel: 'notifications',
			tabBarIcon: ({ tintColor }) => <Icon name="ios-heart" style={{color:tintColor}}/>,
		},
	},
	ProfileNavigator: {
		screen: ProfileNavigator,
		// screen: props => <Profile {...props} scrseenProps="ffssf" />,
		navigationOptions: (navigation, screenProps) =>
		({
			// title: `${navigation.navigation.state.params.user}'s Profile `,
			tabBarLabel: 'profile',
			tabBarIcon: ({ tintColor }) => <Icon name="ios-person" style={{color:tintColor}}/>,
		}),
	}
}

let TabNavigatorConfig = {
	//component to use as the tab bar, e.g. TabBarBottom (this is the default on iOS), TabBarTop (this is the default on Android)
	tabBarComponent: TabBarBottom,
	//position of the tab bar, can be 'top' or 'bottom'
	tabBarPosition: 'bottom',
	//whether to allow swiping between tabs
	swipeEnabled: true,
	//whether to animate when changing tabs
	animationEnabled: true,
	//whether to lazily render tabs as needed as opposed to rendering them upfront
	// lazy: true,
	//The routeName for the initial tab route when first loading
	initialRouteName: 'HomeNavigator',
	//Array of routeNames which defines the order of the tabs
	//order: ['home', 'profile']
	//Should the back button cause a tab switch to the initial tab? If yes, set to initialRoute, otherwise none. Defaults to initialRoute behavior.
	backBehavior: 'none',
	tabBarOptions: {
		//label and icon color of the active tab
		activeTintColor: COLORS.BLACK,
		//background color of the active tab
		// activeBackgroundColor: '#007aff',

		//label and icon color of the inactive tab
		// inactiveTintColor: COLORS.BRAND_COLOR,
		//background color of the inactive tab
		// inactiveBackgroundColor: COLORS.BRAND_COLOR,

		//whether to show label for tab, default is true
		showLabel: false,
		
		//style object for the tab bar
		// style: {padding:5},

		//style object for the tab label
		// labelStyle: {},

		//style object for the tab
		// tabStyle: {width:150},
	},
}

const tabsNavigator = TabNavigator(RouteConfigs, TabNavigatorConfig)
export default tabsNavigator