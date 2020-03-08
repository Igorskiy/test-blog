import {
  SET_POSTS,
  Post,
  SET_POST,
  SET_POST_BODY,
  SET_POST_TITLE,
  Comment,
  SET_COMMENT,
  SET_COMMENT_BODY,
} from '../types';

export const setCommentBody = (commentBody: string) => ({
  type: SET_COMMENT_BODY,
  commentBody,
});

export const setComment = (comment: Comment) => ({
  type: SET_COMMENT,
  comment,
});

export const setPosts = (posts: Post[]) => ({
  type: SET_POSTS,
  posts,
});

export const setPost = (post: Post) => ({
  type: SET_POST,
  post,
});

export const setPostBody = (postBody: string) => ({
  type: SET_POST_BODY,
  postBody,
});

export const setPostTitle = (postTitle: string) => ({
  type: SET_POST_TITLE,
  postTitle,
});
