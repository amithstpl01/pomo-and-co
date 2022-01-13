import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './home/home.component';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },

	{
		path: 'home',
		component: HomeComponent,
		children: [
			{
				path: '',
				loadChildren: () =>
					import('./home/home.module').then((m) => m.HomeModule),
			},
		],
	},

	// otherwise redirect to 404
	{ path: '**', redirectTo: '/404' },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PagesRoutingModule {}
