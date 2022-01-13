import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '@core/components';

import * as components from './components';
import * as pipes from './pipes';
import * as services from './services';
// import * as guards from './guards';
import * as directives from './directives';

import { RestService } from './services/rest.service';

import { MessageService } from 'primeng/api';

const comp = [
	components.LoaderComponent,
	components.NoDataComponent,
	components.BackButtonComponent,
	components.SvgComponent,
	components.OrderCardComponent,

	pipes.Capitalize,
	pipes.SafeHtmlPipe,
	pipes.SafeStylePipe,
	pipes.SafeUrlPipe,

	directives.ScrollToTopDirective,
	directives.BackDirective,
];

@NgModule({
	declarations: [...comp],
	imports: [CommonModule, RouterModule, FormsModule, ButtonModule],
	exports: [...comp],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	providers: [
		services.StorageService,
		services.SpinnerService,
		services.AuthService,
		MessageService,
		RestService,
	],
})
export class SharedModule {}
