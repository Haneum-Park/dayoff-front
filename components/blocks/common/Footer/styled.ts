import styled from '@emotion/styled';

import { MEDIA_QUERY } from '@utils/design.util';

export const FooterInfoWrap = styled.div`
  display: flex;

  /* @media screen and (max-width: 1040px) {
    flex-direction: column;
    align-items: center;
  } */

  ${MEDIA_QUERY.max('tablet')} {
    flex-direction: column;
    align-items: center;
  }

  & > div {
    color: var(--gray-5);
    font-size: calc(14rem / 16);

    &:not(:last-of-type)::after {
      content: '|';
      color: var(--gray-5);
      font-size: calc(14rem / 16);
      padding: 0 0.3rem;
      ${MEDIA_QUERY.max('tablet')} {
        content: '';
      }
    }
  }
`;

export const CopyrightWrap = styled.div`
  font-size: calc(13rem / 16);
  color: var(--gray-4) !important;
  font-weight: var(--bold);
`;

export const FooterWrap = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
