import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { useHistory } from 'react-router';
import { FiUser, FiUsers, FiLogOut } from 'react-icons/fi';

import auth from '../../services/auth';

import UserContext from '../../contexts/userContext';

import { Container, Link, Logout } from './styles';

export default function Header() {
	const theme = useContext(ThemeContext);
	const { user, setUser } = useContext(UserContext);
	const history = useHistory();

	const links = {
		userPage: `/user/${user.id}`,
		userList: '/users'
	}

	function handleLogout() {
		auth.logout();
		setUser({});
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
							{user.firstName}
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
