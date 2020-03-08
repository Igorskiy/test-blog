import { Actions } from '../types';

const initialState = {
  postTitle: '',
  postBody: '',
  commentBody: '',
};

export const inputReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case 'SET_POST_TITLE':
      return { ...state, postTitle: action.postTitle };
    case 'SET_POST_BODY':
      return { ...state, postBody: action.postBody };
    case 'SET_COMMENT_BODY':
      return { ...state, commentBody: action.commentBody };
    default:
      return state;
  }
};
