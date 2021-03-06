
'use strict';

import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	ImageBackground,
	TouchableOpacity,
	TextInput,
	ScrollView,
	ListView,
	LayoutAnimation,
	RefreshControl,
} from 'react-native'

import { connect } from 'react-redux';
import * as actions from './../../actions';
import firebase from 'firebase';
import Spinner from '../../components/spinner';
import { styles } from './style';
import { COLORS, textStyles, config } from './../../config/';

class Splash extends Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}

	componentWillMount() {
		// firebase.initializeApp(config.firebase)
	}

	componentDidUpdate() {

		// alert('a')
		// firebase.auth().onAuthStateChanged((user) => {
		// 	if(user) {
		// 		this.navigateApp();
		// 	} else {
		// 		this.navigateLogin();
		// 	}
		// });
	}

	componentDidMount() {
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.navigateApp();
			} else {
				this.navigateLogin();
			}
		});
	}

	/**
	 * if sucess in login enter app 'home' view
	 */
	navigateApp() {
		const { dispatch } = this.props.navigation;
		dispatch({ type: 'Drawer' })
	}

	/**
	 * if sucess in login enter app 'home' view
	 */
	navigateLogin() {
		const { dispatch } = this.props.navigation;
		dispatch({ type: 'Login' })
	}

	render() {
		return (
			<View style={styles.container}>
				<ImageBackground style={styles.image} source={require('./../../../images/splash.jpg')}>
					<Spinner />
				</ImageBackground>
			</View>
		)
	}
}

const mapStateToProps = state => {
	// console.log('===>mapStateToProps this.state ', state)
	return {
		// posts: state.posts, 
		// currentPost: state.currentPost,
		email: state.auth.email,
		password: state.auth.password,
		error: state.auth.error,
		loading: state.auth.loading,
	};
};

export default connect(mapStateToProps, null)(Splash);