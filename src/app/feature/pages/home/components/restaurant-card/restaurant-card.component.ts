import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-restaurant-card',
	templateUrl: './restaurant-card.component.html',
	styleUrls: ['./restaurant-card.component.scss'],
})
export class RestaurantCardComponent implements OnInit {
	@Input() image!: string;
	@Input() name!: string;
	@Input() isOpen!: string;
	@Input() description!: string;

	constructor() {}

	ngOnInit(): void {}
}
