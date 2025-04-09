'use client';

import { useRouter } from 'next/router';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';
import { AppProps } from 'next/app';
import '@radix-ui/themes/styles.css';

import nextI18nextConfig from '@/next-i18next.config';
import LayoutContent from '@commons/LayoutContent';

import '@consts/css/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        <title>PORTFOLIO | DAY OFF</title>
      </Head>
      <LayoutContent index={pathname.split('/').length === 2}>
        <Component {...pageProps} />
      </LayoutContent>
    </>
  );
}

export default appWithTranslation(MyApp, nextI18nextConfig);
