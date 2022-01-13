import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantCardComponent } from './restaurant-card.component';

@NgModule({
	declarations: [RestaurantCardComponent],
	imports: [CommonModule],
	exports: [RestaurantCardComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RestaurantCardModule {}
