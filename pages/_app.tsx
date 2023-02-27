/* eslint-disable @next/next/no-page-custom-font */
import React, { useEffect } from 'react';
import Head from 'next/head';
// import App, { AppContext, AppProps } from 'next/app';
import { AppProps } from 'next/app';
import { useSnapshot } from 'valtio';

import GlobalStyles from '@const/globalStyles';

import { proxyDarkmode } from '@store/global/darkmode';

import { cookies } from '@util/common.util';

import './_app.css';

function MyApp({ Component, pageProps }: AppProps) {
  const { darkmode } = useSnapshot(proxyDarkmode);

  useEffect(() => {
    const isDarkmode = cookies.get('darkmode');
    proxyDarkmode.darkmode = isDarkmode === '1';
  }, []);

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='crossOrigin' />
        <link
          href='https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100&family=Source+Serif+4:opsz,wght@8..60,200;8..60,300;8..60,400;8..60,500;8..60,600;8..60,700;8..60,800;8..60,900&display=swap'
          rel='stylesheet'
        />
        <title>HANUMI | PORTFOLIO</title>
      </Head>
      <GlobalStyles darkmode={darkmode} />
      <Component {...pageProps} />
    </>
  );
}

// MyApp.getInitialProps = async (appContext: AppContext) => {
//   const appProps = await App.getInitialProps(appContext);

//   const userAgent = (await appContext.ctx.req)
//     ? appContext.ctx.req?.headers['user-agent']
//     : navigator.userAgent;

//   appProps.pageProps.userAgent = userAgent;

//   return { ...appProps };
// };

export default MyApp;
