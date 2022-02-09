import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import mainTheme from '@/styled/themes/mainTheme';
import GlobalStyle from '@/styled/globalStyle';
import store from '@store';
import Routing from '@router';
import ErrorBoundary from '@components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <ThemeProvider theme={mainTheme}>
          <GlobalStyle />
          <BrowserRouter>
            <h1>test passed!</h1>
            <Routing />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
