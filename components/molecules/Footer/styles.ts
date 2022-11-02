import styled from 'styled-components';

type FooterWrapProps = {
  colorcode?: string;
};

export const FooterInfoWrap = styled.p<FooterWrapProps>`
  color: var(${({ colorcode }) => colorcode || '--color-grey-7'});
  font-size: calc(14rem / 16);
`;

export const CopyrightWrap = styled.p`
  font-size: calc(13rem / 16);
  color: var(--color-gray-4) !important;
  font-weight: var(--bold);
`;
