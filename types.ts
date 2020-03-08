import { reducer } from './store';

export const SET_COMMENT_BODY = 'SET_COMMENT_BODY';
export const SET_COMMENT = 'SET_COMMENT';
export const SET_POSTS = 'SET_POSTS';
export const SET_POST = 'SET_POST';
export const SET_POST_BODY = 'SET_POST_BODY';
export const SET_POST_TITLE = 'SET_POST_TITLE';

export interface SetCommentBodyAction {
  type: typeof SET_COMMENT_BODY;
  commentBody: string;
}

export interface SetPostBodyAction {
  type: typeof SET_POST_BODY;
  postBody: string;
}

export interface SetPostTitleAction {
  type: typeof SET_POST_TITLE;
  postTitle: string;
}

export interface SetPostsAction {
  type: typeof SET_POSTS;
  posts: Post[];
}

export interface SetPostAction {
  type: typeof SET_POST;
  post: Post;
}

export type Actions =
  | SetPostsAction
  | SetPostAction
  | SetPostTitleAction
  | SetPostBodyAction
  | SetCommentBodyAction;

export type Post = {
  id?: number;
  title: string;
  body: string;
  comments?: Comment[];
};

export type Comment = {
  postId: number;
  body: string;
  id?: number;
};

export type RootState = ReturnType<typeof reducer>;
