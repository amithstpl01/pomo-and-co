import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { RestaurantCardModule } from '../../components/restaurant-card';
import { RestaurantCategoryModule } from '../../components/restaurant-category';

// Components
import { RestaurantListComponent } from './restaurant-list.component';

const routes: Routes = [
	{
		path: '',
		component: RestaurantListComponent,
	},
];

@NgModule({
	declarations: [RestaurantListComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),

		// Components
		RestaurantCardModule,
		RestaurantCategoryModule,
	],
})
export class RestaurantListModule {}
