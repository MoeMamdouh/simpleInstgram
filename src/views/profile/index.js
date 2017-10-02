
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
import { connect } from 'react-redux';
import * as actions from './../../actions';
import ProfileHeaderTitle from './../../components/profileHeaderTitle'

class Profile extends Component {
	// static navigationOptions = (navigation, screenProps) => console.log('@@@',navigation, screenProps) 
	static navigationOptions = (navigation, screenProps) => ({
		title: <ProfileHeaderTitle />,
	});

	constructor(props) {
		super(props);
		this.state = {
		}
	}

	componentWillMount() {
	}

	componentDidMount() {
	}


	render() {
		console.log('=>Profile(render), this.props ', this.props)
		let { currentPost } = this.props
		return (
			<View>
				<Text>Profile</Text>
				<TouchableOpacity onPress={() => this.props.navigation.setParams({ user: 'Lucy' })}>
					<Text>
						asd
					</Text>
				</TouchableOpacity>
				<Text>{currentPost.username}</Text>
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

const mapStateToProps = state => {
	return {
		currentPost: state.currentPost
	};
};

export default connect(mapStateToProps, actions)(Profile);