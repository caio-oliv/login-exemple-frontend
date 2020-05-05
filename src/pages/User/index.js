import React from 'react';
import { FiTrash2 } from 'react-icons/fi';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';

import { Container, Form, Input, InputGroup } from './styles';

function User() {
	async function handleSubmit(formData) {
		console.log(formData);
	}

	async function handleDeleteUser() {
		console.log('user deleted');
	}

	document.title = 'Usuário: FakeUser';

	return (
		<Container>
			<Header />
			<section>
				<button onClick={handleDeleteUser}>
					<FiTrash2
						size={20}
						stroke="#FFF"
						style={{ verticalAlign: 'middle' }}
					/>
					Apagar
				</button>
				<Form onSubmit={handleSubmit}>
					<Input type="email" name="email" placeholder="E-mail" />
					<Input type="text" name="username" placeholder="Usuário" />
					<InputGroup>
						<Input type="text" name="firstName" placeholder="Primeiro nome" />
						<Input type="text" name="lastName" placeholder="Último nome" />
					</InputGroup>
					<Button type="submit">Atualizar</Button>
				</Form>
			</section>
			<Footer />
		</Container>
	);
}

export default User;
