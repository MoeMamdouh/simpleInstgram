
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

class Profile extends Component {
	static navigationOptions = (navigation, screenProps) => ({
		// header: null,
		title: (navigation.navigation.state.params)? navigation.navigation.state.params.user : 'Visitor',
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
		let {currentPost} = this.props
		if(currentPost) {
			return (
				<View>
					<Text>Profile</Text>
					<TouchableOpacity onPress={() => this.props.navigation.setParams({user: 'Lucy'})}>
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
		} else {
			return <Text>Loading..</Text>
		}
	}
}

const mapStateToProps = state => {
	return {
		// posts: state.posts, 
		currentPost: state.currentPost
	};
};
  
export default connect(mapStateToProps, actions)(Profile);