import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import App, { AppContext, AppProps } from 'next/app';

// import seoConfig, { BASE_URL, seoDefaultConfig } from '@config/seoConfig';

import './_app.css';

export interface PageAppProps extends AppProps {
  userAgent: string;
}

export interface MyAppProps {
  Component: typeof React.Component;
  pageProps: PageAppProps;
}

function MyApp({ Component, pageProps }: MyAppProps) {
  const { pathname } = useRouter();
  // const [seo, setSeo] = useState(seoConfig.default);

  useEffect(() => {
    // const urlName = pathname.replaceAll('/', '') as string;
    // const tmpSeo =
    //   seoConfig[Object.keys(seoConfig).find((key) => key.indexOf(urlName) > -1) || 'home'];
    // setSeo(tmpSeo);

    if (!pageProps.userAgent) {
      return;
    }
  }, [pathname, pageProps]);

  return (
    <>
      <Head>
        <meta name='viewport' content={'width=device-width, initial-scale=1'} />
        <script
          src='https://cdn.bootpay.co.kr/js/bootpay-3.3.1.min.js'
          type='application/javascript'
        />
        {/* SEO */}
        {/* <title>{seo?.title || 'METU'}</title>
        <meta httpEquiv='title' content={seo?.title} />
        <link rel='icon' type='image/x-icon' href='/favicon.ico' />
        <meta name='description' content={seoDefaultConfig.description} />
        <meta name='keywords' content={seo?.keywords.join(', ')} />
        <meta httpEquiv='author' content='caramella Inc.' />
        <meta httpEquiv='publisher' content='caramella Inc.' />
        <meta name='copyright' content='caramella Inc.' />
        <link rel='canonical' href={BASE_URL} />
        <meta name='url' content={BASE_URL} />
        <meta httpEquiv='content-language' content='ko' />
        <meta name='format-detection' content='telephone=no, address=no, email=no' /> */}

        {/* Open Graph */}
        {/* <meta property='og:title' content={seo?.openGraph.title} />
        <meta property='og:url' content={seo?.openGraph.url} />
        <meta property='og:type' content={seoDefaultConfig.openGraph.type} />
        <meta property='og:image' content={`${BASE_URL}/images/seoOg.png`} />
        <meta property='og:site_name' content={seoDefaultConfig.openGraph.site_name} />
        <meta property='og:description' content={seoDefaultConfig.description} /> */}

        {/* robots */}
        {/* <meta name='robots' content={`${seo?.robots.index}, ${seo?.robots.follow}`} /> */}

        {/* Twitter */}
        {/* <meta property='twitter:card' content={seoDefaultConfig.twitter.card} />
        <meta property='twitter:title' content={seo?.twitter.title} />
        <meta property='twitter:description' content={seoDefaultConfig.description} />
        <meta property='twitter:image' content={`${BASE_URL}/images/seoTwitter.png`} />
        <meta property='twitter:domain' content={seo?.twitter.domain} /> */}

        {/* NAVER SEO */}
        {/* <meta name='naver-site-verification' content='87ef8fc7a8f28060d05bd11006f99ceef1fa2e91' /> */}
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
