import axios from 'axios';
import auth from './auth';

const api = axios.create({
	baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:3333'
});

api.interceptors.request.use(async (config) => {
	const token = auth.getToken();

	if (token) config.headers.Authorization = `Bearer ${token}`;

	return config;
});

export default api;
