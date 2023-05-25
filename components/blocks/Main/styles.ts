import styled from 'styled-components';

import { MEDIA_QUERY } from '@util/design.util';

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
