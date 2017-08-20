import React, { Component } from 'react';
import { } from 'react-native';
import { Container, Content, Header, Title, Button, Left, Right, Body, Icon, Text } from 'native-base';

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
					<Title>Light Insta</Title>
				</Body>
				<Right />
			</Header>
		)
	}
}