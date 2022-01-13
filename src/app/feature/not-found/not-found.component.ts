import { Component, OnInit, OnChanges } from '@angular/core';

import { StorageService } from '@shared/services';

@Component({
	selector: 'app-not-found',
	templateUrl: './not-found.component.html',
	styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit, OnChanges {
	url!: string;

	constructor(private storage: StorageService) {
		this.setUrl();
	}

	ngOnInit(): void {}

	ngOnChanges(): void {
		this.setUrl();
	}

	setUrl(): void {
		this.storage
			.getAuthToken()
			.then((token: string) => (this.url = token ? '/' : '/auth'));
	}
}
