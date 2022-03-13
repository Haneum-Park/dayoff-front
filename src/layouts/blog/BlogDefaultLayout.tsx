import React, { memo } from 'react';

import Footer from '@comp/blog/common/footer/Footer';
import Header from '@comp/blog/common/header/Header';

import { ParentProps } from '@interface/common.interface';

import { DefaultStyle } from './globalStyles';

interface DefaultLayoutProps extends ParentProps {
  isHeader?: boolean;
  isFooter?: boolean;
}

function BlogDefaultLayout({ children, isHeader = true, isFooter = true }: DefaultLayoutProps) {
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

export default memo(BlogDefaultLayout);
