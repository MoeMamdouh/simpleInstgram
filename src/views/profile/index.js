
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