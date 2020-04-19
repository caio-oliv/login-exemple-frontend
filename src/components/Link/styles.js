import styled from 'styled-components';
import { Link as UnstyledLink } from 'react-router-dom';

export const Link = styled(UnstyledLink)`
	text-align: center;
	text-decoration: none;

	margin-top: 32px;

	color: ${({ theme }) => theme.colors.secondary};
`;
