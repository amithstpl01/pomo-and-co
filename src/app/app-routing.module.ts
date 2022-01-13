import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './feature/pages/pages.component';

// Guards
import { AuthorizedGuard } from '@shared/guards';

const routes: Routes = [
	{ path: '', redirectTo: '', pathMatch: 'full' },

	{
		path: '',
		component: PagesComponent,
		// canActivateChild: [AuthorizedGuard],
		children: [
			{
				path: '',
				loadChildren: () =>
					import('./feature/pages/pages.module').then((m) => m.PagesModule),
			},
		],
	},

	{
		path: '404',
		loadChildren: () =>
			import('./feature/not-found/not-found.module').then(
				(m) => m.NotFoundModule
			),
	},

	// otherwise redirect to 404
	{ path: '**', redirectTo: '/404' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
	exports: [RouterModule],
})
export class AppRoutingModule {}
