import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantCategoryComponent } from './restaurant-category.component';

@NgModule({
	declarations: [RestaurantCategoryComponent],
	imports: [CommonModule],
	exports: [RestaurantCategoryComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RestaurantCategoryModule {}
