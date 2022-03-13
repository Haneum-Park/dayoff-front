import React, { memo } from 'react';
import styled from 'styled-components';

import { pixelToRem } from '@util/style.util';

import { ParentProps } from '@interface/common.interface';

const SectionWrap = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(5%, auto));
  gap: 0;
  padding: ${pixelToRem(16)};
`;

function Section({ children }: ParentProps) {
  return (
    <SectionWrap>
      {children}
    </SectionWrap>
  );
}

export default memo(Section);
