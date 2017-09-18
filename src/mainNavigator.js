import React, { Component } from 'react';
import {
	View, Text, Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './views/home/home';
import Login from './views/login/login';

const MainNavigator = StackNavigator({
	Login: { screen: Login },
	Home: { screen: Home },
},
	// { headerMode: 'screen' } 
);

export default MainNavigator
