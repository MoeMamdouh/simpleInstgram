import React, { Component } from 'react';
import {
	Linking,
	Share,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Toast from 'react-native-simple-toast';
import Communications from 'react-native-communications';

class NativeFunctions {

	share(title, message) {
		return Share.share({
			title,
			message
		})
	}

	pickImage(options, cb) {
		// ImagePicker.launchImageLibrary(options, cb);
		ImagePicker.showImagePicker(options, cb);
	}

	toast(message) {
		Toast.show(message);
	}

	openExternalLink(link) {
		Linking.canOpenURL(link).then(supported => {
			if (supported) {
				Linking.openURL(link);
			} else {
				console.log('Don\'t know how to open URI: ' + link);
				this.toast(I18n.t("ERRORS.LINK_NOT_SUPPORTED"));
			}
		})
	}

	callNumber(stringNumber) {
		Communications.phonecall(stringNumber, true);
	}

	sendMail(email) {
		Communications.email([email], user.email, '', '', '');
	}
}

export const nativeFunctions = new NativeFunctions();