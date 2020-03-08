import React from 'react';
import Link from 'next/link';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(),
    },
    link: {
      outline: 'none',
      color: 'inherit',
    },
  }),
);

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit">
            <Link href="/">
              <span className={classes.link}>Recent Posts</span>
            </Link>
          </Button>
          <Button color="inherit">
            <Link href="/posts/new">
              <span className={classes.link}>Create a new post</span>
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
