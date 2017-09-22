
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


export default class Notifications extends Component {
	constructor(props) {
		super(props);
		this.state = {
		}
		console.log('Notifications', this.props)
	}
	
	componentWillMount() {
	}

	componentDidMount() {
	}

	
	render() {
		return (
			<Text>Notifications</Text>
		)
	}
}