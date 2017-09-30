import {
	ALL_POSTS,
	ADD_POST,
  } from './../actions/types';
import data from './../data/posts.json';
import { SELECT_USER } from './../actions/types';

const INITIAL_STATE = data;

export default (state = INITIAL_STATE, action) => {
	console.log('##>posts Reducer action: ', action, 'State: ', state)
	switch (action.type) {
		case ALL_POSTS:
			return state;
		case ADD_POST:
			return [ ...state , action.payload];
		default:
			return state;
	}
};