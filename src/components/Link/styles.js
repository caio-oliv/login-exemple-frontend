import styled from 'styled-components';
import { Link as UnstyledLink } from 'react-router-dom';

export const Link = styled(UnstyledLink)`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: center;

	text-align: center;
	text-decoration: none;

	color: ${({ theme }) => theme.colors.secondary};
`;
