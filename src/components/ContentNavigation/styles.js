import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: center;

	margin-top: 12px;

	button, span {
		margin: 0px 5px;
	}

	> button {
		border: solid 3px ${({ current, theme }) =>
			current === 'true' ? theme.colors.secondary : theme.colors.border};
		padding: 5px;
	}

	> span {
		padding: 0px 10px;
	}
`;
