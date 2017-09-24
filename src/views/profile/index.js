
'use strict';

import React, { Component } from 'react';
import {
	Text,
	View,
	Image,
	TouchableOpacity,
	TextInput,
	ScrollView,
	ListView,
	LayoutAnimation,
	RefreshControl,
	Button,
} from 'react-native'
// import { Container, Content, Header, Title, Left, Right, Body, Icon, StyleProvider, Text, Button, Badge } from 'native-base';

export default class Profile extends Component {
	static navigationOptions = (navigation, screenProps) => ({
		// header: null,
		title: (navigation.navigation.state.params)? navigation.navigation.state.params.user : 'Visitor',
	});
	
	constructor(props) {
		super(props);
		this.state = {
		}
		// console.log('Profile', this.props)
	}
	
	componentWillMount() {
	}

	componentDidMount() {
	}

	
	render() {
		return (
			<View>
				<Text>Profile</Text>
				<TouchableOpacity onPress={() => this.props.navigation.setParams({user: 'Lucy'})}>
					<Text>
						asd
					</Text>
				</TouchableOpacity>
				{/*<Button
					onPress={() => this.props.navigation.goBack()}
					title="Go back from this HomeScreen"
				/>
				<Button
					onPress={() => this.props.navigation.goBack(null)}
					title="Go back anywhere"
				/>
				<Button
					onPress={() => this.props.navigation.goBack('screen-123')}
					title="Go back from screen-123"
				/>*/}
			</View>
		)
	}
}