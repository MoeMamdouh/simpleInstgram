'use strict';
import React, { Component } from 'react';
import {
	View,
} from 'react-native'
import { Container, Content,  Text, Button, Thumbnail } from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProfileHeaderTitle from './../../components/profileHeaderTitle'
import { styles } from './style';
import { COLORS, textStyles, config } from './../../config/';
import PostsList from '../../components/postsList';
import { userPosts } from './../../actions';

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

		// this.props.userPosts(1);
	}

	componentDidMount () {
		this.props.userPosts(this.props.navigation.state.params.currentPost.userId);
	}

	// componentWillReceiveProps (nextProps) {
	// 	nextProps.userPosts(userId);
	// }
	
	render() {
		console.log('=>Profile(render), this.props ', this.props)
		const { navigation, postsData } = this.props
		const userPost = postsData.userPosts;
		const params = navigation.state.params;
		if (params) {
			const { currentPost } = params
			const {avatar, username, userId} = currentPost
			// this.props.userPosts(userId);
			return (
				<Container style={styles.container}>
					<Content>
						{/* user info block */}
						<View style={styles.userInfo}>
							{/* user info top */}
							<View style={styles.userInfoTop}>
								{<Thumbnail source={{ uri: avatar }} style={styles.profilePicture} />}
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
								<Text style={[styles.userName, textStyles.BoldBlackMedium]}>{username}</Text>
								<Text style={[styles.userBio, textStyles.grayProfileInfo]}>The allure of exotic spices launched Columbus on his journey of discovery. Today, home chefs can</Text>
							</View>
						</View>

						<PostsList posts={userPost} />
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
		postsData: state.postsData,
	};
};

const mapDispatchToProps = (dispatch) => (
	bindActionCreators({
		userPosts,
	}, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Profile);