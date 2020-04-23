import React from 'react';
import { ThemeProvider } from 'styled-components';

import Router from './router';

import GlobalStyle from './styles/global';
import light from './styles/themes/light';

function App() {
  return (
		<ThemeProvider theme={light}>
			<GlobalStyle />
			<Router />
		</ThemeProvider>
  );
}

export default App;
