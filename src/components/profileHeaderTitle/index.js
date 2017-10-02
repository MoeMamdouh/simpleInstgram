import React, { Component } from 'react';
import {
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
	Image,
	Text,
	TextInput,
	Dimensions,
} from 'react-native';

import { connect } from 'react-redux';
import * as actions from './../../actions';

class ProfileHeaderTitle extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		let { currentPost } = this.props
		let { username } = currentPost;
		return (
			<Text>{username ? username : 'Visitor'}</Text>
		)
	}
}

const mapStateToProps = state => {
	return {
		currentPost: state.currentPost
	};
};

export default connect(mapStateToProps, actions)(ProfileHeaderTitle);