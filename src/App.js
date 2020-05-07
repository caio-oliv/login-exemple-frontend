import React from 'react';
import { ThemeProvider } from 'styled-components';

import Router from './router';
import UserContext from './contexts/userContext';

import usePersistedState from './hooks/usePersistedState';

import GlobalStyle from './styles/global';
import light from './styles/themes/light';

function App() {
	const [user, setUser] = usePersistedState('@user', { id: '' });

  return (
		<ThemeProvider theme={light}>
			<UserContext.Provider value={{ user, setUser }}>
				<GlobalStyle />
				<Router />
			</UserContext.Provider>
		</ThemeProvider>
  );
}

export default App;
