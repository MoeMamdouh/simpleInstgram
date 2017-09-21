import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {TabNavigator, TabBarBottom} from "react-navigation";
// import { Icon } from 'react-native-elements'
import { Icon } from 'native-base';
import { COLORS, textStyles, config } from '../config/';
import Home from './../views/home';
import Search from './../views/search';
import Add from './../views/add';
import Notifications from './../views/notifications';
import Profile from './../views/profile';

let RouteConfigs = {
	home: {
		screen: Home,
		navigationOptions: {
			tabBarLabel: 'Home',
			tabBarIcon: ({ tintColor }) => <Icon name="home" style={{color:tintColor}}/>,
		},
	},
	search: {
		screen: Search,
		navigationOptions: {
			tabBarLabel: 'search',
			tabBarIcon: ({ tintColor }) => <Icon name="search" style={{color:tintColor}}/>,
		},
	},
	add: {
		screen: Add,
		navigationOptions: {
			tabBarLabel: 'add',
			tabBarIcon: ({ tintColor }) => <Icon name="add" style={{color:tintColor}}/>,
		},
	},
	notifications: {
		screen: Notifications,
		navigationOptions: {
			tabBarLabel: 'notifications',
			tabBarIcon: ({ tintColor }) => <Icon name="heart" style={{color:tintColor}}/>,
		},
	},
	profile: {
		screen: Profile,
		navigationOptions: {
			tabBarLabel: 'profile',
		 	 tabBarIcon: ({ tintColor }) => <Icon name="person" style={{color:tintColor}}/>,
		},
	}
}

let TabNavigatorConfig = {
	tabBarComponent: TabBarBottom,
	tabBarPosition: 'bottom',
	animationEnabled: true,
	tabBarOptions: {
		activeTintColor: COLORS.GRAY,
		// activeTintColor: '#007aff',
		showLabel: false,
		style: {backgroundColor: COLORS.BRAND_COLOR},
		// iconStyle: {backgroundColor: '#fff'}
	}
}

const tabsNavigator = TabNavigator(RouteConfigs, TabNavigatorConfig)

export default tabsNavigator