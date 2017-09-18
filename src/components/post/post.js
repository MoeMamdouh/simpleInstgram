import React, { Component } from 'react';
import {
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
	Image,
	Text,
	TextInput,
	Dimensions,
} from 'react-native';

import { styles } from './postStyle';
import { COLORS, textStyles } from './../../config/';
import { date, nativeFunctions } from './.././../lib/';
import Swiper from 'react-native-swiper';
import DoubleClick from 'react-native-double-click';
import { Thumbnail } from 'native-base';

const { width, height } = Dimensions.get('window');

const
	LIKE_ICON = require('../../../images/icons/like.png'),
	LIKE_ACTIVE_ICON = require('../../../images/icons/like_active.png'),
	COMMENT_ICON = require('../../../images/icons/comment.png'),
	SEND_ICON = require('../../../images/icons/send.png'),
	SAVE_ICON = require('../../../images/icons/save.png');

export default class Post extends Component {

	constructor(props) {
		super(props)
		this.state = {
			postObject: this.props.postObject,
			lastPress: 0,
		}
	}

	componentWillReceiveProps(nextProps) {
		const { postObject } = nextProps;

		this.setState({ postObject });
	}

	/**
	 * click on like button
	 */
	toggleLikePost() {
		let { isLiked } = this.state.postObject;
		if (isLiked == false) {
			this.like();
		} else {
			this.disLike();
		}
	}

	/**
	 * like post
	 */
	like() {
		let { postObject } = this.state;
		let { isLiked } = this.state.postObject;
		if(!isLiked) {
			postObject.isLiked = true;
			postObject.numOfLikes++;
			this.setState({
				postObject
			})
			nativeFunctions.toast('liked!')
		}
	}

	/**
	 * dislike post
	 */
	disLike() {
		let { postObject } = this.state;
		let { isLiked } = this.state.postObject;
		if(isLiked) {
			postObject.isLiked = false;
			postObject.numOfLikes--;
			this.setState({
				postObject
			})
			nativeFunctions.toast('dislike!')
		}
	}

	/**
	  share post
	 */
	sharePost() {
		let { postObject } = this.state;
		let { description, images } = postObject;
		nativeFunctions.share(description, images[0])

	}

	/**
	 * handle double tap on th post
	 * @param {*} postObject 
	 */
	tapOnImage(postObject) {
		 var delta = new Date().getTime() - this.state.lastPress;

		if(delta < 500) {
			// double tap happend
			this.like(postObject)
		} 

		this.setState({
			lastPress: new Date().getTime()
		})

	}
	
	render() {
		let that = this;
		const { navigate } = this.props.navigation;
		let { postObject } = this.state;
		let { username, avatar, images, isLiked, numOfLikes, description, created_time } = postObject;
		let postDate = date.getDateFormat(created_time)
		return (
			<View style={styles.post}>
				{/*user*/}
				<View style={styles.userBlock}>
					<View style={styles.userBlockLeft}>
						<View style={styles.avatar}>
							<Thumbnail style={styles.avatarImage} source={{ uri: avatar }} />
						</View>
						<View style={styles.username}>
							<Text style={[textStyles.BlackBoldSmall, styles.usernameText]}>{username}</Text>
						</View>
					</View>
					<View style={styles.userBlockRight}>
						<Text style={textStyles.graySmall}>{postDate}</Text>
						{/*<TouchableOpacity>
							<Text style={textStyles.grayMedium}>...</Text>
						</TouchableOpacity>*/}
					</View>
				</View>
				{/*End user*/}

				{/*Images*/}
				<Swiper
					height={320}
					scrollEnabled={true}
					showsButtons={false}
					index={0}
					ref={(swiper) => { this._swiper = swiper; }}
					//onMomentumScrollEnd={this._onMomentumScrollEnd.bind(this)}
					loop={false}
					autoplay={false}
					horizontal={true}
					showsPagination={true}
					paginationStyle={{ bottom: 0 }}
					dotStyle={styles.dot}
					activeDotStyle={[styles.dot, styles.activeDot]}
					ref={(swiper) => { this._swiper = swiper; }}
				>
					{images.map(function (image, index) {
						return (
							<View>
								{/*<DoubleClick onClick={() => that.toggleLikePost(postObject)}>*/}
								<TouchableWithoutFeedback onPress={()=>that.tapOnImage(postObject)}>
									<Image style={styles.imagePost} source={{ uri: image }} />
								</TouchableWithoutFeedback>
								{/*</DoubleClick>*/}
							</View>
						)
					})}
				</Swiper>
				{/*End Of Images*/}

				{/*Post Body*/}
				<View style={styles.postBody}>
					{/*actions buttons*/}
					<View style={styles.actions}>
						<View style={styles.actionsLeft}>
							<TouchableOpacity onPress={() => this.toggleLikePost(postObject)}>
								<Image style={[styles.actionIcon, styles.likeIcon]} source={isLiked ? LIKE_ACTIVE_ICON : LIKE_ICON} />
							</TouchableOpacity>

							<TouchableOpacity onPress={() => nativeFunctions.toast('comments will be added soon ')}>
								<Image style={[styles.actionIcon, styles.commentIcon]} source={COMMENT_ICON} />
							</TouchableOpacity>

							<TouchableOpacity onPress={() => this.sharePost()}>
								<Image style={[styles.actionIcon, styles.sendIcon]} source={SEND_ICON} />
							</TouchableOpacity>
						</View>

						<View style={styles.actionsRight}>
							<TouchableOpacity onPress={() => navigate('Tabs')}>
							{/* <TouchableOpacity onPress={() => nativeFunctions.toast('save posts will be added soon ')}> */}
								<Image style={[styles.actionIcon, styles.saveIcon]} source={SAVE_ICON} />
							</TouchableOpacity>
						</View>
					</View>
					{/*End actions btns*/}

					{/*Likes*/}
					<View style={styles.likes}>
						<Text style={[textStyles.BlackBoldSmall, styles.numOfLikes]}>{numOfLikes ? numOfLikes : 0}</Text>
						<Text style={[textStyles.BlackBoldSmall, styles.likesText]}> likes</Text>
					</View>
					{/*End Likes*/}

					{/*description*/}
					<View style={styles.description}>
						<Text>
							<Text style={[textStyles.BlackBoldSmall, styles.usernameText]}>{username} </Text>
							{description}
						</Text>
					</View>
					{/*End description*/}
				</View>
				{/*End Post Body*/}
			</View>
		)
	}
}