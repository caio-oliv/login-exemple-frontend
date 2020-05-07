import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import UserContext from '../../contexts/userContext';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';

import { Container, Form, Input, InputGroup } from './styles';

function User() {
	const history = useHistory();
	const { user, setUser } = useContext(UserContext);

	async function handleUpdateUser(formData) {
		try {
			const response = await api.put(`users/${user.id}`, {
				...formData,
				username: undefined
			});

			setUser((oldUser) => ({
				...oldUser,
				...response.data
			}));
		} catch (err) {
			const status = err.response?.status;

			if (status === 401)
				history.push('/');
			else if (status === 400)
				alert('Campos mal formatados');
			else
				alert('Ocorreu um erro durante a atualização, tente novamente');
		}
	}

	async function handleDeleteUser() {
		console.log('user deleted');
	}

	document.title = `${user.firstName} ${user.lastName}`;

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
				<Form onSubmit={handleUpdateUser} initialData={user}>
					<Input type="email" name="email" label="E-mail" />
					<Input type="text" name="username" label="Usuário" readOnly />
					<InputGroup>
						<Input type="text" name="firstName" label="Primeiro nome" />
						<Input type="text" name="lastName" label="Último nome" />
					</InputGroup>
					<Button type="submit">Atualizar</Button>
				</Form>
			</section>
			<Footer />
		</Container>
	);
}

export default User;
