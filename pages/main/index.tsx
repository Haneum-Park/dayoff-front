/* eslint-disable no-param-reassign */
import React, { memo, useEffect } from 'react';
import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { ImageProps } from 'next/image';
import { useSnapshot } from 'valtio';
import { createGlobalStyle } from 'styled-components';

// import Alert from '@common/Alert';
import LayoutContent from '@common/LayoutContent';
import MainGrid from '@block/Main';

import { proxyProfile, type ProxyProfileDesc } from '@store/main/profile';
import { proxyRecord, type ProxyRecord } from '@store/main/record';
import { setOpenAlert } from '@store/global/isAlert';

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
  const { record } = useSnapshot(proxyRecord);

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

    (Object.keys(record) as Array<keyof typeof record>).forEach((key) => {
      proxyRecord.record[key].title = t(`record.${key}.title`);
      proxyRecord.record[key].list.forEach((item, idx) => {
        item.desc = t(`record.${key}.list.${idx}.desc`);
        item.memo = t(`record.${key}.list.${idx}.memo`);
      });
    });
  }, [desc, info, record, t]);

  useEffect(() => {
    setOpenAlert();
  }, []);

  return (
    <>
      <LocalPageStyle />
      {/* <Alert color='gray-9'>포트폴리오 PDF 다운로드</Alert> */}
      <LayoutContent>
        <MainGrid
          image={Caricature as ImageProps['src']}
          info={info}
          desc={desc as ProxyProfileDesc[]}
          {...(record as ProxyRecord['record'])}
        />
      </LayoutContent>
    </>
  );
};

export default memo(Main);
