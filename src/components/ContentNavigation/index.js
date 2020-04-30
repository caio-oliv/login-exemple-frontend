import React from 'react';

import { Container } from './styles';

export default function ContentNavigation({ pages, currentPage, onPageChange }) {
	return (
		<Container>
			<button onClick={() => onPageChange(currentPage - 1)}>{'<'}</button>
			<button>1</button>

			<span>...</span>

			<button>26</button>
			<button current="true">27</button>
			<button>28</button>

			<span>...</span>

			<button>50</button>
			<button onClick={() => onPageChange(currentPage + 1)}>{'>'}</button>
		</Container>
	);
}
