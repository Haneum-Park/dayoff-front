import React, { memo } from 'react';
import type { NextPage } from 'next';

import MainGrid from '@template/MainGrid';

import MainLogo from '@image/logo/header/logo.png';
import JumbotronLogo from '@image/logo/main/jumbotron-text-logo.png';

const Home: NextPage = () => (
  <MainGrid
    header={{
      img: {
        src: MainLogo,
        alt: 'Main Logo',
        width: 50,
        height: 50,
      },
    }}
    jumbotron={{
      img: {
        src: JumbotronLogo,
        alt: 'Jumbotron Logo',
        width: 600,
        height: 185.735,
      },
      groupBtn: {
        maxWidth: 'calc(180rem / 16)',
        btns: [
          {
            children: 'dev.haneum.park',
          },
          {
            children: 'uxui.seoye.kim',
          },
        ],
      },
    }}
  />
);

export default memo(Home);
