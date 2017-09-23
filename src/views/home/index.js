
'use strict';

import React, { Component } from 'react';
import {
	View,
	// Text,
	Image,
	TouchableOpacity,
	TextInput,
	ScrollView,
	ListView,
	LayoutAnimation,
	RefreshControl,
	
} from 'react-native'
import _ from 'lodash';
import { styles } from './homeStyle';
import { COLORS, textStyles, config } from '../../config/';
import { rawDataHelper } from '../../lib/index';
import Post from '../../components/post/post';
import SearchInput from '../../components/searchInput/searchInput';
import Navbar from '../../components/navbar/navbar';
import Tabs from '../../components/tabs/tabs';
import NewPostModal from '../../modals/newPost/newPostModal';
import getTheme from './../../../native-base-theme/components';
import material from './../../../native-base-theme/variables/commonColor';
import { Container, Content, Header, Title, Left, Right, Body, Icon, StyleProvider, Text, Button, Thumbnail } from 'native-base';
const posts = require('./../../data/posts');
const ADD = require('../../../images/icons/add.png');
const ds = new ListView.DataSource({
	rowHasChanged: (r1, r2) => r1 !== r2
})

let _this = null;

export default class Home extends Component {
	
	constructor(props) {
		super(props);
		//order posts data by 'created_time'
		posts = rawDataHelper.dateSort(posts, 'created_time')
		this.state = {
			allPosts: posts.slice(),
			posts,
			showNewPostModal: false,
			isSearchBar: false,
			isNewPostAded: false,
			isRefreshing: false,
		}
		// this.props.navigation.navigate('DrawerOpen');
	}
	
	componentWillMount() {
		LayoutAnimation.spring();
	}

	componentDidMount() {
		_this = this;
	}

	/**
	 * close Modal
	 */
	openNewPostModal() {
		this.setState({ showNewPostModal: true });
	}

	/**
	 * close Modal
	 */
	closeNewPostModal() {
		this.setState({ showNewPostModal: false });
	}

	/**
	 * create new post
	 * @param {*} postObject 
	 */
	createPost(postObject) {
		let { allPosts, posts } = this.state
		postObject.id = 5;
		postObject.username = 'Mohamed Mamdouh';
		postObject.avatar = 'https://avatars0.githubusercontent.com/u/16561058?v=4&s=64';
		postObject.numOfLikes = 0;
		postObject.isLiked = false;
		//postObject.created_time = "2017-01-09T08:20:15+0000";

		allPosts.push(postObject);
		posts.push(postObject);
		// posts.reverse()
		// posts.unshift(postObject)
		// posts.splice(0, 0, postObject);

		this.updateAllPosts(allPosts)
		this.updatePosts(posts)
		this.closeNewPostModal()
		//update isNewPostAded in state to scrollDown and show the last Post
		this.setState({ isNewPostAded: true })
	}

	/**
	 * render event item
	 */
	renderRow(rowData, sectionID, rowID, highlightRow) {
		const { navigate } = this.props.navigation;
		return <Post postObject={rowData} navigation={{navigate}} />
	}

	/**
	 * search on posts by user name
	 */
	search(key) {
		let { allPosts } = this.state;
		key = key.toLowerCase();
		let posts = _.filter(allPosts, function (postObject) {
			let username = postObject.username.toLowerCase();
			let isContain = _.includes(username, key);
			return isContain;
		});
		this.updatePosts(posts)
		// console.log(key, posts)
	}

	/**
	 * show all posts
	 */
	showAllPosts() {
		let { allPosts } = this.state;
		let posts = allPosts.slice()
		this.updatePosts(posts)
	}

	/**
	 * update posts state
	 * @param {*} posts 
	 */
	updatePosts(posts) {
		this.setState({
			posts,
		})
	}

	/**
	 * update akkl posts state
	 * @param {*} allPosts 
	 */
	updateAllPosts(allPosts) {
		this.setState({
			allPosts,
		})
	}

	/**
	 * show search bar
	 */
	toggleSearchBar() {
		let { isSearchBar } = this.state
		this.showAllPosts();
		this.setState({
			isSearchBar: !isSearchBar
		})
	}

	/**
	 * scroll to down of list
	 */
	scrollDown() {
		let { isNewPostAded } = this.state;
		if (isNewPostAded) {
			this.scrollView.scrollToEnd({ animated: true });
		}
	}

	/**
	 * on pull to refresh all posts data and close search bar
	 */
	onRefresh() {
		this.showAllPosts();
		this.setState({
			isSearchBar: false,
			isNewPostAded: false,
			isRefreshing: false,
		});
	}

	render() {
		let { showNewPostModal, posts, isSearchBar } = this.state;
		let postsDataSource = ds.cloneWithRows(posts);
		return (
			<StyleProvider style={getTheme(material)}>
				<View style={styles.container}>
					{/*header component*/}
					{/* <Navbar toggleSearchBar={() => this.toggleSearchBar()} /> */}
					{/*End header component*/}

					{/*search component*/}
					{isSearchBar ? <SearchInput search={(text) => this.search(text)} /> : null}
					{/*End Search component*/}

					{/*posts list*/}
					<ListView
						refreshControl={
							<RefreshControl
								refreshing={this.state.isRefreshing}
								onRefresh={this.onRefresh.bind(this)}
							/>
						}
						ref={ref => this.scrollView = ref}
						style={styles.posts}
						removeClippedSubviews={false}
						dataSource={postsDataSource}
						renderRow={this.renderRow.bind(this)}
						onContentSizeChange={() => this.scrollDown()}
						enableEmptySections={true}
					/>
					{/*End posts list*/}

					{/*custome bottom bar*/}
					{/*<View style={styles.bottomBar}>
						<TouchableOpacity onPress={() => this.openNewPostModal()}>
							<Image style={styles.addPost} source={ADD} />
						</TouchableOpacity>
					</View>*/}
					{/*End custome bottom bar*/}

					{/*tabs component*/}
					{/* <Tabs openNewPostModal={() => this.openNewPostModal()} /> */}
					{/*End tabs component*/}

					<NewPostModal
						showModal={showNewPostModal}
						closeModal={() => this.closeNewPostModal()}
						createPost={(postObject) => this.createPost(postObject)}
					/>
				</View>
			</StyleProvider>
		)
	}
}