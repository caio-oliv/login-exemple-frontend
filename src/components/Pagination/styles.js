import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: center;

	margin-top: 12px;

	button, span {
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		justify-content: center;

		margin: 0px 5px;
		font-size: 18px;

		height: 40px;
		width: 40px;
	}

	span {
		margin: 0px;
	}
`;

export const Button = styled.button`
	border: solid 3px ${({ current, theme }) =>
		current === 'true' ? theme.colors.secondary : theme.colors.border
	};
`;
