import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import auth from '../../services/auth';

import UserContext from '../../contexts/userContext';

import Footer from '../../components/Footer';
import Button from '../../components/Button';

import { Container, Form, Input, Link } from './styles';

function SignIn() {
	const history = useHistory();
	const { setUser } = useContext(UserContext);

	async function handleSubmit(formData) {
		try {
			const response = await api.post('session', {
				...formData,
				email: formData.username
			});

			const { user, token } = response.data;

			setUser(user);
			auth.login(token);
			history.push(`/user/${user.id}`);

		} catch (err) {
			const status = err.response?.status;

			if (status === 401)
				alert('Senha incorreta');
			else if (status === 400)
				alert('Usuário não encontrado');
			else
				alert('Ocorreu um erro durante o login, tente novamente');
		}
	}

	return (
		<Container>
			<div>
				<Form onSubmit={handleSubmit}>
					<h1>Login</h1>

					<Input type="text" name="username" placeholder="E-mail ou usuário" />
					<Input type="password" name="password" placeholder="Senha" />

					<Button type="submit">Entrar</Button>
					<Link to="/signup">Não possuo uma conta</Link>
				</Form>
			</div>
			<Footer />
		</Container>
	);
}

export default SignIn;
