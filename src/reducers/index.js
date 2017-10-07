import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import postSelectionReducer from './postSelectionReducer';
import authReducer from './authReducer';
import navReducer from './navReducer';

export default combineReducers({
  postsData: postsReducer,
  //currentPost: postSelectionReducer,
  auth: authReducer,
  nav: navReducer,
});
