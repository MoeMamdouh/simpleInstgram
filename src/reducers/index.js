import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import postSelectionReducer from './postSelectionReducer';

export default combineReducers({
  posts: postsReducer,
  currentPost: postSelectionReducer
});
