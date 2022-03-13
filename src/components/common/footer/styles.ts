import styled from 'styled-components';

import { pixelToRem, colorchip } from '@util/style.util';

export const FooterWrap = styled.footer<{ fontSize?: number }>`
  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    span {
      display: flex;
      align-items: center;
      color: ${colorchip.black};
      font-size: ${({ fontSize }) => pixelToRem(fontSize || 14)};
      &::after {
        content: '';
        display: flex;
        align-items: center;
        margin: 0 ${pixelToRem(10)};
        width: 1px;
        height: 8px;
        margin-bottom: 0.15rem;
        background-color: ${colorchip.gray}
      }
      &:last-child::after {
        content: '';
        display: none;
      }
    }
  }

  .footer-base-info {
    margin-bottom: ${pixelToRem(1)};
  }

  .copyright {
    margin-bottom: ${pixelToRem(20)};
  }
`;
