'use client';

import Image, { ImageProps } from 'next/image';
import { Heading } from '@radix-ui/themes';

import FocusText from '@commons/FocusText';
import { type TypeAtomProfile } from '@stores/main/profile';

import { ProfileDescWrap, ProfileImgWrap, ProfileInfoWrap, ProfileWrap } from './styled';

export interface ProfileProps extends TypeAtomProfile {
  image: ImageProps['src'];
}

function Profile({ image, info, desc }: ProfileProps) {
  return (
    <ProfileWrap>
      <ProfileImgWrap className='fixed'>
        <Image src={image} alt='profile' width={80} />
      </ProfileImgWrap>
      <ProfileDescWrap>
        {desc.map(({ text, focus }, idx) => text || <FocusText key={idx}>{focus}</FocusText>)}
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
