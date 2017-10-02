import firebase from 'firebase';
import {
	ALL_POSTS,
	ADD_POST,
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

export const addPost = (post) => {
	return {
		type: ADD_POST,
		payload: post
	};
};

export const emailChanged = (text) => {
	return {
		type: EMAIL_CHANGED,
		payload: text
	};
};

export const passwordChanged = (text) => {
	return {
		type: PASSWORD_CHANGED,
		payload: text
	};
};


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