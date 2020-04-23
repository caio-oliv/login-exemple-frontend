import styled from 'styled-components';
import UnstiledLink from '../Link';

export const Container = styled.header`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: stretch;
	padding: 0px 40px;

	background: ${({ theme }) => theme.colors.primary};

	nav {
		width: 100%;

		ul {
			display: flex;
			flex-direction: row;
			align-items: center;

			list-style: none;
		}
	}
`;

export const Link = styled(UnstiledLink)`
	display: block;

	padding: 16px 10px;
	font-size: 1.3rem;

	color: ${({ theme }) => theme.colors.text};
	background: ${({ current }) => current === 'true' ? '#999' : 'transparent'};

	:hover {
		background: #e4e4e4;
	}
`;

export const Logout = styled.button`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: center;
	text-align: center;

	padding: 16px 10px;
	font-size: 1.3rem;

	color: ${({ theme }) => theme.colors.text};
	background: transparent;

	cursor: pointer;

	:hover {
		background: #e4e4e4;
	}
`;
