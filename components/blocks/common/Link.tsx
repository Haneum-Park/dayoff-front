'use client';

import React from 'react';
import { useRouter } from 'next/router';
import Link, { LinkProps } from 'next/link';

interface LinkComponentProps extends LinkProps {
  children: React.ReactNode;
  skipLocaleHandling?: boolean;
}

function LinkComponent({ children, href, skipLocaleHandling, ...rest }: LinkComponentProps) {
  const router = useRouter();
  const locale = rest.locale || router.query.locale || '';
  href = (href || router.asPath) as string;

  if (href.indexOf('http') === 0) skipLocaleHandling = true;
  if (locale && !skipLocaleHandling) {
    href = href ? `/${locale}${href}` : router.pathname.replace('[locale]', locale as string);
  }

  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  );
}

export default LinkComponent;
