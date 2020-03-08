import Layout from '../components/MyLayout';
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import Link from 'next/link';
import { NextPage } from 'next';
import {
  getPostFromServer,
  getPostsFromServer,
  removePostFromServer,
} from '../api';
import { setPosts, setPost } from '../store/actions';
import { Post } from '../types';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    postBody: {
      display: 'box',
      margin: 'auto',
      textAlign: 'justify',
      maxHeight: '500px',
      overflow: 'hidden',
      lineClamp: 5,
      boxOrient: 'vertical',
    },
    link: {
      display: 'block',
      textDecoration: 'none',
      color: 'black',
      fontSize: '24px',
    },
    root: {
      flexGrow: 1,
    },
    paper: {
      marginTop: '20px',
      padding: '25px',
      textAlign: 'center',
      color: theme.palette.text.primary,
      outline: 'none',
      cursor: 'pointer',
      marginLeft: '20px',
      marginRight: '20px',
    },
  }),
);

const Index: NextPage = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const posts = useSelector((state: RootStateOrAny) => state.posts.posts);

  const getPosts = async () => {
    dispatch(setPosts(await getPostsFromServer()));
  };
  const removePost = async (id: number | undefined) => {
    await removePostFromServer(id);
    getPosts();
  };

  return (
    <Layout>
      <div className={classes.root}>
        <Grid container>
          {posts.map((post: Post) => (
            <Grid item xs={12} sm={6} key={post.id}>
              <Paper
                className={classes.paper}
                onClick={async () =>
                  dispatch(setPost(await getPostFromServer(post.id)))
                }
              >
                <Link href="/posts/[id]" as={`/posts/${post.id}`}>
                  <div>
                    <a className={classes.link}>{post.title}</a>
                    <Typography className={classes.postBody}>
                      {post.body}
                    </Typography>
                  </div>
                </Link>
                <Button onClick={() => removePost(post.id)}>{`delete`}</Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  );
};

Index.getInitialProps = async ({ store }) => {
  const data = await getPostsFromServer();
  store.dispatch(setPosts(data));
  return { data };
};

export default Index;

/* {posts.map((post: Post) => (
  <div key={post.id}>
    <div>
      <span onClick={() => removePost(post.id)}>{`delete`}</span>
      <Link href="/posts/[id]" as={`/posts/${post.id}`}>
        <a
          onClick={async () =>
            dispatch(setPost(await getPostFromServer(post.id)))
          }
        >
          {post.title}
        </a>
      </Link>
      {post.body}
    </div>
  </div> */
