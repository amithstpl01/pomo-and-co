import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { RestService } from '@app/shared/services/rest.service';

import { Endpoints } from '@app/shared/config';

@Injectable({
	providedIn: 'root',
})
export class HomeService {
	private endPoints = Endpoints.restaurants;

	constructor(private restService: RestService) {}

	getRestaurants(): Observable<any> {
		return this.restService.get(this.endPoints.getAll);
	}
}
