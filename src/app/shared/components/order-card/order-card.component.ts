import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-order-card',
	templateUrl: './order-card.component.html',
	styleUrls: ['./order-card.component.scss'],
})
export class OrderCardComponent implements OnInit {
	@Input() closable!: boolean;
	@Input() icon!: string;
	@Input() title!: string;
	@Input() text!: string;
	@Input() orderId!: string;
	@Input() buttonLabel!: string;
	@Input() buttonUrl!: string;

	constructor() {}

	ngOnInit(): void {}
}
