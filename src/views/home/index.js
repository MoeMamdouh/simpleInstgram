'use strict';
import React, { Component } from 'react';
import { View, } from 'react-native'
import _ from 'lodash';
import { styles } from './style';
import PostsList from '../../components/postsList';
import SearchInput from '../../components/searchInput';
import getTheme from './../../../native-base-theme/components';
import material from './../../../native-base-theme/variables/commonColor';
import { StyleProvider } from 'native-base';
import { connect } from 'react-redux';
import * as actions from './../../actions';

class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isSearchBar: false,
		}
		// this.props.navigation.navigate('DrawerOpen');
	}

	render() {
		console.log('=>Home(render), this.props ', this.props)
		let { isSearchBar } = this.state;
		let { posts } = this.props;
		return (
			<StyleProvider style={getTheme(material)}>
				<View style={styles.container}>

					{/*search component*/}
					{isSearchBar ? <SearchInput search={(text) => this.search(text)} /> : null}
					{/*End Search component*/}

					<PostsList posts={posts} />
				</View>
			</StyleProvider>
		)
	}
}

const mapStateToProps = state => {
	return {
		posts: state.posts,
	};
};

export default connect(mapStateToProps, actions)(Home);