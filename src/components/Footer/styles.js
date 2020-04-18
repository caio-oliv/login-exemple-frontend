import styled from 'styled-components';

export default styled.footer`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 100%;
	height: 35px;
	background: ${({ theme }) => theme.colors.primary};
	border-top: solid 2px ${({ theme }) => theme.colors.border};

	font-size: 1.1em;

	a {
		text-decoration: none;
		color: ${({ theme }) => theme.colors.secondary};
	}
`;
