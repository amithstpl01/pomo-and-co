import { Injectable } from '@angular/core';
import {
	CanActivate,
	CanActivateChild,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	UrlTree,
	Router,
} from '@angular/router';
import { Observable } from 'rxjs';

import { StorageService } from '../services';
@Injectable({
	providedIn: 'root',
})
export class AuthorizedGuard implements CanActivate, CanActivateChild {
	constructor(private router: Router, private storageService: StorageService) {}

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	):
		| Observable<boolean | UrlTree>
		| Promise<boolean | UrlTree>
		| boolean
		| UrlTree {
		return this.isAuthorized(state);
	}

	canActivateChild(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	):
		| Observable<boolean | UrlTree>
		| Promise<boolean | UrlTree>
		| boolean
		| UrlTree {
		return this.isAuthorized(state);
	}

	isAuthorized(state: RouterStateSnapshot): Promise<boolean> {
		return new Promise((resolve) => {
			this.storageService.getAuthToken().then((isHasToken: string) => {
				if (isHasToken) {
					resolve(true);
				} else {
					resolve(false);
					this.router.navigate(['/auth/login'], {
						queryParams: { redirectUrl: state.url },
					});
				}
			});
		});
	}
}
