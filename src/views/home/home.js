
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

const posts = require('./../../data/posts');
const ADD = require('../../../images/icons/add.png');
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
		return <Post postObject={rowData}/>
	}

	render() {
		let postsDataSource = ds.cloneWithRows(posts);
		return (
			<View style={styles.container}>
				<View style={styles.topBar}></View>
				<ListView
					style={styles.posts}
					removeClippedSubviews={false}
					dataSource={postsDataSource}
					renderRow={this.renderRow.bind(this)}
				/>
				<View style={styles.bottomBar}>
					<TouchableOpacity>
						<Image style={styles.addPost} source={ADD} />
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}