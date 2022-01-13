import { environment } from 'src/environments/environment';
const BASE_URL = environment.apiUrl;

export const Endpoints = {
	restaurants: {
		getAll: `${BASE_URL}/allRestaurants`,
	},
};
