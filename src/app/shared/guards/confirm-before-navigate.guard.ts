import { Injectable } from '@angular/core';
import {
	CanDeactivate,
	UrlTree,
	//  ActivatedRouteSnapshot, RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

export interface CanComponentDeactivate {
	canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
	providedIn: 'root',
})
export class ConfirmBeforeNavigateGuard
	implements CanDeactivate<CanComponentDeactivate>
{
	canDeactivate(
		component: CanComponentDeactivate
		// currentRoute: ActivatedRouteSnapshot,
		// currentState: RouterStateSnapshot,
		// nextState: RouterStateSnapshot
	):
		| Observable<boolean | UrlTree>
		| Promise<boolean | UrlTree>
		| boolean
		| UrlTree {
		return component.canDeactivate ? component.canDeactivate() : true;
	}
}
