import { Injectable } from '@angular/core';

import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor,
	HttpErrorResponse,
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retryWhen, tap, delay } from 'rxjs/operators';

import { ToastrService } from './toastr.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
	isSessionExpired = 0;
	retryAttemps = 0;

	constructor(private toastService: ToastrService) {}

	intercept(
		request: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		return next.handle(request).pipe(
			// Retry Logic
			retryWhen((errors) =>
				errors.pipe(
					delay(500),
					tap((error) => {
						// making request 2 more times if getting 500
						if (error.status >= 500 && this.retryAttemps <= 1) {
							this.retryAttemps++;
						} else {
							this.retryAttemps = 0;
							throw error;
						}
					})
				)
			),
			catchError((error: HttpErrorResponse) => {
				const status = error.status;

				if (status >= 500) {
					this.toastService.error('Internal server error. Please try again');
				}

				if (status >= 400 && status < 500) {
					if (error.error && error.error.message) {
						this.toastService.error(error.error.message);
					}
				}
				return throwError(error);
			})
		);
	}
}
