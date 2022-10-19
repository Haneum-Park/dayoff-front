import React, { memo } from 'react';
import { useSnapshot } from 'valtio';
import styled from 'styled-components';

import GlobalStyles from '@const/globalStyles';

import { proxyDarkmode } from '@store/global/darkmode';

const LayoutWrapper = styled.div``;

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode | string;
}

function Layout({ children, ...rest }: LayoutProps) {
  const { darkmode } = useSnapshot(proxyDarkmode);

  return (
    <>
      <GlobalStyles darkmode={darkmode} />
      <LayoutWrapper {...rest}>{children}</LayoutWrapper>
    </>
  );
}

export default memo(Layout);
