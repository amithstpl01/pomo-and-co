import { Injectable } from '@angular/core';
import {
	HttpInterceptor,
	HttpRequest,
	HttpHandler,
	HttpEvent,
} from '@angular/common/http';

import { Observable, from } from 'rxjs';
import { map, switchMap, takeUntil } from 'rxjs/operators';

import { StorageService } from '@shared/services';
import { CancelHttpCallsService } from './cancel-http-calls.service';

import { environment } from '@environments/environment';
const { apiUrl } = environment;
@Injectable()
export class InterceptorProvider implements HttpInterceptor {
	constructor(
		private storageService: StorageService,
		private cancelHttpCallsService: CancelHttpCallsService
	) {}

	intercept(
		request: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		return from(this.storageService.getAuthToken()).pipe(
			switchMap((token) => {
				const isUrlStartsWith = (s: string, p?: number) =>
					request.url.startsWith(s, p);

				if (isUrlStartsWith(apiUrl)) {
					if (!request.headers.has('Authorization') && token) {
						request = request.clone({
							headers: request.headers.set('Authorization', 'Bearer ' + token),
						});
					}
				}

				return next.handle(request).pipe(
					takeUntil(this.cancelHttpCallsService.onCancelPendingRequests()),
					map((event: HttpEvent<any>) => {
						return event;
					})
				);
			})
		);
	}
}
