
'use strict';

import React, { Component } from 'react';
import {
	View,
	Image,
	TouchableOpacity,
	TextInput,
	ScrollView,
	ListView,
	LayoutAnimation,
	RefreshControl,
} from 'react-native'
import { Container, Content, Header, Title, Left, Right, Body, Icon, StyleProvider, Text, Button, Thumbnail } from 'native-base';
// import { Container, Content, Header, Title, Left, Right, Body, Icon, StyleProvider, Text, Button, Badge } from 'native-base';
import { connect } from 'react-redux';
import * as actions from './../../actions';
import ProfileHeaderTitle from './../../components/profileHeaderTitle'
import { styles } from './style';
import { COLORS, textStyles, config } from './../../config/';

class Profile extends Component {
	// static navigationOptions = (navigation, screenProps) => console.log('@@@',navigation, screenProps) 
	static navigationOptions = (navigation) => {
		navigation = navigation.navigation;
		if (navigation.state.params) {
			let { currentPost } = navigation.state.params;
			return ({
				title: <ProfileHeaderTitle currentPost={currentPost} />,
			})
		}
	};

	constructor(props) {
		super(props);
		this.state = {
		}
	}

	render() {
		console.log('=>Profile(render), this.props ', this.props)
		let { navigation } = this.props
		let params = navigation.state.params
		if (params) {
			const { currentPost } = params
			return (
				<Container style={styles.container}>
					<Content>
						{/* user info block */}
						<View style={styles.userInfo}>
							{/* user info top */}
							<View style={styles.userInfoTop}>
								{<Thumbnail source={{ uri: currentPost.avatar }} style={styles.profilePicture} />}
								{/* cases icon */}
								<View style={styles.userIcons}>
									<View style={styles.iconBlock}>
										<Text style={textStyles.BoldBlackMedium}>30</Text>
										<Text style={textStyles.graySmallD}>posts</Text>
									</View>
									{/* likes icon */}
									<View style={styles.iconBlock}>
										<Text style={textStyles.BoldBlackMedium}>30K </Text>
										<Text style={textStyles.graySmallD}>followers</Text>
									</View>
									{/* viwes icon */}
									<View style={styles.iconBlock}>
										<Text style={textStyles.BoldBlackMedium}>30K </Text>
										<Text style={textStyles.graySmallD}>following</Text>
									</View>
								</View>
							</View>

							{/* user info bottom */}
							<View style={styles.userInfoBottom}>
								<Text style={[styles.userName, textStyles.BoldBlackMedium]}>{currentPost.username}</Text>
								<Text style={[styles.userBio, textStyles.grayProfileInfo]}>The allure of exotic spices launched Columbus on his journey of discovery. Today, home chefs can</Text>
							</View>
						</View>
					</Content>
				</Container>
			)
		} else {
			return <Text>Loading..</Text>
		}

	}
}

const mapStateToProps = state => {
	return {
		currentPost: state.currentPost
	};
};

export default connect(mapStateToProps, actions)(Profile);