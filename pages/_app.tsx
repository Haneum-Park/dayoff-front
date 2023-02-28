/* eslint-disable no-param-reassign */
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

  useEffect(() => {
    if (document) {
      // ? validate all element color
      const allElement = document.querySelectorAll('body *') as NodeListOf<HTMLElement>;
      allElement.forEach((element) => {
        const { color } = window.getComputedStyle(element);
        if (color === 'rgb(248, 249, 250)') {
          element.style.color = '#212529';
          if (element.style.backgroundColor) {
            element.style.backgroundColor = '#f8f9fa';
          }
        } else if (color === 'rgb(241, 243, 245)') {
          element.style.color = '#343a40';
          if (element.style.backgroundColor) {
            element.style.backgroundColor = '#f1f3f5';
          }
        } else if (color === 'rgb(233, 236, 239)') {
          element.style.color = '#495057';
          if (element.style.backgroundColor) {
            element.style.backgroundColor = '#e9ecef';
          }
        } else if (color === 'rgb(222, 226, 230)') {
          element.style.color = '#868e96';
          if (element.style.backgroundColor) {
            element.style.backgroundColor = '#dee2e6';
          }
        } else if (color === 'rgb(206, 212, 218)') {
          element.style.color = '#adb5bd';
          if (element.style.backgroundColor) {
            element.style.backgroundColor = '#ced4da';
          }
        } else if (color === 'rgb(173, 181, 189)') {
          element.style.color = '#ced4da';
          if (element.style.backgroundColor) {
            element.style.backgroundColor = '#adb5bd';
          }
        } else if (color === 'rgb(134, 142, 150)') {
          element.style.color = '#dee2e6';
          if (element.style.backgroundColor) {
            element.style.backgroundColor = '#868e96';
          }
        } else if (color === 'rgb(73, 80, 87)') {
          element.style.color = '#e9ecef';
          if (element.style.backgroundColor) {
            element.style.backgroundColor = '#495057';
          }
        } else if (color === 'rgb(52, 58, 64)') {
          element.style.color = '#f1f3f5';
          if (element.style.backgroundColor) {
            element.style.backgroundColor = '#343a40';
          }
        } else if (color === 'rgb(33, 37, 41)') {
          element.style.color = '#f8f9fa';
          if (element.style.backgroundColor) {
            element.style.backgroundColor = '#212529';
          }
        }
      });
    }
  }, [darkmode]);

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
