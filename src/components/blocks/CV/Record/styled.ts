'use client';

import styled from '@emotion/styled';
import { Flex, Text } from '@radix-ui/themes';

import { MEDIA_QUERY } from '@utils/design.util';

export const MainContentWrap = styled(Flex)`
  width: 100%;
  height: 900px;
  overflow-y: auto;
  margin-top: 2rem;

  > div {
    width: 100%;
    &:first-of-type {
      max-width: 30%;
    }
    &:nth-of-type(2) {
      max-width: 50%;
    }
    &:last-of-type {
      max-width: 20%;
    }
  }

  ${MEDIA_QUERY.max('lg-tablet')} {
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
    padding: 0 1rem;
    height: 100%;
    overflow-y: initial;

    > div {
      width: 100%;
      &:first-of-type,
      &:nth-of-type(2),
      &:last-of-type {
        max-width: 100%;
      }
    }
  }
`;

export const MasonryWrap = styled(Flex)`
  ${MEDIA_QUERY.max('lg-tablet')} {
    &:last-of-type {
      padding-bottom: 1rem;
    }
    &:not(:first-of-type):not(:last-of-type) {
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
    }
  }
`;

export const ContentDescWrap = styled(Flex)``;

export const ContentListWrap = styled(Flex)`
  width: 100%;
`;

export const ContentDesc = styled(Text)``;

interface ContentMemoProps {
  route?: string;
}

export const ContentMemo = styled(Text)<ContentMemoProps>`
  margin: 0;
  cursor: ${({ route }) => (route ? 'pointer' : 'default')};

  ${({ route }) =>
    route ? 'transition: font-family 0.3s ease-in-out; &:hover { font-weight: 600; }' : ''}
`;

export const ContentExtra = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  li {
    font-size: 14px;
    font-family: Light;
  }
`;
