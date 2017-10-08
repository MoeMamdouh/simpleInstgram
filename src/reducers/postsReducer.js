import {
	ALL_POSTS,
	USER_POSTS,
	ADD_POST,
	DELETE_POST,
} from './../actions/types';
import data from './../data/posts.json';
import _ from 'lodash';

// const INITIAL_STATE = data;
const INITIAL_STATE = {
	feeds: data,
	userPosts: [],
};

export default (state = INITIAL_STATE, action) => {
	let id, feeds, userId, userPosts;
	// console.log('##>posts Reducer action: ', action, 'State: ', state)
	switch (action.type) {
		case ALL_POSTS:
			return state;
		case USER_POSTS:
			userId = action.payload;
			userPosts = _.filter(state.feeds, { userId });
			return { ...state, userPosts };
		case ADD_POST:
			feeds = [action.payload, ...state.feeds];
			return { ...state, feeds };
		case DELETE_POST:
			id = action.payload;
			feeds = _.reject(state.feeds, { id });
			return { ...state, feeds };
		default:
			return state;
	}
};