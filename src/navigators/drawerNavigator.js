import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { DrawerNavigator, DrawerItems } from "react-navigation";
// import { Icon } from 'react-native-elements'
import { Icon, Button } from 'native-base';
import { COLORS, textStyles, config } from '../config/';
import TabNav from './../navigators/tabsNavigator';
import SettingsNavigator from './../navigators/settingsNavigator';
import Drawer from './../components/drawer';
import DrawerItem from './../components/drawerItem';
import { styles } from './../components/drawer/style';


let RouteConfigs = {
	Tab: {
		screen: TabNav,
		navigationOptions: (navigation) => ({
			// Generic title that can be used as a fallback for headerTitle and drawerLabel
			// title : 'Home',
			// String, React Element or a function that given { focused: boolean, tintColor: string } returns a React.Element, to display in drawer sidebar. When undefined, scene title is used
			// drawerLabel : ({ focused, tintColor }  ) => (
			// 	<View style={{flex: 1,height: 100, flexDirection:'row', justifyContent: 'space-between'}}>
			// 		<Text>{focused} {tintColor}</Text>
			// 		<Text> Home </Text>
			// </View>),
			drawerLabel: ({ focused, tintColor }) => <DrawerItem label="Home" icon="ios-home" tintColor={tintColor} badge={5} />,
			// React Element or a function, that given { focused: boolean, tintColor: string } returns a React.Element, to display in drawer sidebar
			// drawerIcon : ({ tintColor }) => (
			// 	<Icon name="ios-home" style={{color:tintColor}}/>
			// ),
			// Specifies the lock mode of the drawer. This can also update dynamically by using screenProps.lockMode on your top level router.
			drawerLockMode: true,
		}),
	},
	Settings: {
		screen: SettingsNavigator,
		navigationOptions: (navigation) => ({
			// Generic title that can be used as a fallback for headerTitle and drawerLabel
			// title : 'Settings',
			// String, React Element or a function that given { focused: boolean, tintColor: string } returns a React.Element, to display in drawer sidebar. When undefined, scene title is used
			drawerLabel: ({ focused, tintColor }) => <DrawerItem label="settings" icon="ios-settings" tintColor={tintColor} />,
			// React Element or a function, that given { focused: boolean, tintColor: string } returns a React.Element, to display in drawer sidebar
			// drawerIcon : ({ tintColor }) => (
			// 	<Icon name="ios-settings" style={{color:tintColor}}/>
			// ),
			// Specifies the lock mode of the drawer. This can also update dynamically by using screenProps.lockMode on your top level router.
			drawerLockMode: true,
		}),
	},
}

let DrawerNavigatorConfig = {
	//Width of the drawer
	drawerWidth: 300,

	// Options are left or right. Default is left position.
	// drawerPosition: 'right',

	// Component used to render the content of the drawer, for example, navigation items. Receives the navigation prop for the drawer. Defaults to DrawerItems. For more information, see below.
	contentComponent: props => <Drawer props={props} />,
	// contentComponent: props => <ScrollView><DrawerItems {...props} /></ScrollView>,


	// Configure the drawer content, see below.
	contentOptions: {
		// the array of routes, can be modified or overridden
		// items: ['Settings'],

		// key identifying the active route
		// activeItemKey: '',

		// label and icon color of the active label
		activeTintColor: COLORS.BLACK,

		//background color of the active label
		activeBackgroundColor: COLORS.LIGHT_GRAY,

		// label and icon color of the inactive label
		inactiveTintColor: COLORS.off_GRAY,

		// background color of the inactive label
		// inactiveBackgroundColor

		// function to be invoked when an item is pressed
		// onItemPress(route)

		// style object for the content section
		// style: {height: 200, backgroundColor: 'red'},

		// style object to overwrite Text style inside content section, when your label is a string
		labelStyle: styles.drawerLabel,
	},

	// Enable native animations. Default is true.
	// useNativeAnimations

	/* Several options get passed to the underlying router to modify navigation logic: */

	// The routeName for the initial route.
	// initialRouteName: 'Settings',

	// Array of routeNames which defines the order of the drawer items.
	// order: ['Settings']

	// Provide a mapping of routeName to path config, which overrides the paths set in the routeConfigs.
	// paths:

	// Should the back button cause switch to the initial route? If yes, set to initialRoute, otherwise none. Defaults to initialRoute behavior.
	// backBehavior:

}

const DrawerNav = DrawerNavigator(RouteConfigs, DrawerNavigatorConfig);
export default DrawerNav