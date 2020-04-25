import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		border: 0;
		outline: 0;
		box-sizing: border-box;
		border-collapse: collapse;
		font-size: 1rem;
		font-family: Roboto, Helvetica, Arial, sans-serif;
		color: ${({ theme }) => theme.colors.text};
	}

	body, #root, .app {
		height: 100vh;
	}

	body: {
		background: ${({ theme }) => theme.colors.background};
	}
`;
