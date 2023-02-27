import React from 'react';
import Image, { ImageProps } from 'next/image';

import Character from '@image/profile/character.png';
import Caricature from '@image/profile/caricature.png';

import { ProfileDescWrap, ProfileImgWrap, ProfileInfoWrap, ProfileWrap } from './styles';

function Profile() {
  const images = [Character, Caricature];
  const random = Math.floor(Math.random() * 2);

  return (
    <ProfileWrap>
      <ProfileImgWrap>
        <Image src={images[random] as ImageProps['src']} alt='profile' width={80} priority />
      </ProfileImgWrap>
      <ProfileDescWrap></ProfileDescWrap>
      <ProfileInfoWrap>
        <h1>30, Haneum Park</h1>
        <div>RoK, Gwangju, qkrgksdma17@gmail.com</div>
        <div>Web Full-Stack Engineer</div>
        <div>DOB : 29 / 09 / 1994</div>
      </ProfileInfoWrap>
    </ProfileWrap>
  );
}

export default Profile;
