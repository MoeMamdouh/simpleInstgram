'use strict';
import React, { Component } from 'react';
import { View, } from 'react-native';
import { styles } from './style';
import PostsList from '../../components/postsList';
import SearchInput from '../../components/searchInput';
import getTheme from './../../../native-base-theme/components';
import material from './../../../native-base-theme/variables/commonColor';
import { StyleProvider, Button, Text } from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { allPosts, deletePost } from './../../actions';

class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isSearchBar: false,
		}
		// this.props.navigation.navigate('DrawerOpen');
	}

	componentDidMount() {
		this.props.allPosts();
	}

	/**
	 * Dispatch action to Navigation reducer to open user profile View
	 */
	openProfile(post = {}) {
		const { dispatch } = this.props.navigation;
		dispatch({ type: 'Profile', payload: post })
	}

	/**
	 * Dispatch action to Delete the Post
	 */
	deletePost(post) {
		this.props.deletePost(post.id);
	}

	render() {
		console.log('=>Home(render), this.props ', this.props)
		let { isSearchBar } = this.state;
		const { postsData } = this.props;
		const posts = postsData.feeds;
		return (
			<StyleProvider style={getTheme(material)}>
				<View style={styles.container}>
					{/*search component*/}
					{isSearchBar ? <SearchInput search={(text) => this.search(text)} /> : null}
					{/*End Search component*/}

					<PostsList
						posts={posts}
						openProfile={this.openProfile.bind(this)}
						deletePost={this.deletePost.bind(this)}
					/>
				</View>
			</StyleProvider>
		)
	}
}

const mapStateToProps = state => ({
	postsData: state.postsData,
});

const mapDispatchToProps = (dispatch) => (
	bindActionCreators({
		allPosts,
		deletePost,
	}, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Home);