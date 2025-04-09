'use client';

import styled from '@emotion/styled';
import classnames from 'classnames';
import { ChevronDownIcon } from '@radix-ui/react-icons';

interface ChevronProps {
  isAccordion?: boolean;
  direction?: 'top' | 'down' | 'left' | 'right';
  className?: string;
}

function IconChevron({ isAccordion, className, direction = 'down' }: ChevronProps) {
  return <ChevronWrap isAccordion={isAccordion} className={classnames(className, direction)} />;
}

export default IconChevron;

export const ChevronWrap = styled(ChevronDownIcon)<Omit<ChevronProps, 'direction'>>`
  position: relative;
  display: block;
  transform: scale(1);
  width: 25px;
  height: 25px;
  border: 1px solid transparent;
  transition: opacity 0.2s ease-in-out;
  cursor: pointer;
  

  &.top {
    transform: perspective(800px) rotateX(180deg);
    transition: transform 0.2s ease-in-out;
  }

  &.down {
    transform: perspective(800px) rotateX(0deg);
    transition: transform 0.2s ease-in-out;
  }
`;
