import React, { Component } from 'react';
import {
	View, Text, Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import tabsNavigator from './tabsNavigator';
import Login from './../views/login/login';

const MainNavigator = StackNavigator({
	Login: { screen: Login },
	Tabs: { screen: tabsNavigator },
},
	// { headerMode: 'screen' }
);

export default MainNavigator
