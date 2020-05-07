import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import auth from '../../services/auth';

import UserContext from '../../contexts/userContext';

import Footer from '../../components/Footer';
import Button from '../../components/Button';

import { Container, Form, Input, InputGroup, Link } from './styles';

function SignUp() {
	const history = useHistory();
	const { setUser } = useContext(UserContext);

	async function handleSubmit(formData) {
		try {
			const response = await api.post('users', formData);

			const { user, token } = response.data;

			setUser(user);
			auth.login(token);
			history.push(`/user/${user.id}`);

		} catch (err) {
			const status = err.response?.status;

			if (status === 400)
				alert('Um usuário com essas credenciais já existe');
			else
				alert('Ocorreu um erro durante o cadastro, tente novamente');
		}
	}

	return (
		<Container>
			<div>
				<Form onSubmit={handleSubmit}>
					<h1>Cadastrar</h1>

					<Input type="email" name="email" placeholder="E-mail" />
					<Input type="text" name="username" placeholder="Usuário" />
					<InputGroup>
						<Input type="text" name="firstName" placeholder="Primeiro nome" />
						<Input type="text" name="lastName" placeholder="Último nome" />
					</InputGroup>
					<Input type="password" name="password" placeholder="Senha" />

					<Button type="submit">Criar conta</Button>
					<Link to="/">Tenho uma conta</Link>
				</Form>
			</div>
			<Footer />
		</Container>
	);
}

export default SignUp;
