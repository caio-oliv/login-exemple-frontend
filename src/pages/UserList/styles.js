import styled from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled.div`
	height: 100%;

	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;

	section {
		width: 100%;
		padding: 20px 40px;

		> div {
			display: flex;
			flex-flow: column nowrap;
			align-items: center;
			justify-content: center;

			padding: 15px;
			margin: 20px 0px;
			border-radius: 10px;
			overflow: auto;

			background: #F2F2F2;
		}

		> span {
			display: block;
			margin-top: 24px;

			font-size: 18px;
		}
	}
`;

export const Search = styled(Form)`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: flex-start;

	> button {
		margin-left: 5px;
		background: transparent;
		cursor: pointer;
	}
`;

export const Table = styled.table`
	width: 100%;

	td, th {
		border: 1px solid #000;
		padding: 10px;
	}

	thead {
		background: ${({ theme }) => theme.colors.secondary};

		tr th {
			font-weight: normal;
			color: #FFF;
		}
	}
`;
