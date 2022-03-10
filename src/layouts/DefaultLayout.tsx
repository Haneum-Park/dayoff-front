import React, { memo } from 'react';

import Footer from '@comp/common/footer/Footer';
import Header from '@comp/common/header/Header';

import { ParentProps } from '@interface/common.interface';

import { DefaultStyle } from './globalStyles';

interface DefaultLayoutProps extends ParentProps {
  isHeader?: boolean;
  isFooter?: boolean;
}

function DefaultLayout({ children, isHeader = true, isFooter = true }: DefaultLayoutProps) {
  return (
    <>
      <DefaultStyle>
        {isHeader && <Header />}
        {children}
        {isFooter && <Footer />}
      </DefaultStyle>
    </>
  );
}

export default memo(DefaultLayout);
