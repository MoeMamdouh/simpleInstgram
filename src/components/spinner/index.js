import React, { Component } from 'react';
import {
	StyleSheet,
	ActivityIndicator,
} from 'react-native';
import { styles } from './style';

export default class Spinner extends Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		return (
			<ActivityIndicator
				animating={true}
				//style={styles.centering}
				size="large"
			/>
		);
	}
}