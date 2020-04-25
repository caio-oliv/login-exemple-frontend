import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { FiSearch } from 'react-icons/fi';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Input from '../../components/Input';

import { Container, Search, Table } from './styles';

function UserList() {
	const theme = useContext(ThemeContext);

	async function handleSubmit(formData) {
		console.log(formData);
	}

	return (
		<Container>
			<Header />
			<section>
				<Search onSubmit={handleSubmit}>
					<Input type="text" name="search" placeholder="Pesquisar nome" />
					<button type="submit">
						<FiSearch
							size={32}
							stroke={theme.colors.secondary}
							style={{ verticalAlign: 'middle' }}
						/>
					</button>
				</Search>
				<div>
					<Table>
						<thead>
							<tr>
								<th>Nome</th>
								<th>Usuário</th>
								<th>Data de criação</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Caio</td>
								<td>test-1</td>
								<td>{Date(2020, 4, 23)}</td>
							</tr>
						</tbody>
					</Table>
				</div>
			</section>
			<Footer />
		</Container>
	);
}

export default UserList;
