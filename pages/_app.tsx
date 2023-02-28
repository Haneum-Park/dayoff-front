/* eslint-disable @next/next/no-page-custom-font */
import React, { useEffect } from 'react';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';
// import App, { AppContext, AppProps } from 'next/app';
import { AppProps } from 'next/app';
import { useSnapshot } from 'valtio';

import nextI18nextConfig from '@/next-i18next.config';
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

export default appWithTranslation(MyApp, nextI18nextConfig);
