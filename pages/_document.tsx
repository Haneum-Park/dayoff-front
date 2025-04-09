'use client';

import Document, { Html, Head, Main, NextScript } from 'next/document';

import i18nextConfig from '@/next-i18next.config';

export default class MyDocument extends Document {
  render(): any {
    const currentLocale = this.props.__NEXT_DATA__.query.locale || i18nextConfig.i18n.defaultLocale;

    return (
      <Html lang={currentLocale as string}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
