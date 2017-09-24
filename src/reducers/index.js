import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
  posts: postsReducer,
  selectedLibraryId: SelectionReducer
});
