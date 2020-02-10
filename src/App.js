import React from 'react';
import Main from './screen/Main'
import { ThemeProvider } from 'styled-components';
import theme from './style/theme';
import GlobalStyle from './style/global';

const App = () => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <GlobalStyle/>
      <Main/>
    </React.Fragment>
  </ThemeProvider>
)

export default App;
