import {
    SELECT_USER,
    EMAIL_CHANGED,
    PASSWORD_CHANGED
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
