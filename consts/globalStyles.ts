import { createGlobalStyle } from 'styled-components';

interface GlobalStylesProps {
  darkmode: boolean;
}

const GlobalStyles = createGlobalStyle<GlobalStylesProps>`
  html,
  body,
  #__next {
    background-color: var(${({ darkmode }) => (darkmode ? '--color-gray-9' : '--color-gray-0')});
    color: var(${({ darkmode }) => (darkmode ? '--color-gray-0' : '--color-gray-9')});
  }
  
  div, span, applet, object, iframe,
  blockquote, pre, a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong,
  sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend, table, caption, tbody, tfoot,
  thead, tr, th, td, article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup, menu, nav, output,
  ruby, section, summary, time, mark, audio, video, *, *::before, *::after {
    color: var(${({ darkmode }) => (darkmode ? '--color-gray-0' : '--color-gray-9')});
  }
`;

export default GlobalStyles;
