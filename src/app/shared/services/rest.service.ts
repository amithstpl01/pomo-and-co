import { Injectable } from '@angular/core';
import {
	HttpClient,
	HttpHeaders,
	HttpErrorResponse,
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class RestService {
	constructor(private http: HttpClient) {}

	setHeaders(headers: any) {
		const defaultHeaders = {
			'Content-Type': 'application/json',
		};
		const newHeaders = Object.assign(defaultHeaders, headers);
		return {
			headers: new HttpHeaders(newHeaders),
		};
	}

	setOptions(options: any) {
		return {
			...this.setHeaders(options && options.headers),
			...(options && options.params && { params: options.params }),
			...(options && options.reportProgress && { reportProgress: true }),
			...(options && options.observe && { observe: options.observe }),
			...(options &&
				options.responseType && { responseType: options.responseType }),
			...(options &&
				options.withCredentials && {
					withCredentials: options.withCredentials,
				}),
		};
	}

	// GET
	get(apiURL: string, options?: any): Observable<any> {
		return this.http
			.get(apiURL, { ...this.setOptions(options) })
			.pipe(catchError(this.errorHandle));
	}

	// POST
	post(apiURL: string, req: any, options?: any): Observable<any> {
		return this.http
			.post(apiURL, req, { ...this.setOptions(options) })
			.pipe(catchError(this.errorHandle));
	}

	// PUT
	put(apiURL: string, req: any, options?: any): Observable<any> {
		return this.http
			.put(apiURL, req, { ...this.setOptions(options) })
			.pipe(catchError(this.errorHandle));
	}

	// PATCH
	patch(apiURL: string, req: any, options?: any): Observable<any> {
		return this.http
			.patch(apiURL, req, { ...this.setOptions(options) })
			.pipe(catchError(this.errorHandle));
	}

	// DELETE
	delete(apiURL: string, options?: any): Observable<any> {
		return this.http
			.delete(apiURL, { ...this.setOptions(options) })
			.pipe(catchError(this.errorHandle));
	}

	// Error handling
	errorHandle(error: HttpErrorResponse) {
		let errorMessage: any = '';
		if (error.error instanceof ErrorEvent) {
			// Get client-side error
			errorMessage = error.error.message;
		} else {
			// Get server-side error
			errorMessage = error;
		}
		return throwError(errorMessage);
	}
}
