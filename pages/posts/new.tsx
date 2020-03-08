import Layout from '../../components/MyLayout';
import { NextPage } from 'next';
import { sendPostOnServer, getPostsFromServer } from '../../api';
import { setPostTitle, setPostBody, setPosts } from '../../store/actions';
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import Link from 'next/link';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textField: {
      minWidth: '60%',
      '& .outlined-textarea': {
        minHeight: '300px',
      },
    },
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '30vh',
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }),
);

const New: NextPage = () => {
  const classes = useStyles();

  const postsBody = useSelector(
    (state: RootStateOrAny) => state.inputs.postBody,
  );
  const postsTitle = useSelector(
    (state: RootStateOrAny) => state.inputs.postTitle,
  );
  const dispatch = useDispatch();

  const addNewPost = async (title: string, body: string) => {
    if (title.trim() && body.trim()) {
      await sendPostOnServer(title, body);
      dispatch(setPostBody(''));
      dispatch(setPostTitle(''));
      dispatch(setPosts(await getPostsFromServer()));
    } else alert('Please, fill all input fields');
  };

  return (
    <Layout>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-textarea"
          className={classes.textField}
          defaultValue={postsTitle}
          placeholder="add name for your post"
          onChange={e => dispatch(setPostTitle(e.target.value))}
          label="Title"
          multiline
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-flexible"
          className={classes.textField}
          label="Text"
          multiline
          rowsMax="100"
          fullWidth
          placeholder="what is on your mind?"
          defaultValue={postsBody}
          onChange={e => dispatch(setPostBody(e.target.value))}
          variant="outlined"
        />
        <Link href="/">
          <Button onClick={() => addNewPost(postsTitle, postsBody)}>
            Submit
          </Button>
        </Link>
      </form>
    </Layout>
  );
};

export default New;
