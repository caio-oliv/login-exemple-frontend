import styled from 'styled-components';

export const Container = styled.button`
	padding: 8px 0px;
	border-radius: 2px;

	background: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.text};
	font-size: 1.2em;
	cursor: pointer;

	transition: background 0.2s;
	transition: color 0.2s;

	:hover {
		background: ${({ theme }) => theme.colors.text};
		color: ${({ theme }) => theme.colors.background}
	}
`;
