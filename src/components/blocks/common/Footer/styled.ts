'use client';

import styled from '@emotion/styled';

import { MEDIA_QUERY } from '@utils/design.util';

export const FooterWrap = styled.footer`
  position: absolute;
  bottom: 1%;
  right: 0.5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterInfoWrap = styled.div`
  display: flex;

  ${MEDIA_QUERY.max('tablet')} {
    flex-direction: column;
    align-items: center;
  }

  & > div {
    color: var(--gray-10);
    font-size: var(--font-size-1);

    &:not(:last-of-type)::after {
      content: '|';
      color: var(--gray-10);
      font-size: var(--font-size-1);
      padding: 0 0.3rem;
      ${MEDIA_QUERY.max('tablet')} {
        content: '';
      }
    }
  }
`;

export const CopyrightWrap = styled.div`
  font-size: var(--font-size-1);
  color: var(--gray-10) !important;
  font-weight: var(--font-weight-light);
`;
