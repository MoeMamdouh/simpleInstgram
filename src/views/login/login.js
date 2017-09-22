import React, { Component } from 'react';
import {
	View, Text, Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Loin extends React.Component {
	render() {
		const { navigate } = this.props.navigation;
		return (
			<View>
				<Button
					onPress={() => navigate('Tabs', { user: 'Moe' })}
					title="Login"
				/>
			</View>
		);
	}
}