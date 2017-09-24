import React, { Component } from 'react';
import { View, ScrollView, Image, TouchableWithoutFeedback } from 'react-native';
import { Container, Content, Header, Title, Left, Right, Body, Icon, StyleProvider, Text, Button, Thumbnail,List, ListItem, Switch } from 'native-base';
import { DrawerItems } from "react-navigation";
import { styles } from './drawerStyle';
import { COLORS, textStyles, config } from '../../config/';
import DrawerItem from './../drawerItem';


export default class Drawer extends Component {

	constructor(props) {
		super(props)
		this.state = {
		}
	}

	render() {
		let { props } = this.props;
		console.log('=>Drawer(render)props ', props)
		let {activeTintColor, inactiveTintColor, navigation} = props
		return (
			<View style={styles.container}>
				<ScrollView>
					<Image style={styles.cover} source={require('./../../../images/drawer/cover.jpg')}>
						<View style={styles.overlay}>
							<View style={styles.drawerHeader}>
								<Thumbnail large source={{uri: config.user.avatar}} />
								<View style={styles.draweUser}>
									<Text style={textStyles.ButtonText}>{config.user.name}</Text>
									<Text style={textStyles.graySmallD}>{config.user.email}</Text>
								</View>
							</View>
						</View>
					</Image>
					<DrawerItems {...props} />
					<TouchableWithoutFeedback onPress={()=>navigation.navigate('Login')}>
						<View>
							<DrawerItem label="Logout" icon="ios-log-out" tintColor={inactiveTintColor}/>
						</View>
					</TouchableWithoutFeedback>
				</ScrollView>
			</View>
		)
	}
}