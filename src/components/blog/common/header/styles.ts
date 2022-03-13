import styled from 'styled-components';

import { pixelToRem } from '@util/style.util';

export const HeaderWrap = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${pixelToRem(16)} !important;
  margin-bottom: ${pixelToRem(16)} !important;
`;
