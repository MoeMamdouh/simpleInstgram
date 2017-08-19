'use strict';
import React, { Component } from 'react';
import {
	View,
	//Text,
	TouchableOpacity,
	Easing,
	TextInput,
} from 'react-native'
import { Container, Button, Text } from 'native-base';
import Modal from 'react-native-modalbox';
import { styles } from './newPostStyle';
import { i18n } from '../../lib/';
import { textStyles } from '../../config/';
export default class NewPost extends Component {

	constructor(props, context) {
		super(props, context);
		this.state = {
			description: '',
		}
	}

	componentWillMount() {

	}

	componentDidMount() {

	}

	createPost() {
		let { description } = this.state;
		let { showModal, closeModal, createPost } = this.props;

		createPost({description});
		
		//reset description text
		this.setState({
			description: ''
		})
	}
	render() {

		let { showModal, closeModal, createPost } = this.props;
		let { description } = this.state;

		return (
			<Modal
				style={styles.mainContainer}
				isOpen={showModal}
				ref="NewPost"
				swipeToClose={true}
				backdropPressToClose={true}
				coverScreen={false}
				position='center'
				backdrop={true}
				animationDuration={500}
                onClosed={() => closeModal()}
				easing={Easing.elastic(0.8)}
            >
				<View style={styles.content}>
					<View style={styles.description}>
						<TextInput 
							placeholder='description'
							style={[textStyles.Blacksmall, styles.descriptionTextArea]}
							multiline={true}
							onChangeText={(text) => {this.setState({description:text})}}
							maxLength={120}
							value={description}
							numberOfLines={8}
						/>
					</View>

					{/*<TouchableOpacity onPress={() => createPost({aa:"aa"})} style={styles.confirmBtn}>
						<Text style={textStyles.BoldBlackMedium}> Create </Text>
					</TouchableOpacity>*/}
					<Button block danger onPress={() => this.createPost()}>
						<Text>Create</Text>
					</Button>
				</View>
			</Modal>
		);
	}
}