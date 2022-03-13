import React, { memo } from 'react';

import BlogDefaultLayout from '@layout/blog/BlogDefaultLayout';

import BlogMainComp from '@comp/blog/main/index';

const BlogMain = () => (
  <BlogDefaultLayout>
    <BlogMainComp />
  </BlogDefaultLayout>
);

export default memo(BlogMain);
