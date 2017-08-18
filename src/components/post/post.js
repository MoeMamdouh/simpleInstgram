import React, { Component } from 'react';
import {
	TouchableOpacity,
	View,
	Image,
	Text,
	TextInput,
} from 'react-native';

import { styles } from './postStyle';
import { COLORS, textStyles } from './../../config/';

export default class Post extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		let { data } = this.props;
		return (
			<View style={styles.post}>
				{/*user*/}
				<View style={styles.userBlock}>
					<View style={styles.userBlockLeft}>
						<View style={styles.avatar}>
							<Image style={styles.avatarImage} source={{ uri: data.avatar }}/>
						</View>
						<View style={styles.username}>
							<Text style={[textStyles.BoldBlackMedium, styles.usernameText]}>{data.username}</Text>
						</View>
					</View>
					<View style={styles.userBlockRight}>
						<View style={styles.avatar}>
							<Image style={styles.avatarImage} source={{ uri: data.avatar }}/>
						</View>
					</View>
				</View>
				{/*End user*/}

				<Text style={[textStyles.ButtonText, styles.btnText]}>{data.username}</Text>
			</View>
		)
	}
}