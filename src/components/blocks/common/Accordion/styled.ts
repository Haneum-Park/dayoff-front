'use client';

import styled from '@emotion/styled';
import { Accordion } from 'radix-ui';

import { ChevronWrap } from '@blocks/common/Icon/Chevron';
import { MEDIA_QUERY } from '@utils/design.util';

const { Root, Item, Header, Trigger, Content } = Accordion;

export const AccordionRootWrap = styled(Root)`
  margin-bottom: var(--space-6);
`;

export const AccordionItemContainer = styled(Item)`
  &:first-of-type {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  &:last-of-type {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  &:focus-within {
    position: relative;
    z-index: 1;
  }
`;

export const AccordionHeaderWrap = styled(Header)`
  display: flex;
  width: 100%;
  margin-bottom: var(--space-3);
`;

export const AccordionTriggerContainer = styled(Trigger)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: transparent;
  border: none;
  padding: 0;

  &[data-state='open'] {
    ${MEDIA_QUERY.max('mobile')} {
      & > svg:last-of-type {
        opacity: 1;
      }  
    }
    &:hover > svg:last-of-type {
      opacity: 1;
    }
    & > svg:last-of-type {
      transform: rotate(180deg);
    }
  }

  &[data-state='closed'] > svg:last-of-type {
    opacity: 1;
  }
`;

export const AccordionChevronWrap = styled(ChevronWrap)`
  opacity: 0;
  transition: transform 300ms cubic-bezier(0.87, 0, 0.13, 1) opacity 0.3s ease-in-out;
`;

export const AccordionContentContainer = styled(Content)`
  overflow: hidden;

  &[data-state='open'] {
    animation: slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }

  &[data-state='closed'] {
    animation: slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }

  @keyframes slideDown {
    from {
      height: 0;
    }

    to {
      height: var(--radix-accordion-content-height);
    }
  }

  @keyframes slideUp {
    from {
      height: var(--radix-accordion-content-height);
    }

    to {
      height: 0;
    }
  }
`;