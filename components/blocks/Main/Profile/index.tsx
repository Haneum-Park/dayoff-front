import React from 'react';
import Image, { ImageProps } from 'next/image';

import FocusText from '@block/common/FocusText';

import { type ProxyProfile } from '@store/main/profile';

import { ProfileDescWrap, ProfileImgWrap, ProfileInfoWrap, ProfileWrap } from './styles';

export interface ProfileProps extends ProxyProfile {
  image: ImageProps['src'];
}

function Profile({ image, info, desc }: ProfileProps) {
  return (
    <ProfileWrap>
      <ProfileImgWrap className='fixed'>
        <Image src={image} alt='profile' width={80} priority />
      </ProfileImgWrap>
      <ProfileDescWrap>
        {desc.map(({ text, focus }, idx) => text || <FocusText key={idx}>{focus}</FocusText>)}
      </ProfileDescWrap>
      <ProfileInfoWrap>
        <h1>{info.name}</h1>
        <div>{info.address}</div>
        <div>{info.job}</div>
        <div>{info.dob}</div>
      </ProfileInfoWrap>
    </ProfileWrap>
  );
}

export default Profile;
