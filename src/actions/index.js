import firebase from 'firebase';
import {
	SELECT_USER,
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGIN_USER
  } from './types';

export const selectUser = (post) => {
	console.log('==>Action creator function, post: ', post)
	return {
		type: SELECT_USER,
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