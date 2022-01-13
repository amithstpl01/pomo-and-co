import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Modules
import { PagesRoutingModule } from './pages-routing.module';

import { SharedModule } from '@shared/shared.module';
import { BadgeModule, ButtonModule } from '@core/components';

// Components
import { PagesComponent } from './pages.component';

// Services

@NgModule({
	declarations: [PagesComponent],
	imports: [
		CommonModule,
		FormsModule,
		PagesRoutingModule,

		SharedModule,
		BadgeModule,
		ButtonModule,
	],
})
export class PagesModule {}
