'use client';

import styled from '@emotion/styled';

import { MEDIA_QUERY } from '@utils/design.util';

export interface IHeaderWrapStyle {
  type?: 'hr-kit' | 'default';
};

export const HeaderWrap = styled.nav<IHeaderWrapStyle>`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: ${({ type }) => (type === 'default' ? 'space-between' : 'flex-end')};
  align-items: center;
  width: 100%;
  padding: var(--space-2) var(--space-4);

  ul {
    display: flex;
    /* flex-direction: column; */
    gap: var(--space-2);
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;

    &.localeswitch {
      align-items: flex-end;
    }
  }

  ${MEDIA_QUERY.max('sm-tablet')} {
    top: 5%;
    left: 91%;
    ul {
      gap: var(--space-1);
    }
  }
`;
