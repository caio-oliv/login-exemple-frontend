const TOKEN_KEY = process.env.REACT_APP_AUTH_TOKEN_KEY || '@login-exemple-frontend';

const auth = {
	isAuthenticated() {
		return localStorage.getItem(TOKEN_KEY) !== null;
	},

	getToken() {
		return localStorage.getItem(TOKEN_KEY);
	},

	login(token) {
		localStorage.setItem(TOKEN_KEY, token);
	},

	logout() {
		localStorage.removeItem(TOKEN_KEY);
	},
}

export default auth;
