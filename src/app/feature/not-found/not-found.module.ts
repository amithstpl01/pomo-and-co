import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from '@core/components';

import { NotFoundRoutingModule } from './not-found-routing.module';

import { NotFoundComponent } from './not-found.component';

@NgModule({
	declarations: [NotFoundComponent],
	imports: [CommonModule, NotFoundRoutingModule, ButtonModule],
})
export class NotFoundModule {}
