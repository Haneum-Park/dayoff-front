import React from 'react';
import Head from 'next/head';
import App, { AppContext, AppProps } from 'next/app';

import './_app.css';

export interface PageAppProps extends AppProps {
  userAgent: string;
}

export interface MyAppProps {
  Component: typeof React.Component;
  pageProps: PageAppProps;
}

function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <>
      <Head>
        <meta name='viewport' content={'width=device-width, initial-scale=1'} />
        <title>Day off</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);

  const userAgent = (await appContext.ctx.req)
    ? appContext.ctx.req?.headers['user-agent']
    : navigator.userAgent;

  appProps.pageProps.userAgent = userAgent;

  return { ...appProps };
};

export default MyApp;
