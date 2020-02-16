import React, { useState } from 'react';
import api from '../../services/api';
import './styles.css';

import Footer from '../../components/Footer';

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	async function handleSubmit(event) {
		event.preventDefault();

		try {
			const res = await api.post('/login', {
				email,
				password
			});

			console.log(res.data);

		} catch (err) {
			console.log(err);
		}
	}

	return (
		<div className="login-page">
			<div className="login-page-content">
				<form onSubmit={handleSubmit} className="login-form">
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

export default Login;
