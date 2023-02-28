import styled, { createGlobalStyle } from 'styled-components';

import { LayoutContentBackground } from '@block/common/LayoutContent';

export const LocalPageStyle = createGlobalStyle`
  html, body, #__next {
    max-width: 100%;
  }
`;

export const IndexGridBackground = styled(LayoutContentBackground)`
  position: absolute;
  top: 0;
  left: 0;
`;
