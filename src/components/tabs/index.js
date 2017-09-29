import React, {Component} from 'react';
import {} from 'react-native';
import {styles} from './style';
import {nativeFunctions} from './../../lib/';
import {
	Container,
	Header,
	Content,
	Footer,
	FooterTab,
	Button,
	Icon,
	Text
} from 'native-base';

export default class Tabs extends Component {

	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		let {openNewPostModal} = this.props;
		return (
			<Footer>
				<FooterTab>
					<Button onPress={() => nativeFunctions.toast('will be added soon ')}>
						<Icon name="home"/>
					</Button>
					<Button onPress={() => nativeFunctions.toast('will be added soon ')}>
						<Icon name="search"/>
					</Button>
					<Button active onPress={openNewPostModal}>
						<Icon active name="add"/>
					</Button>
					<Button onPress={() => nativeFunctions.toast('will be added soon ')}>
						<Icon name="heart"/>
					</Button>
					<Button onPress={() => nativeFunctions.toast('will be added soon ')}>
						<Icon name="person"/>
					</Button>
				</FooterTab>
			</Footer>
		)
	}
}