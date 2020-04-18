import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Container = styled.div`
	height: 100vh;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	> div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		height: 100%;
	}
`;

export const Form = styled(Unform)`
  display: flex;
	flex-direction: column;
	justify-items: center;

	padding: 20px 16px;
	border: solid 2px ${({ theme }) => theme.colors.border};
	border-radius: 12px;

	h1 {
		text-align: center;

		margin-bottom: 18px;

		font-weight: normal;
		font-size: 2.3em;
	}

	a {
		text-align: center;
		text-decoration: none;

		margin-top: 32px;

		color: ${({ theme }) => theme.colors.secondary};
	}
`;
