import React, { Component } from 'react';
import {
	Image,
} from 'react-native';
import { Container, Content, Header, Title, Button, Left, Right, Body, Icon, Text, Thumbnail } from 'native-base';
import { styles } from './index';
import { nativeFunctions } from './.././../lib/';

export default class Navbar extends Component {

	constructor(props) {
		super(props)
		this.state = {

		}
	}

	render() {
		let { toggleSearchBar } = this.props;
		return (
			<Header>
				<Left>
					<Button transparent onPress={toggleSearchBar}>
						<Icon name='search' />
					</Button>
				</Left>

				<Body>
					<Title style={{ width: 140 }}>Light Instagram</Title>
				</Body>

				<Right>
					<Button transparent onPress={() => nativeFunctions.toast('Profile will be added soon ')}>
						<Thumbnail style={styles.navBarProfileImage} source={{ uri: 'https://avatars0.githubusercontent.com/u/16561058?v=4&s=64' }} />
					</Button>
				</Right>
			</Header>
		)
	}
}