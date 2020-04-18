import styled from 'styled-components';

export const Component = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-around;

	label {
		align-self: flex-start;

		margin-bottom: 5px;

		font-size: 1.1em;
	}

	input {
		width: 100%;
		margin-bottom: 15px;
		padding: 8px 10px;
		border-radius: 2px;
		border: 1px solid ${({ theme }) => theme.colors.border};
		font-size: 1.2em;
		transition: border-color 0.2s;
	}

	input:focus {
		border-color: #222;
	}
`;
