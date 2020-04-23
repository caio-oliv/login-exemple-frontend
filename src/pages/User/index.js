import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container } from './styles';

function User() {
	return (
		<Container>
			<Header />
			<div>User page</div>
			<Footer />
		</Container>
	);
}

export default User;
