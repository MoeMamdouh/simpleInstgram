import React, { Component } from 'react';
import { View, ScrollView, Image } from 'react-native';
import { Container, Content, Header, Title, Left, Right, Body, Icon, StyleProvider, Text, Button, Badge } from 'native-base';
import { DrawerItems } from "react-navigation";
import { styles } from './style';
import { COLORS, textStyles, config } from '../../config/';


export default class Drawer extends Component {

	constructor(props) {
		super(props)
		this.state = {
		}
	}

	render() {
		let { label, icon, tintColor, badge } = this.props;
		return (
			<View style={styles.container}>
				<View style={styles.leftContent}>
					<Icon name={icon} style={[{ color: tintColor }, styles.icon]} />
					<Text style={[{ color: tintColor }, styles.label]}>{label}</Text>
				</View>
				{badge ? (
					<Badge primary>
						<Text>{badge}</Text>
					</Badge>
				) : null}
			</View>
		)
	}
}