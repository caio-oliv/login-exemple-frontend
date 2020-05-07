import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Container, Button } from './styles';

function Pagination({ pages, currentPage, onPageChange }) {
	const theme = useContext(ThemeContext);

	function createPageIndexer() {
		const indexers = [];
		let iteratorStart = 2;
		const indexesShown = 4;

		if (currentPage >= 4) {
			iteratorStart = currentPage - 1;
			indexers.push(<span key="span-1" >...</span>);
		}

		for (let i = iteratorStart; i < iteratorStart + indexesShown
		&& i <= pages; i++) {
			indexers.push(
				<Button
					key={i}
					onClick={() => onPageChange(i)}
					current={(currentPage === i) ? 'true' : 'false'}
				>{i}</Button>
			);
		}

		if (iteratorStart <= pages - indexesShown)
			indexers.push(<span key="span-2">...</span>);

		return indexers;
	}

	return (
		<Container>
			{(currentPage !== 1) &&
			<Button onClick={() => onPageChange(currentPage - 1)}>
				<FiChevronLeft
					size={22}
					stroke={theme.colors.border}
					style={{ verticalAlign: 'middle' }}
				/>
			</Button>}
			<Button
				onClick={() => onPageChange(1)}
				current={(currentPage === 1) ? 'true' : 'false'}
			>1</Button>

			{createPageIndexer()}

			{(currentPage !== pages) &&
			<Button onClick={() => onPageChange(currentPage + 1)}>
				<FiChevronRight
					size={22}
					stroke={theme.colors.border}
					style={{ verticalAlign: 'middle' }}
				/>
			</Button>}
		</Container>
	);
}

export default Pagination;
