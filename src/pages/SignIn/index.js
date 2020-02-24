import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import auth from '../../services/auth';
import './styles.css';

import Footer from '../../components/Footer';

function SignIn() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const history = useHistory();

	async function handleSubmit(event) {
		event.preventDefault();

		try {
			const res = await api.post('/auth/authenticate', {
				email, password
			});
			
			auth.login(res.data.token);

			history.push(`/user/${res.data.user.id}`);

		} catch (err) {
			alert(err.response.data.error);
		}
	}

	return (
		<div className="signin-page">
			<div className="signin-page-content">
				<form onSubmit={handleSubmit} className="signin-form">
					<input
						type="email"
						name="email"
						placeholder="E-mail"
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
					<input
						type="password"
						name="password"
						placeholder="Senha"
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
					<button type="submit">Entrar</button>
				</form>
			</div>
			<Footer/>
		</div>
	);
}

export default SignIn;
