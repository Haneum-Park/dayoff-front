import React, { useCallback, useEffect, memo } from 'react';
import { useSnapshot } from 'valtio';
import type { NextPage } from 'next';

import Layout from '@organism/Layout';

import { proxyDarkmode } from '@store/global/darkmode';

import { cookies } from '@util/common.util';

const Home: NextPage = () => {
  const { darkmode } = useSnapshot(proxyDarkmode);
  const onDarkmode = useCallback(() => {
    cookies.set('darkmode', darkmode ? '0' : '1');
    proxyDarkmode.darkmode = !darkmode;
  }, [darkmode]);

  useEffect(() => {
    const isDarkmode = cookies.get('darkmode');
    proxyDarkmode.darkmode = isDarkmode === '1';
  }, []);

  return (
    <Layout>
      <div>
        <button type='button' onClick={() => onDarkmode()}>
          {darkmode ? 'darkmode' : 'lightmode'}
        </button>
        <div>Home</div>
      </div>
    </Layout>
  );
};

export default memo(Home);
