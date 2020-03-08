import axios from 'axios';
import { setPosts } from './store/actions';
import { Dispatch } from 'redux';
export const baseURL = 'https://simple-blog-api.crew.red';

export const api = axios.create({
  baseURL,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
});

export const getPostFromServer = async (postId: number | undefined) => {
  const data = await api
    .get(baseURL + '/posts/' + postId + '?_embed=comments')
    .then(({ data }) => data);
  return data;
};

export const sendCommentOnServer = async (
  postId: number | undefined,
  commentBody: string,
) => {
  await api.post(baseURL + '/comments', { postId, body: commentBody });
};
export const sendPostOnServer = async (title: string, body: string) => {
  await api.post(baseURL + '/posts', { title, body });
};

export const getPostsFromServer = async () => {
  const data = await api.get(baseURL + '/posts').then(({ data }) => data);
  return data;
};

export const removePostFromServer = async (id: number | undefined) => {
  await api.delete(baseURL + '/posts/' + id);
};

export const test = () => (dispatch: Dispatch) =>
  api
    .get(baseURL + '/posts')
    .then(({ data }) => data)
    .then(posts => dispatch(setPosts(posts)));
