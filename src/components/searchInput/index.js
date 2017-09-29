import React, { Component } from 'react';
import {} from 'react-native';
import { styles } from './style';
import { COLORS, textStyles } from './../../config/';
import { date } from './.././../lib/';
import Swiper from 'react-native-swiper';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';

export default class SearchInput extends Component {

	constructor(props) {
		super(props)
		this.state = {
			
		}
	}

	search(text) {
		let { search } = this.props;
		search(text)
	}

	render() {
		return (
			<Header transparent searchBar rounded>
				<Item>
					<Icon name="ios-search" />
					<Input
						placeholder="Search"
						onChangeText={(text) => this.search(text)}
					/>
					<Icon name="ios-people" />
				</Item>
				{/*<Button transparent>
					<Text>Search</Text>
				</Button>*/}
			</Header>
		)
	}
}