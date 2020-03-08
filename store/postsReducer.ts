import { Actions, Post } from '../types';

const initialState = {
  posts: [] as Post[],
  post: {} as Post,
};

export const postsReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case 'SET_POSTS':
      return { ...state, posts: action.posts };
    case 'SET_POST':
      return { ...state, post: action.post };
    default:
      return state;
  }
};
