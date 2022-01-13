import { Injectable } from '@angular/core';

export enum StorageItemKeys {
	AUTH_TOKEN = 'authToken',
	REFRESH_TOKEN = 'refreshToken',
}

@Injectable({
	providedIn: 'root',
})
export class StorageService {
	constructor() {}

	public setAuthToken(authToken: string): Promise<string> {
		return new Promise((resolve) => {
			if (authToken) {
				localStorage.setItem(StorageItemKeys.AUTH_TOKEN, authToken);
				resolve(authToken);
			} else {
				resolve('');
			}
		});
	}
	public getAuthToken(): Promise<string> {
		return new Promise((resolve) => {
			const authToken = localStorage.getItem(StorageItemKeys.AUTH_TOKEN);
			if (authToken) {
				resolve(authToken);
			} else {
				resolve('');
			}
		});
	}
	public setRefreshToken(refreshToken: string): Promise<string> {
		return new Promise((resolve) => {
			if (refreshToken) {
				localStorage.setItem(StorageItemKeys.REFRESH_TOKEN, refreshToken);
				resolve(refreshToken);
			} else {
				resolve('');
			}
		});
	}
	public getRefreshToken(): Promise<string> {
		return new Promise((resolve) => {
			const refreshToken = localStorage.getItem(StorageItemKeys.REFRESH_TOKEN);
			if (refreshToken) {
				resolve(refreshToken);
			} else {
				resolve('');
			}
		});
	}
}
