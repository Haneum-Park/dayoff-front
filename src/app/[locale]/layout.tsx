import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { Locale, hasLocale, NextIntlClientProvider } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ThemeProvider } from 'next-themes';

import { routing } from '@i18n/routing';
import '@consts/css/global.css';
import '@radix-ui/themes/styles.css';

type TypeLocaleLayout = {
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
  type: 'hr-kit' | 'default';
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(props: Omit<TypeLocaleLayout, 'children'>) {
  const {locale} = await props.params;
  const t = await getTranslations({locale, namespace: 'LocaleLayout'});

  return {
    title: t('title')
  };
}

export default async function LocaleLayout({ children, params, type = 'default' }: TypeLocaleLayout) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  
  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute='class' storageKey='theme' themes={['light', 'dark']} defaultTheme='light'>
          <NextIntlClientProvider>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};