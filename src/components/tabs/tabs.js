import React, { Component } from 'react';
import { } from 'react-native';
import { styles } from './tabsStyle';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';

export default class Tabs extends Component {

	constructor(props) {
		super(props)
		this.state = {

		}
	}

	render() {
		let { openNewPostModal } = this.props;
		return (
			<Footer>
				<FooterTab>
					<Button>
						<Icon name="home" />
					</Button>
					<Button>
						<Icon name="search" />
					</Button>
					<Button active onPress={openNewPostModal}>
						<Icon active name="add" />
					</Button>
					<Button>
						<Icon name="heart" />
					</Button>
					<Button>
						<Icon name="person" />
					</Button>
				</FooterTab>
			</Footer>
		)
	}
}