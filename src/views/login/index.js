import React, { Component } from 'react';
import {
	View, Text, Button, TouchableWithoutFeedback,
} from 'react-native';
import { COLORS, textStyles, config } from '../../config/';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import * as actions from './../../actions';
import firebase from 'firebase';

class Loin extends React.Component {

	
	/**
	 * login 
	 */
	login() {
		let { email, password } = config.user
		firebase.auth().signInWithEmailAndPassword(email, password)
		.then((data) => {
			console.log('login sucess ', data);
			this.enterApp()
		})
		.catch(() => {
			firebase.auth().createUserWithEmailAndPassword(email, password)
			.then((data) => {
				console.log('regisiter new user sucess ', data)
				this.enterApp()
			})
			.catch((error)=> {
				console.log('error in signup ', error)
				alert(error.message)
			})
		})
	}

	/**
	 * if sucess in login enter app 'home' view
	 */
	enterApp() {
		const { navigate } = this.props.navigation;
		navigate('Drawer', { user: 'Moe' })
	}

	render() {
		console.log('=>Login(render), this.props ', this.props)
		return (
			<View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
				<Button
					onPress={() => this.login()}
					title="Login"
				/>
			</View>
		);
	}
}

const mapStateToProps = state => {
	// console.log('===>mapStateToProps this.state ', state)
	return {
		posts: state.posts, 
		// currentPost: state.currentPost
	};
};
  
export default connect(mapStateToProps, actions)(Loin);