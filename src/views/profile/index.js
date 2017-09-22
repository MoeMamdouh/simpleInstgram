
'use strict';

import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	TextInput,
	ScrollView,
	ListView,
	LayoutAnimation,
	RefreshControl,
	
} from 'react-native'


export default class Profile extends Component {
	static navigationOptions = (navigation, screenProps) => ({
		// header: null,
		title: (navigation.navigation.state.params)? navigation.navigation.state.params.user : 'Visitor',
	});
	
	constructor(props) {
		super(props);
		this.state = {
		}
		console.log('Profile', this.props)
	}
	
	componentWillMount() {
	}

	componentDidMount() {
	}

	
	render() {
		return (
			<Text>Profile</Text>
		)
	}
}