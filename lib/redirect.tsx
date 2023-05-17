/* eslint-disable no-param-reassign */
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import languageDetector from './languageDetector';

export const useRedirect = (to?: string) => {
  const router = useRouter();
  to = to || router.asPath;

  useEffect(() => {
    const detectedLng = languageDetector.detect();
    if (to!.startsWith(`/${detectedLng}`) && router.route === '/404') {
      router.replace(`/${detectedLng}${router.route}`);
      // eslint-disable-next-line no-useless-return
      return;
    }
  });

  return <></>;
};

export const Redirect = () => {
  useRedirect();
  return <></>;
};

// eslint-disable-next-line react/display-name
export const getRedirect = (to?: string) => () => {
  useRedirect(to);
  return <></>;
};
