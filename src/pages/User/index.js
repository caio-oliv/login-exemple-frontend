import React, { useState } from 'react';
import './styles.css';
import Footer from '../../components/Footer';

function User({ match }) {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	// const { params } = match;

	function handleSubmit(event) {
		event.preventDefault();

		console.log('YEAH');
		console.log(match);
	}

	return (
		<div className="user-page">
			<div className="user-page-content">
				<form onSubmit={handleSubmit} className="update-user-form">
					<label htmlFor="account-settings">Configurações da conta</label>
					<div className="input-block">
						<label htmlFor="email">E-mail</label>
						<input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
					</div>
					<div className="input-block">
						<label htmlFor="name">Nome</label>
						<input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
					</div>
					<div className="input-block">
						<label htmlFor="username">Usuário</label>
						<input type="text" name="username" />
					</div>
					<div className="button-list">
						<button type="submit">Salvar</button>
					</div>
				</form>
			</div>
			<Footer />
		</div>
	);
}

export default User;
