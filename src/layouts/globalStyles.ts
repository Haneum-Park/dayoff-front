import styled, { createGlobalStyle } from 'styled-components';

export const DefaultStyle = styled.div`
  width: 100%;
`;

export const GlobalStyle = createGlobalStyle`
  html, body, button, a, p, h1, h2, h3, h4, h5, h6, div, section, span {
    font-family: 'Apple SD Gothic Neo', sans-serif;
  }

  html, body {
    background-color: #F0F3F4;
    margin: 0;
    padding: 0;
    font-size: 14px;
    font-family: 'Apple SD Gothic Neo', sans-serif;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  img {
    width: 100%;
  }

  button {
    cursor: pointer;
    background-color: transparent;
    border: none;
  }

  ul, li {
    padding-left: 0;
    list-style: none;
  }

  a {
    color: #171717 !important;
    text-decoration: none;
  }
`;
