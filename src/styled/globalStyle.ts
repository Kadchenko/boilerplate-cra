import { createGlobalStyle } from 'styled-components';

import reset from './reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  // additional reset
  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  button {
    cursor: pointer;
    padding: 0;
    background: transparent;
    border: none;
    outline: none;
  }
  // additional reset
  
  // fix for user agent stylesheet
  button, textarea {
    font: inherit;
  }
  // fix for user agent stylesheet

  html, body {
    height: 100%;
  }
  html {
    ${({ theme }) => theme.fonts.main.fontSize};
  }
  body {
    color: ${({ theme }) => theme.colors.text};
  }
  #root {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyle;
