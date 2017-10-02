import React, { Component } from 'react';
import {
	View,
	ScrollView,
	Image,
	ImageBackground,
	TouchableWithoutFeedback
} from 'react-native';
import { Container, Content, Header, Title, Left, Right, Body, Icon, StyleProvider, Text, Button, Thumbnail, List, ListItem, Switch } from 'native-base';
import { DrawerItems } from "react-navigation";
import { styles } from './style';
import { COLORS, textStyles, config } from '../../config/';
import DrawerItem from './../drawerItem';
import firebase from 'firebase';
import * as actions from './../../actions';
import { connect } from 'react-redux';

class Drawer extends Component {

	constructor(props) {
		super(props)
		this.state = {
		}
	}

	/**
	 * logout
	 */
	logout() {
		let { props } = this.props;
		let { navigation } = props
		firebase.auth().signOut();
		const { dispatch } = navigation;
		dispatch({ type: 'Splash' })
	}

	render() {
		let { props } = this.props;
		// console.log('=>Drawer(render)props ', props)
		let { activeTintColor, inactiveTintColor, navigation } = props
		return (
			<View style={styles.container}>
				<ScrollView>
					<ImageBackground style={styles.cover} source={require('./../../../images/drawer/cover.jpg')}>
						<View style={styles.overlay}>
							<View style={styles.drawerHeader}>
								<Thumbnail large source={{ uri: config.user.avatar }} />
								<View style={styles.draweUser}>
									<Text style={textStyles.ButtonText}>{config.user.name}</Text>
									<Text style={textStyles.graySmallD}>{config.user.email}</Text>
								</View>
							</View>
						</View>
					</ImageBackground>
					<DrawerItems {...props} />
					<TouchableWithoutFeedback onPress={() => this.logout()}>
						<View>
							<DrawerItem label="Logout" icon="ios-log-out" tintColor={inactiveTintColor} />
						</View>
					</TouchableWithoutFeedback>
				</ScrollView>
			</View>
		)
	}
}

// const mapStateToProps = state => {
// 	return {
// 	};
// };

export default connect(null, actions)(Drawer);