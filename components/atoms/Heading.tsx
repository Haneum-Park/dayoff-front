import React from 'react';
import styled from 'styled-components';

const Headings = {
  h1: styled.h1``,
  h2: styled.h2``,
  h3: styled.h3``,
  h4: styled.h4``,
  h5: styled.h5``,
  h6: styled.h6``,
};

interface HeadingProps extends React.HtmlHTMLAttributes<HTMLHeadingElement> {
  title: string;
  headingStyle: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

function Heading({ title, headingStyle, ...rest }: HeadingProps) {
  const HeadingStyle = Headings[headingStyle];

  return <HeadingStyle {...rest}>{title}</HeadingStyle>;
}

export default Heading;
