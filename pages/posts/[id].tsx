import Layout from '../../components/MyLayout';
import { NextPage, NextPageContext } from 'next';
import { getPostFromServer, sendCommentOnServer } from '../../api';
import { Comment } from '../../types';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { setCommentBody, setPost } from '../../store/actions';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Button, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textField: {
      marginTop: '25px',
      marginBottom: '10px',
      maxWidth: '60%',
      justifyContent: 'center',
    },
    root: {
      flexGrow: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    paper: {
      minHeight: '60vh',
      minWidth: '60vw',
      maxWidth: '90vw',
      marginTop: '20px',
      marginRight: '20px',
      marginLeft: '20px',
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.primary,
      outline: 'none',
      cursor: 'pointer',
    },
    comment: {
      display: 'flex',
      alignItems: 'center',
      width: 'max-content',
      paddingTop: '5px',
      paddingLeft: '15px',
      paddingRight: '15px',
      marginTop: '15px',
      maxWidth: '30vw',
      minHeight: '50px',
    },
    post: {
      paddingBottom: '20px',
    },
    commentTitle: {
      fontWeight: 'bold',
      paddingTop: '15px',
    },
  }),
);

const PostPage: NextPage = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const commentBody = useSelector(
    (state: RootStateOrAny) => state.inputs.commentBody,
  );
  const post = useSelector((state: RootStateOrAny) => state.posts.post);

  const addComment = async (
    postId: number | undefined,
    commentBody: string,
  ) => {
    if (commentBody.trim()) {
      await sendCommentOnServer(postId, commentBody);
      dispatch(setPost(await getPostFromServer(postId)));
      dispatch(setCommentBody(''));
    } else {
      alert(`Your comment is empty, please, fill it.`);
    }
  };

  return (
    <Layout>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Paper className={classes.post}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </Paper>
          <div>
            <div>
              <div className={classes.commentTitle}>Comments:</div>
              {post.comments ? (
                post.comments.map((comment: Comment) => (
                  <Paper key={comment.id} className={classes.comment}>
                    <div>{comment.body}</div>
                  </Paper>
                ))
              ) : (
                <div>No comments yet</div>
              )}
            </div>
            <div>
              <TextField
                id="outlined-multiline-flexible"
                className={classes.textField}
                label="New comment"
                multiline
                rowsMax="100"
                fullWidth
                placeholder="Add your comment here"
                value={commentBody}
                onChange={e => dispatch(setCommentBody(e.target.value))}
                variant="outlined"
              />
            </div>
            <Button onClick={() => addComment(post.id, commentBody)}>
              Add new comment
            </Button>
          </div>
        </Paper>
      </div>
    </Layout>
  );
};

PostPage.getInitialProps = async function(context: NextPageContext) {
  const { id } = context.query;
  const post = await getPostFromServer(+id);
  context.store.dispatch(setPost(post));
  return { post };
};

export default PostPage;
