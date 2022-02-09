import React from "react";
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../src/styled/globalStyle';
import mainTheme from '../src/styled/themes/mainTheme';

const styles = {
  backgroundColor: '#d0d0d0',
  padding: '40px',
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <div style={styles}>
        <Story />
      </div>
    </ThemeProvider>
  ),
];
