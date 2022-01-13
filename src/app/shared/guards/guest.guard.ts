import { Injectable } from '@angular/core';
import {
	CanActivate,
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
export class GuestGuard implements CanActivate {
	constructor(private router: Router, private storageService: StorageService) {}

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	):
		| Observable<boolean | UrlTree>
		| Promise<boolean | UrlTree>
		| boolean
		| UrlTree {
		return new Promise((resolve) => {
			this.storageService.getAuthToken().then((isHasToken: string) => {
				if (!isHasToken) {
					resolve(true);
				} else {
					resolve(false);
					this.router.navigate(['/']);
				}
			});
		});
	}
}
