import styled from 'styled-components';
import { Form as UnstyledForm } from '@unform/web';
import UnstyledInput from '../../components/Input';

export const Container = styled.div`
	height: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	> section {
		width: 100%;
		max-width: 600px;
		padding: 0px 30px;
		margin: 30px;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;

		> button {
			align-self: flex-end;

			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;

			padding: 8px 10px;
			margin-bottom: 10px;
			border-radius: 3px;
			border: solid 1px ${({ theme }) => theme.colors.border};
			font-size: 1.2em;

			cursor: pointer;

			color: #FFF;
			background: ${({ theme }) => theme.colors.warning};
		}
	}
`;

export const Form = styled(UnstyledForm)`
	display: flex;
	flex-direction: column;
	justify-items: center;

	width: 100%;
`;

export const Input = styled(UnstyledInput)`
	margin-bottom: 10px;
`;

export const InputGroup = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	> div {
		width: 49%;
	}
`;
