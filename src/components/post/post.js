import React, { Component } from 'react';
import {
	TouchableOpacity,
	View,
	Image,
	Text,
	TextInput,
	Dimensions,
} from 'react-native';

import { styles } from './postStyle';
import { COLORS, textStyles } from './../../config/';
import Swiper from 'react-native-swiper';

const { width, height } = Dimensions.get('window');

export default class Post extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		let { data } = this.props;
		let { username, avatar, images } = data;

		return (
			<View style={styles.post}>
				{/*user*/}
				<View style={styles.userBlock}>
					<View style={styles.userBlockLeft}>
						<View style={styles.avatar}>
							<Image style={styles.avatarImage} source={{ uri: avatar }} />
						</View>
						<View style={styles.username}>
							<Text style={[textStyles.BoldBlackMedium, styles.usernameText]}>{username}</Text>
						</View>
					</View>
					<View style={styles.userBlockRight}>
						<TouchableOpacity>
							<Text style={textStyles.grayMedium}>...</Text>
						</TouchableOpacity>
					</View>
				</View>
				{/*End user*/}

				{/*Images*/}
				<Swiper
					scrollEnabled={true}
					showsButtons={false}
					index={0}
					ref={(swiper) => { this._swiper = swiper; }}
					//onMomentumScrollEnd={this._onMomentumScrollEnd.bind(this)}
					loop={false}
					autoplay={false}
					horizontal={true}
					showsPagination={true}
					dotStyle={styles.dot}
					activeDotStyle={[styles.dot, styles.activeDot]}
					ref={(swiper) => { this._swiper = swiper; }}
				>
					{images.map(function (image, index) {
						return (
							<View>
								<Image style={styles.image} source={{ uri: image }} />
							</View>
						)
					})}
				</Swiper>
				{/*End Of Images*/}
			</View>
		)
	}
}