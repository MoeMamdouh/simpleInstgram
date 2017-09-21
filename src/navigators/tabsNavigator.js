import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {TabNavigator} from "react-navigation";
// import { Icon } from 'react-native-elements'
import { Icon } from 'native-base';
import Home from './../views/home/home';
import { COLORS, textStyles, config } from '../config/';


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
			screen: Home,
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
			screen: Home,
			navigationOptions: {
				tabBarLabel: 'add',
				tabBarIcon: <Icon name="add" />
			},
		},
		notifications: {
			screen: Home,
			navigationOptions: {
				tabBarLabel: 'notifications',
				tabBarIcon: <Icon name="heart"/>
			},
		},
		profile: {
			screen: Home,
			navigationOptions: {
				tabBarLabel: 'profile',
				tabBarIcon: <Icon
				reverse
				name='person'
			  />
			},
		}
	}, {
		// tabBarPosition: 'bottom',
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