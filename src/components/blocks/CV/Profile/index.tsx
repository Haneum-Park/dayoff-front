'use client';

import { Fragment } from 'react';
import Image from 'next/image';
import { Heading } from '@radix-ui/themes';
import { useAtom } from 'jotai';

import FocusText from '@commons/FocusText';
import { atomProfile } from '@stores/profile';
import Caricature from '@images/profile/caricature.png';

import { ProfileDescWrap, ProfileImgWrap, ProfileInfoWrap, ProfileWrap } from './styled';

export interface IProfileProps {}

function Profile() {
  const [profile] = useAtom(atomProfile);
  const { info, desc } = profile;

  return (
    <ProfileWrap>
      <ProfileImgWrap className='fixed'>
        <Image src={Caricature} alt='profile' width={80} />
      </ProfileImgWrap>
      <ProfileDescWrap>
        {desc.map(({ text, focus }, idx) => (
          <Fragment key={`profile-desc-${idx}`}>
            {text}
            {focus && <FocusText>{focus}</FocusText>}
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
