import React from 'react';
import styled from 'styled-components';

interface ChevronProps {
  isAccordian?: boolean;
  direction?: 'top' | 'down' | 'left' | 'right';
}

function IconChevron({ isAccordian, direction = 'down' }: ChevronProps) {
  return <ChevronWrap isAccordian={isAccordian} className={direction} />;
}

export default IconChevron;

const ChevronWrap = styled.div<Omit<ChevronProps, 'direction'>>`
  position: relative;
  display: block;
  transform: scale(1);
  width: 25px;
  height: 25px;
  border: 1px solid transparent;

  ${({ isAccordian }) => (isAccordian ? 'opacity: 1 !important;' : '')}

  &::before,
  &::after {
    content: '';
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10px;
    height: 10px;
    left: 50%;
    transition: top 0.5s ease-in-out, transform 0.5s ease-in-out;
  }

  &.top::before,
  &.top::after {
    top: 65%;
    transform: translate(-50%, -50%) rotateX(180deg) rotateZ(-135deg);
  }

  &.top::before {
    border-top: 1px solid;
  }
  &.top::after {
    border-left: 1px solid;
  }

  &.down::before,
  &.down::after {
    top: 45%;
    transform: translate(-50%, -50%) rotateX(0deg) rotateZ(-135deg);
  }

  &.down::before {
    border-top: 1px solid;
  }

  &.down::after {
    border-left: 1px solid;
  }
`;
