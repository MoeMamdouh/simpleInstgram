import React, { Component } from 'react';
import {
	View, Text, Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Loin extends React.Component {
	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
				<Button
					onPress={() => navigate('Drawer', { user: 'Moe' })}
					title="Login"
				/>
			</View>
		);
	}
}