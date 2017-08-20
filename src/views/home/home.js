
'use strict';

import React, { Component } from 'react';
import {
	View,
	//Text,
	Image,
	TouchableOpacity,
	TextInput,
	ScrollView,
	ListView,
	LayoutAnimation,
} from 'react-native'
import _ from 'lodash';
import { styles } from './homeStyle';
import { COLORS, textStyles, config } from '../../config/';
import { rawDataHelper } from '../../lib/index';
import Post from '../../components/post/post';
import SearchInput from '../../components/searchInput/searchInput';
import Tabs from '../../components/tabs/tabs';
import NewPostModal from '../../modals/newPost/newPostModal';

const posts = require('./../../data/posts');
const ADD = require('../../../images/icons/add.png');
const ds = new ListView.DataSource({
	rowHasChanged: (r1, r2) => r1 !== r2
})

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			allPosts: posts.slice(),
			posts,
			showNewPostModal: false,
		}
	}

	componentWillMount() {
		LayoutAnimation.spring();
	}

	componentDidMount() {

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
		postObject.avatar = 'http://lorempixel.com/150/150/people/';
		postObject.numOfLikes = 0;
		postObject.isLiked = false;
		//postObject.created_time = "2017-01-09T08:20:15+0000";

		allPosts.push(postObject);
		posts.push(postObject);
		// posts.reverse()
		// posts.unshift(postObject)
		// posts.splice(0, 0, postObject);
		console.log(posts, allPosts )
		this.updateAllPosts(allPosts)
		this.updatePosts(posts)
		this.closeNewPostModal()
	}

	/**
	 * render event item
	 */
	renderRow(rowData, sectionID, rowID, highlightRow) {
		return <Post postObject={rowData} />
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
	
	render() {
		let { showNewPostModal, posts } = this.state;
		let postsDataSource = ds.cloneWithRows(posts);
		return (
			<View style={styles.container}>
				{/*header component*/}
				<View style={styles.topBar}></View>
				{/*End header component*/}

				{/*search component*/}
				<SearchInput search={(text) => this.search(text)}/>
				{/*End Search component*/}

				{/*posts list*/}
				<ListView
					ref={ref => this.scrollView = ref}
					style={styles.posts}
					removeClippedSubviews={false}
					dataSource={postsDataSource}
					renderRow={this.renderRow.bind(this)}
					onContentSizeChange={(contentWidth, contentHeight) => {
						this.scrollView.scrollToEnd({ animated: true });
					}}
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
				<Tabs openNewPostModal={() => this.openNewPostModal()}/>
				{/*End tabs component*/}

				<NewPostModal
					showModal={showNewPostModal}
					closeModal={() => this.closeNewPostModal() }
					createPost={(postObject) => this.createPost(postObject) }
				/>
			</View>
		)
	}
}