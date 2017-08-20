'use strict';
import React, { Component } from 'react';
import {
	View,
	//Text,
	TouchableOpacity,
	Easing,
	TextInput,
	Image,
	ScrollView,
} from 'react-native'
import Modal from 'react-native-modalbox';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { styles } from './newPostModalStyle';
import { i18n, nativeFunctions } from '../../lib/';
import { textStyles, COLORS } from '../../config/';
import { Container, Header, Button, Content, Thumbnail, Text, Form, Item, Label, Input, Textarea, Body, Title, Icon } from 'native-base';

export default class NewPost extends Component {

	constructor(props, context) {
		super(props, context);
		this.state = {
			description: '',
			uploadedPhoto: '',
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
		if (description && uploadedPhoto) {
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

	/**
	 * close Modal
	 */
	closeModal() {
		let { closeModal } = this.props;
		this.resetPostData();
		closeModal();
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
					onClosed={() => this.closeModal()}
					easing={Easing.elastic(0.8)}
				>
					
					{/*<KeyboardAwareScrollView>*/}
					<Header>
						<Body>
							<Title>Create a post..</Title>
						</Body>
					</Header>

					<View style={styles.content}>
						{/*<ScrollView>*/}
						<View style={styles.topContent}>
							<View style={styles.photoContainer}>
								<TouchableOpacity onPress={() => this.uploadPhoto()}>
									{
										uploadedPhoto ? <Thumbnail large square source={{ uri: uploadedPhoto }} style={styles.uploadedPhoto} />
											:
											<View style={styles.selectPhoto}>
												<Text style={[textStyles.graySmall, styles.selectPhotoText]}>Select photo</Text>
												<Icon style={styles.addIcon} name='add-circle' />
											</View>
									}
								</TouchableOpacity>
							</View>

							<View style={styles.description}>
								{/*<TextInput
									placeholder='description'
									style={[textStyles.Blacksmall, styles.descriptionTextArea]}
									multiline={true}
									onChangeText={(text) => { this.setState({ description: text }) }}
									maxLength={120}
									value={description}
									numberOfLines={8}
								/>*/}
								
								<Item regular>
									<Textarea
										style={[textStyles.Blacksmall, styles.descriptionTextArea]}
										placeholder='Write a caption...'
										onChangeText={(text) => { this.setState({ description: text }) }}
										value={description}
									/>
								</Item>
							</View>
						</View>
						{/*</ScrollView>*/}

						{/*<TouchableOpacity onPress={() => createPost({aa:"aa"})} style={styles.confirmBtn}>
							<Text style={textStyles.BoldBlackMedium}> Create </Text>
						</TouchableOpacity>*/}
						<View style={styles.btnsContainer}>
							<Button danger onPress={() => this.closeModal()}><Text> Cancel </Text></Button>
							<Button success onPress={() => this.createPost()}><Text> Create </Text></Button>
						</View>
					</View>
					{/*<KeyboardSpacer topSpacing={50}/>*/}
					{/*</KeyboardAwareScrollView>*/}
				</Modal>
			
		);
	}
}