
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
import { bindActionCreators } from 'redux';
import { allPosts } from './../../actions';


class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}

	componentWillMount() {
	}

	componentDidMount() {
	}


	/**
	 * open user profile
	 */
	openProfile() {
		console.log('AAthis.props' ,this.props)
		const { dispatch } = this.props;
		dispatch({ type: 'Search', payload: {} })
		// this.props.navigation.navigate('Profile')

	}

	render() {
		return (
			<Text onPress={()=>this.openProfile()} >Search</Text>
		)
	}
}
const mapStateToProps = state => ({
	postsData: state.postsData,
});

const mapDispatchToProps = (dispatch) => (
	bindActionCreators({
		allPosts,
	}, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Search);