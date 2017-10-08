import firebase from 'firebase';
import {
	ALL_POSTS,
	USER_POSTS,
	ADD_POST,
	DELETE_POST,
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGIN_USER
} from './types';

export const allPosts = () => {
	return {
		type: ALL_POSTS,
	};
};

export const userPosts = (userId) => {
	return {
		type: USER_POSTS,
		payload: userId
	};
};

export const addPost = (post) => {
	return {
		type: ADD_POST,
		payload: post
	};
};

export const deletePost = (postId) => {
	return {
		type: DELETE_POST,
		payload: postId
	};
};

export const emailChanged = (text) => ({
	type: EMAIL_CHANGED,
	payload: text
})

export const passwordChanged = (text) => ({
	type: PASSWORD_CHANGED,
	payload: text
})


export const loginUser = ({ email, password }) => {
	return (dispatch) => {
		//to show spinner
		dispatch({ type: LOGIN_USER });

		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(user => loginUserSuccess(dispatch, user))
			.catch((error) => {
				firebase.auth().createUserWithEmailAndPassword(email, password)
					.then(user => loginUserSuccess(dispatch, user))
					.catch((error) => loginUserFail(dispatch, error));
			});
	};
};

/**
 * helper function
 */
const loginUserFail = (dispatch, error) => {
	dispatch({
		type: LOGIN_USER_FAIL,
		payload: error
	});
};

/**
 * helper function
 */
const loginUserSuccess = (dispatch, user) => {
	dispatch({
		type: LOGIN_USER_SUCCESS,
		payload: user
	});
};