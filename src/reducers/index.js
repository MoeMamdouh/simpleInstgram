import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import postSelectionReducer from './postSelectionReducer';
import authReducer from './authReducer';

export default combineReducers({
  posts: postsReducer,
  currentPost: postSelectionReducer,
  auth: authReducer,
});
