import { Component, OnInit } from '@angular/core';

import { HomeService } from '../../services';

@Component({
	selector: 'app-restaurant-list',
	templateUrl: './restaurant-list.component.html',
	styleUrls: ['./restaurant-list.component.scss'],
})
export class RestaurantListComponent implements OnInit {
	restaurants: any = [];
	categories: any = [];

	constructor(private homeService: HomeService) {
		this.getRestaurants();
	}

	ngOnInit(): void {}

	getRestaurants() {
		this.homeService.getRestaurants().subscribe(
			(restaurants: any) => {
				if (restaurants?.allRestaurants?.length) {
					this.restaurants = restaurants.allRestaurants;
					if (this.restaurants.length) {
						let categories: any = [];
						for (const item of restaurants.allRestaurants) {
							categories = [
								...categories,
								...JSON.parse(item.restaurantCategory),
							];
						}
						// removing duplicates
						this.categories = categories
							.filter(
								(v: any, i: number, a: any) =>
									a.findIndex((t: any) => t === v) === i
							)
							.map(
								(item: any) =>
									item && {
										name: item,
										image: `assets/images/dummy/logo-${
											Math.floor(Math.random() * 4) + 1
										}.png`,
									}
							);
					}
				} else {
					this.restaurants = [];
					this.categories = [];
				}
			},
			(err) => {}
		);
	}
}
