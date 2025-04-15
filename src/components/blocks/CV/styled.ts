'use client';

import styled from '@emotion/styled';

import { MEDIA_QUERY } from '@utils/design.util';

export const MainGridWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 2rem 0;

  ${MEDIA_QUERY.max('lg-tablet')} {
    justify-content: flex-start;
    height: 100vh;
    padding: 1rem 0 0;
    overflow-y: auto;
  }
`;
