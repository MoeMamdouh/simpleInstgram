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
	
	/**
	 * login 
	 */
	login() {
		this.setState({showLoginBtn:false});
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
				this.setState({showLoginBtn:true});
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
		let { showLoginBtn } = this.state
		console.log('=>Login(render), this.props ', this.props)
		return (
			<Container style={styles.container}>
				<Content contentContainerStyle={styles.container}>
					<Form>
						<Item floatingLabel>
							<Label>Username</Label>
							<Input />
						</Item>

						<Item floatingLabel last>
							<Label>Password</Label>
							<Input secureTextEntry={true} />
						</Item>
				
						<Button block style={styles.btn}>
							<Text>Login</Text>
						</Button>

						{ showLoginBtn ?
							<Button block style={styles.btn} warning onPress={() => this.login()}>
								<Text>Moe Login</Text>
							</Button>
							: <Spinner/>
						}
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
		// currentPost: state.currentPost
	};
};
  
export default connect(mapStateToProps, actions)(Login);