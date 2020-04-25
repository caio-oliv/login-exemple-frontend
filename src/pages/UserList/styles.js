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
		height: 100%;
		padding: 20px 40px;

		> div {
			display: block;

			padding: 15px;
			margin: 20px 0px;
			border-radius: 10px;
			overflow: auto;
			max-height: 500px;

			background: #F2F2F2;
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
