import React, { memo, useEffect } from 'react';
import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { ImageProps } from 'next/image';
import { useSnapshot } from 'valtio';
import { createGlobalStyle } from 'styled-components';

import LayoutContent from '@block/common/LayoutContent';
import MainGrid from '@block/Main';

import { proxyProfile, type ProxyProfileDesc } from '@store/main/profile';

// import Character from '@image/profile/character.png';
import Caricature from '@image/profile/caricature.png';

const LocalPageStyle = createGlobalStyle`
  html, body, #__next {
    max-width: 100%;
  }
`;

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'main'])),
    },
  };
}

const Main: NextPage = () => {
  const { t } = useTranslation('main');
  const { info, desc } = useSnapshot(proxyProfile);

  useEffect(() => {
    (Object.keys(info) as Array<keyof typeof info>).forEach((key) => {
      proxyProfile.info[key] = t(`info.${key}`);
    });

    desc.forEach((item, idx) => {
      if (item.text)
        (proxyProfile.desc[idx] as { text?: string }).text = t(`desc.${idx}.text`) as string;
      if (item.focus)
        (proxyProfile.desc[idx] as { focus?: string }).focus = t(`desc.${idx}.focus`) as string;
    });
  }, [desc, info, t]);

  return (
    <>
      <LocalPageStyle />
      <LayoutContent>
        <MainGrid
          image={Caricature as ImageProps['src']}
          info={info}
          desc={desc as ProxyProfileDesc[]}
        />
      </LayoutContent>
    </>
  );
};

export default memo(Main);
