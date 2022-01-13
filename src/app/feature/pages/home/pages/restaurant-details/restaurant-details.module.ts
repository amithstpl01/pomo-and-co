import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Components
import { RestaurantDetailsComponent } from './restaurant-details.component';

const routes: Routes = [
	{
		path: '',
		component: RestaurantDetailsComponent,
	},
];

@NgModule({
	declarations: [RestaurantDetailsComponent],
	imports: [CommonModule, RouterModule.forChild(routes)],
})
export class RestaurantDetailsModule {}
