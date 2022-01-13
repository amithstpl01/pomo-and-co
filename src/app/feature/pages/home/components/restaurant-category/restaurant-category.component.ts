import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-restaurant-category',
	templateUrl: './restaurant-category.component.html',
	styleUrls: ['./restaurant-category.component.scss'],
})
export class RestaurantCategoryComponent implements OnInit {
	@Input() image!: string;
	@Input() name!: string;

	constructor() {}

	ngOnInit(): void {}
}
