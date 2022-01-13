export const DecodeJWTToken = (token: string) =>
	token ? JSON.parse(atob(token.split('.')[1])) : '';
