import { Component, Input } from '@angular/core';

import { Colors } from '@core/models/types';

@Component({
	selector: 'app-badge',
	templateUrl: './badge.component.html',
	styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent {
	@Input() count!: number;
	@Input() color: Colors = 'primary';
}
