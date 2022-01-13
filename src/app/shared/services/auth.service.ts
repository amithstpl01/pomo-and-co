import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { ToastrService } from './toastr.service';
@Injectable({
	providedIn: 'root',
})
export class AuthService {
	constructor(public router: Router, private toastrService: ToastrService) {}

	logout() {
		this.logoutWithoutRedirect();
		this.router.navigate(['/auth/login'], { replaceUrl: true }).then(() => {
			this.toastrService.success('You have been successfully logged out!');
		});
	}

	logoutWithoutRedirect() {
		this.signOut();
		this.clearStorage();
	}

	signOut() {}

	clearStorage() {
		localStorage.clear();
	}
}
