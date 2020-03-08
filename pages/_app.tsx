import withRedux, { MakeStore, ReduxWrapperAppProps } from 'next-redux-wrapper';
import App, { AppContext } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from '../store';
import { RootState } from '../types';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'typeface-roboto';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../src/theme';

const makeStore: MakeStore = (initialStore: RootState) => {
  return createStore(
    reducer,
    initialStore,
    composeWithDevTools(applyMiddleware(thunk)),
  );
};

class MyApp extends App<ReduxWrapperAppProps<RootState>> {
  static async getInitialProps({ Component, ctx }: AppContext) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps };
  }

  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }
  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <>
        <Head>
          <title>My blog</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </ThemeProvider>
      </>
    );
  }
}

export default withRedux(makeStore)(MyApp);
