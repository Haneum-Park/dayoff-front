import React from 'react';
import Image, { ImageProps } from 'next/image';
import styled from 'styled-components';
import { useSnapshot } from 'valtio';

import FocusText from '@block/common/FocusText';

import { proxyProfile } from '@store/main/profile';

import Character from '@image/profile/character.png';
import Caricature from '@image/profile/caricature.png';

type MainGridProps = {
  children?: React.ReactNode;
};

function MainGrid({ children }: MainGridProps) {
  const images = [Character, Caricature];
  const random = Math.floor(Math.random() * 2);
  const { info, desc } = useSnapshot(proxyProfile);

  return (
    <MainGridWrap>
      <ProfileWrap>
        <ProfileImgWrap>
          <Image src={images[random] as ImageProps['src']} alt='profile' width={80} priority />
        </ProfileImgWrap>
        <ProfileDescWrap>
          {desc.map(({ text, focus }, idx) => text || <FocusText key={idx}>{focus}</FocusText>)}
        </ProfileDescWrap>
        <ProfileInfoWrap>
          <h1>{info.name}</h1>
          <div>{info.address}</div>
          <div>{info.job}</div>
          <div>DOB : {info.dob}</div>
        </ProfileInfoWrap>
      </ProfileWrap>
      {children}
    </MainGridWrap>
  );
}

export default MainGrid;

const MainGridWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const ProfileWrap = styled.div`
  display: grid;
  grid-template-columns: 0.1fr 1fr 0.5fr;
  gap: 3rem;
  width: 100%;
`;

const ProfileImgWrap = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: var(--color-gray-0);
  overflow: hidden;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const ProfileDescWrap = styled.div`
  width: 100%;
  max-width: calc(600rem / 16);
  border: 1px solid var(--color-gray-6);
  border-radius: 5rem;
  margin: 0.5rem 0;
  padding: 1.5rem;
  font-size: 14px;
  color: var(--color-gray-6);
`;

const ProfileInfoWrap = styled.div`
  text-align: right;
  width: 100%;
  max-width: calc(330rem / 16);

  h1 {
    margin: 0 0 0.5rem;
    font-family: 'Noto Sans KR', sans-serif;
    font-family: 'Source Serif 4', serif;
    font-weight: 300;
    color: var(--color-gray-9);
  }

  div {
    font-family: 'ExtraLight';
    font-size: 14px;
    color: var(--color-gray-6);
  }
`;
