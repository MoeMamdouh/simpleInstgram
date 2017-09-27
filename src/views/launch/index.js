
'use strict';

import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	TextInput,
	ScrollView,
	ListView,
	LayoutAnimation,
	RefreshControl,
	
} from 'react-native'

import { connect } from 'react-redux';
import * as actions from './../../actions';


class Launch extends Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}
	
	componentWillMount() {
	}

	componentDidMount() {
		const { dispatch } = this.props.navigation;
		dispatch({ type: 'App' })
	}

	
	render() {
		return (
			<Text>Launch</Text>
		)
	}
}

const mapStateToProps = state => {
	// console.log('===>mapStateToProps this.state ', state)
	return {
		// posts: state.posts, 
		// currentPost: state.currentPost,
		email: state.auth.email,
		password: state.auth.password,
		error: state.auth.error,
		loading: state.auth.loading,
	};
};
  
export default connect(mapStateToProps, actions)(Launch);