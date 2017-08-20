'use strict';
import React, { Component } from 'react';
import {
	View,
	//Text,
	TouchableOpacity,
	Easing,
	TextInput,
	Image,
} from 'react-native'
import { Container, Button, Text } from 'native-base';
import Modal from 'react-native-modalbox';
import { styles } from './newPostModalStyle';
import { i18n, nativeFunctions } from '../../lib/';
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

	/**
	 * create post
	 */
	createPost() {
		let { description, uploadedPhoto } = this.state;
		let { showModal, closeModal, createPost } = this.props;

		//if set descrption and upload photo Enable to create the post
		if(description && uploadedPhoto) {
			let post = {
				description,
				images: [uploadedPhoto],
			}
			createPost(post);
			this.resetPostData();
		} else {
			nativeFunctions.toast('sorry, you have to fill the data!')
		}
	}

	/**
	 * reset post Data
	 */
	resetPostData() {
		//reset description text
		this.setState({
			description: '',
			uploadedPhoto: '',
		})
	}
	/**
	 * upoad photo
	 */
	uploadPhoto() {
		let options = {
			title: 'Upload Photo',
			storageOptions: {
				skipBackup: true,
				path: 'images'
			}
		};

		nativeFunctions.pickImage(options, (response) => {
			// console.log('Response = ', response);
			if (response.didCancel) {
				nativeFunctions.toast('cancelled chossing the photo ')
			}
			else if (response.error) {
				nativeFunctions.toast('Error in chossing the photo')
			}
			else if (response.customButton) {
				console.log('User tapped custom button: ', response.customButton);
			}
			else {
				// let source = { uri: response.uri };

				// You can also display the image using data:
				// let source = { uri: 'data:image/jpeg;base64,' + response.data };

				this.setState({
					uploadedPhoto: response.uri
				});
			}
		});
	}

	render() {
		let { showModal, closeModal, createPost } = this.props;
		let { description, uploadedPhoto } = this.state;

		return (
			<Modal
				style={styles.mainContainer}
				isOpen={showModal}
				ref="NewPost"
				swipeToClose={true}
				backdropPressToClose={true}
				coverScreen={true}
				position='center'
				backdrop={true}
				animationDuration={500}
				onClosed={() => closeModal()}
				easing={Easing.elastic(0.8)}
			>
				<View style={styles.content}>
					<TouchableOpacity
						onPress={() => this.uploadPhoto()}
					>
						<Text>Upoad Photo</Text>
						<Image source={{ uri: uploadedPhoto }} style={styles.uploadedPhoto} />
					</TouchableOpacity>
					<View style={styles.description}>
						<TextInput
							placeholder='description'
							style={[textStyles.Blacksmall, styles.descriptionTextArea]}
							multiline={true}
							onChangeText={(text) => { this.setState({ description: text }) }}
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