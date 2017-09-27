import React, { Component } from 'react';
import {
	View, Text, TouchableWithoutFeedback,
} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';
import { COLORS, textStyles, config } from '../../config/';
import {styles} from './loginStyle';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import * as actions from './../../actions';
import firebase from 'firebase';
import Spinner from '../../components/spinner/spinner';

class Login extends React.Component {

	constructor(props, context) {
		super(props, context);
		this.state = {
			showLoginBtn: true,
		}
	}

	componentWillMount () {
		firebase.auth().onAuthStateChanged((user) => {
			if(user) {
				this.enterApp();
			}
		});
	}
	
	onEmailChange(text) {
		this.props.emailChanged(text);
	}
	
	  onPasswordChange(text) {
		this.props.passwordChanged(text);
	}
	
	/**
	 * on login button pressed
	 */
	onButtonPress() {
		const { email, password } = this.props;
		this.props.loginUser({ email, password });
	}

	/**
	 * if sucess in login enter app 'home' view
	 */
	enterApp() {
		const { dispatch } = this.props.navigation;
		dispatch({ type: 'Drawer' })
	}

	render() {
		let { showLoginBtn } = this.state
		let { loading } = this.props
		return (
			<Container style={styles.container}>
				<Content contentContainerStyle={styles.container}>
					<Form>
						<Item floatingLabel>
							<Label>Username</Label>
							<Input
								onChangeText={this.onEmailChange.bind(this)}
          						value={this.props.email}
							/>
						</Item>

						<Item floatingLabel last>
							<Label>Password</Label>
							<Input
								secureTextEntry={true}
								onChangeText={this.onPasswordChange.bind(this)}
         					   value={this.props.password}
							/>
						</Item>

						<Text style={styles.errorTextStyle}>
							{this.props.error}
						</Text>
						
						{
							loading ? <Spinner/> :
								<Button block style={styles.btn} onPress={() => this.onButtonPress()}>
									<Text>Login</Text>
								</Button>
						}

						{/* <Button block style={styles.btn} warning onPress={() => this.login()}>
							<Text>Moe Login</Text>
						</Button> */}
					</Form>
				</Content>
		  </Container>
		);
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
		user: state.auth.user,
	};
};
  
export default connect(mapStateToProps, actions)(Login);