import React, { memo } from 'react';

import CVBtns from './CVBtns';

import { IndexGridWrap, IndexGridTitle } from './styles';

type IndexGridProps = {
  children?: React.ReactNode;
};

function IndexGrid({ children }: IndexGridProps) {
  return (
    <IndexGridWrap>
      <IndexGridTitle>{children}</IndexGridTitle>
      <CVBtns />
    </IndexGridWrap>
  );
}

export default memo(IndexGrid);
