import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'restaurant-list',
		loadChildren: () =>
			import('./pages/restaurant-list').then((m) => m.RestaurantListModule),
	},
	{
		path: 'restaurant-details',
		loadChildren: () =>
			import('./pages/restaurant-details').then(
				(m) => m.RestaurantDetailsModule
			),
	},
	{
		path: '',
		redirectTo: 'restaurant-list',
		pathMatch: 'full',
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class HomeRoutingModule {}
