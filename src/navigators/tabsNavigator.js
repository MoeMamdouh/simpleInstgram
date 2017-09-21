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


const tabsNavigator = TabNavigator(
	{
		home: {
			screen: Home,
			navigationOptions: {
				tabBarLabel: 'Home',
				tabBarIcon:  <Icon name="home" />
			},
		},
		search: {
			screen: Search,
			navigationOptions: {
				tabBarLabel: 'search',
				tabBarIcon: ({ tintColor }) =>
					<Icon
						name="search"
						color={tintColor}
			
					/>,
			},
		},
		add: {
			screen: Add,
			navigationOptions: {
				tabBarLabel: 'add',
				tabBarIcon: <Icon name="add" />
			},
		},
		notifications: {
			screen: Notifications,
			navigationOptions: {
				tabBarLabel: 'notifications',
				tabBarIcon: <Icon name="heart"/>
			},
		},
		profile: {
			screen: Profile,
			navigationOptions: {
				tabBarLabel: 'profile',
				tabBarIcon: <Icon
				reverse
				name='person'
			  />
			},
		}
	}, {
		tabBarComponent: TabBarBottom,
		tabBarPosition: 'bottom',
		// animationEnabled: true,
		tabBarOptions: {
			activeTintColor: '#007aff',
			showLabel: false,
			style: {backgroundColor: COLORS.BRAND_COLOR},
			iconStyle: {backgroundColor: '#fff'}
		}
	}
);

export default tabsNavigator