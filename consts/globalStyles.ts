import { createGlobalStyle } from 'styled-components';

interface GlobalStylesProps {
  darkmode: boolean;
}

const GlobalStyles = createGlobalStyle<GlobalStylesProps>`
  /* html,
  body,
  #__next {
    background-color: var(${({ darkmode }) => (darkmode ? '--color-gray-9' : '--color-gray-0')});
    color: var(${({ darkmode }) => (darkmode ? '--color-gray-0' : '--color-gray-9')});
  } */
  html,
  body,
  #__next {
    background-color: var(--color-gray-0);
    color: var(--color-gray-9);
  }

  .darkmode {
    --color-gray-0: #212529;
    --color-gray-1: #343a40;
    --color-gray-2: #495057;
    --color-gray-3: #868e96;
    --color-gray-4: #adb5bd;
    --color-gray-5: #ced4da;
    --color-gray-6: #dee2e6;
    --color-gray-7: #e9ecef;
    --color-gray-8: #f1f3f5;
    --color-gray-9: #f8f9fa;
  }
  
  div, span, applet, object, iframe,
  blockquote, pre, a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong,
  sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend, table, caption, tbody, tfoot,
  thead, tr, th, td, article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup, menu, nav, output,
  ruby, section, summary, time, mark, audio, video {
    color: var(--color-gray-9);
  }

  *, *::before, *::after {
    color: var(--color-gray-9);
  }
`;

export default GlobalStyles;
