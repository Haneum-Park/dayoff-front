'use client';

import { memo, useEffect } from 'react';
import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { useAtom, useSetAtom } from 'jotai';

import { getStaticPaths, makeStaticProps } from '@libs/getStatic';

import Profile from '@blocks/Main/Profile';
import Record from '@blocks/Main/Record';
import { MainGridWrap } from '@blocks/Main/styled';

import { atomProfile } from '@stores/main/profile';
import { atomRecord, type TypeContentProps } from '@stores/main/record';
import { atomAlert } from '@stores/global/isAlert';

import Caricature from '@images/profile/caricature.png';

const getStaticProps = makeStaticProps(['common', 'main']);

export { getStaticPaths, getStaticProps };

const Main: NextPage = () => {
  const { t } = useTranslation<string>('main');
  const [profile, setProfile] = useAtom(atomProfile);
  const [record, setRecord] = useAtom(atomRecord);
  const setOpenAlert = useSetAtom(atomAlert);

  useEffect(() => {
    (Object.keys(profile.info) as Array<keyof typeof profile.info>).forEach((key) => {
      profile.info[key] = t(`info.${key}`);
    });
  }, [t]);

  useEffect(() => {
    setProfile((prev) => ({
      ...prev,
      desc: prev.desc.map((item, idx) => {
        if (item.text) {
          (item as { text?: string }).text = t(`desc.${idx}.text`) as string;
        }
        if (item.focus) {
          (item as { focus?: string }).focus = t(`desc.${idx}.focus`) as string;
        }
        return item;
      }),
    } as typeof profile));

    setRecord((prev) => {
      if (!prev) return prev;
      (Object.keys(prev) as Array<keyof typeof prev>).forEach((key) => {
        const content = prev[key] as unknown as TypeContentProps;
        content.title = t(`record.${key}.title`);
        content.list = content.list.map((item, idx) => {
          item.desc = t(`record.${key}.list.${idx}.desc`);
          item.memo = t(`record.${key}.list.${idx}.memo`);
          item.extra =
            item.extra && item.extra.length > 0
              ? (t(`record.${key}.list.${idx}.extra`, { returnObjects: true }) as string[])
              : [];
          return item;
        });
        return prev[key];
      });
      return prev;
    });
  }, [t]);

  useEffect(() => {
    setOpenAlert(true);
  }, []);

  return (
    <MainGridWrap>
      <Profile image={Caricature} {...profile} />
      <Record {...record} />
    </MainGridWrap>
  );
};

export default memo(Main);
