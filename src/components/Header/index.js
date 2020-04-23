import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { useHistory } from 'react-router';
import { FiUser, FiUsers, FiLogOut } from 'react-icons/fi';

import auth from '../../services/auth';

import { Container, Link, Logout } from './styles';

export default function Header() {
	const theme = useContext(ThemeContext);
	const history = useHistory();

	const id = 'ab290a4e-c403-476e-a0ba-2dd3e3338a49';

	const links = {
		userPage: `/user/${id}`,
		userList: '/users'
	}

	function handleLogout() {
		auth.logout();
		history.push('/');
	}

	return (
		<Container>
			<nav>
				<ul>
					<li>
						<Link
							to={links.userPage}
							current={`${history.location.pathname === links.userPage}`}
						>
							<FiUser
								size={35}
								stroke={theme.colors.secondary}
								style={{ verticalAlign: 'middle' }}
							/>
							Caio
						</Link>
					</li>
					<li>
						<Link
							to="/users"
							current={`${history.location.pathname === links.userList}`}
						>
							<FiUsers
								size={35}
								stroke={theme.colors.secondary}
								style={{ verticalAlign: 'middle' }}
							/>
							Usuários
						</Link>
					</li>
				</ul>
			</nav>
			<Logout onClick={handleLogout}>
				<FiLogOut
					size={35}
					stroke={theme.colors.secondary}
					style={{ verticalAlign: 'middle' }}
				/>
				Sair
			</Logout>
		</Container>
	);
}
