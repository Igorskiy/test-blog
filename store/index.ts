import { combineReducers } from 'redux';
import { postsReducer } from './postsReducer';
import { inputReducer } from './inputReducer';

export const reducer = combineReducers({
  posts: postsReducer,
  inputs: inputReducer,
});
