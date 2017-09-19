import React, { Component } from 'react';
import { Container, Content, Header, Title, Button, Left, Right, Body, Icon, Text, Thumbnail } from 'native-base';
import { styles } from './profileImageBtnStyle';


export default class ProfileImageBtn extends Component {

	constructor(props) {
		super(props)
		this.state = {
		}
	}

	render() {
		return (
			<Button transparent onPress={() => alert('Profile will be added soon ')}>
				<Thumbnail style={styles.navBarProfileImage} source={{ uri: 'https://avatars0.githubusercontent.com/u/16561058?v=4&s=64' }} />
			</Button>
		)
	}
}