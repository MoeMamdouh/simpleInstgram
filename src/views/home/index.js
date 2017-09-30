
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
import { styles } from './style';
import { COLORS, textStyles, config } from '../../config/';
import { rawDataHelper } from '../../lib/index';
import Post from '../../components/post';
import SearchInput from '../../components/searchInput';
import getTheme from './../../../native-base-theme/components';
import material from './../../../native-base-theme/variables/commonColor';
import { Container, Content, Header, Title, Left, Right, Body, Icon, StyleProvider, Text, Button, Thumbnail } from 'native-base';
import { connect } from 'react-redux';
import * as actions from './../../actions';
const ADD = require('../../../images/icons/add.png');
const ds = new ListView.DataSource({
	rowHasChanged: (r1, r2) => r1 !== r2
})

let _this = null;

class Home extends Component {
	
	constructor(props) {
		super(props);
		let posts = this.props.posts;
		//order posts data by 'created_time'
		posts = rawDataHelper.dateSort(posts, 'created_time')
		this.state = {
			allPosts: posts.slice(),
			posts,
			// isSearchBar: true,
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
	 * render event item
	 */
	renderRow(rowData, sectionID, rowID, highlightRow) {
		let { navigation } = this.props;
		return <Post postObject={rowData} navigation={navigation} />
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
		console.log('=>Home(render), this.props ', this.props)
		let { posts, isSearchBar } = this.state;
		let postsDataSource = ds.cloneWithRows(posts);
		return (
			<StyleProvider style={getTheme(material)}>
				<View style={styles.container}>

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
				</View>
			</StyleProvider>
		)
	}
}

const mapStateToProps = state => {
	return {
		posts: state.posts, 
		// currentPost: state.currentPost
	};
};
  
export default connect(mapStateToProps, actions)(Home);