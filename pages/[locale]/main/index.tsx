/* eslint-disable no-param-reassign */
import React, { memo, useEffect } from 'react';
import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { useSnapshot } from 'valtio';

import { getStaticPaths, makeStaticProps } from '@lib/getStatic';

// import Alert from '@common/Alert';
import LayoutContent from '@common/LayoutContent';
import Profile from '@block/Main/Profile';
import Record from '@block/Main/Record';
import { MainGridWrap } from '@block/Main/styles';

import { proxyProfile, type ProxyProfileDesc } from '@store/main/profile';
import { proxyRecord, type ProxyRecord } from '@store/main/record';
import { setOpenAlert } from '@store/global/isAlert';

// import Character from '@image/profile/character.png';
import Caricature from '@image/profile/caricature.png';

const getStaticProps = makeStaticProps(['common', 'main']);

export { getStaticPaths, getStaticProps };

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
    <LayoutContent>
      {/* <Alert color='gray-9'>포트폴리오 PDF 다운로드</Alert> */}
      <MainGridWrap>
        <Profile image={Caricature} info={info} desc={desc as ProxyProfileDesc[]} />
        <Record {...(record as ProxyRecord['record'])} />
      </MainGridWrap>
    </LayoutContent>
  );
};

export default memo(Main);
