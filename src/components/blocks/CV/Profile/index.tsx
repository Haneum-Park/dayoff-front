'use client';

import { useEffect, Fragment } from 'react';
import { useTranslations } from 'next-intl';
import { Heading, Avatar } from '@radix-ui/themes';
import { useAtom } from 'jotai';

import FocusText from '@commons/FocusText';
import { atomProfile as atomHaneumProfile } from '@stores/hr-kit/haneum/profile';
import { type TypeProfileDesc } from '@stores/hr-kit/profile.type';
import Caricature from '@images/profile/caricature.png';

import { ProfileDescWrap, ProfileImgWrap, ProfileInfoWrap, ProfileWrap } from './styled';

export interface IProfileProps {
  target: 'haneum';
}

function Profile({ target }: IProfileProps) {
  if (!['haneum'].includes(target)) return null;

  const t = useTranslations(`${target}.profile`);
  const [profile] = useAtom(atomHaneumProfile);
  const { info, desc } = profile;

  useEffect(() => {
    profile.info.name = t('info.name');
    profile.info.address = t('info.address');
    profile.info.job = t('info.job');
    profile.info.dob = t('info.dob');
    profile.desc = (Object.keys(profile.desc) as (keyof TypeProfileDesc)[]).reduce((acc: TypeProfileDesc, key) => {
      acc[key] = profile.desc[key] as TypeProfileDesc[keyof TypeProfileDesc];
      if (acc[key].text) acc[key].text = t(`desc.${key}.text` as any);
      if (acc[key].focus) acc[key].focus = t(`desc.${key}.focus` as any);
      return acc;
    }, {});
  }, []);

  return (
    <ProfileWrap>
      <ProfileImgWrap className='fixed'>
        <Avatar
          src={Caricature.src}
          alt='profile'
          size='8'
          radius='full'
          fallback='박'
        />
      </ProfileImgWrap>
      <ProfileDescWrap>
        {Object.keys(desc).map((key) => (
          <Fragment key={`profile-desc-${key}`}>
            {desc[key]?.text}
            {desc[key]?.focus && <FocusText>{desc[key]?.focus}</FocusText>}
          </Fragment>
        ))}
      </ProfileDescWrap>
      <ProfileInfoWrap>
        <Heading size='8'>{info.name}</Heading>
        <div>{info.address}</div>
        <div>{info.job}</div>
        <div>{info.dob}</div>
      </ProfileInfoWrap>
    </ProfileWrap>
  );
}

export default Profile;
