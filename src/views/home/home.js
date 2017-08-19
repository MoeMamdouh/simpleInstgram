
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
} from 'react-native'
import _ from 'lodash';
import { styles } from './homeStyle';
import { COLORS, textStyles, config } from '../../config/';
import { rawDataHelper } from '../../lib/index';
import Post from '../../components/post/post';
import NewPostModal from '../../modals/newPost/newPost';

const posts = require('./../../data/posts');
const ADD = require('../../../images/icons/add.png');
const ds = new ListView.DataSource({
	rowHasChanged: (r1, r2) => r1 !== r2
})

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
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


	createPost(postObject) {
		let { posts } = this.state
		postObject.id = 5;
		postObject.username = 'Mohamed Mamdouh';
		postObject.avatar = 'http://lorempixel.com/150/150/people/';
		postObject.images = ["http://lorempixel.com/500/500/nature/",];
		//postObject.created_time = "2017-01-09T08:20:15+0000";

		posts.push(postObject)
		// posts.reverse()
		// posts.unshift(postObject)
		// posts.splice(0, 0, postObject);
			this.setState({
				posts,
			})
		this.closeNewPostModal()
	}

	/**
	 * render event item
	 */
	renderRow(rowData, sectionID, rowID, highlightRow) {
		return <Post postObject={rowData} />
	}
	render() {
		let { showNewPostModal, posts } = this.state;
		let postsDataSource = ds.cloneWithRows(posts);
		return (
			<View style={styles.container}>
				<View style={styles.topBar}></View>
				<ListView
					style={styles.posts}
					removeClippedSubviews={false}
					dataSource={postsDataSource}
					renderRow={this.renderRow.bind(this)}
					
					ref={ref => this.listView = ref}
					onLayout={event => {
						this.listViewHeight = event.nativeEvent.layout.height
					}}
					onContentSizeChange={() => {
						this.listView.scrollTo({y: this.listView.getMetrics().contentLength - this.listViewHeight})
					}}
				/>
				<View style={styles.bottomBar}>
					<TouchableOpacity onPress={() => this.openNewPostModal()}>
						<Image style={styles.addPost} source={ADD} />
					</TouchableOpacity>
				</View>

				<NewPostModal
					showModal={showNewPostModal}
					closeModal={() => { this.closeNewPostModal() }}
					//createPost={() => { this.createPost(postObject) }}
					//close={this.props.onClosed.bind(this)}
					createPost={this.createPost.bind(this)}
				/>
			</View>
		)
	}
}