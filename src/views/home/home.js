
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
} from 'react-native'
import _ from 'lodash';
import { styles } from './homeStyle';
import { COLORS, textStyles, config } from '../../config/';
import { rawDataHelper } from '../../lib/index';
import  Post from '../../components/post/post';
import Toast from 'react-native-simple-toast';

const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
})

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}

	componentWillMount() {
		// LayoutAnimation.spring();
	}

	componentDidMount() {

	}

	/**
	 * render event item
	 */
	renderRow(rowData, sectionID, rowID, highlightRow) {
		return <Post data={rowData}></Post>
	}

	render() {
		let posts = [
			{
				id:1,
				post: 'post1 post1 post1 post1 post1 post1 post1 post1 post1 post1 post1 post1 post1 post1 post1 post1 post1',
				images: ['location'],
				user: 'user1',
				location: 'location',
				isLiked: false,
				numOfLikes: 5,
				date: 5,
			},
			{
				id:1,
				post: 'post1 post1 post1 post1 post1 post1 post1 post1 post1 post1 post1 post1 post1 post1 post1 post1 post1',
				images: ['location'],
				user: 'user1',
				location: 'location',
				isLiked: false,
				numOfLikes: 5,
				date: 5,
			},
		]
		let postsDataSource = ds.cloneWithRows(posts);
		return (
			<View style={styles.container}>
				<View style={{height:60, backgroundColor:'red'}}></View>
				<ListView
					style={{padding:20}}
					dataSource={postsDataSource}
					renderRow={this.renderRow.bind(this)}
				/>
			</View>
		)
	}
}