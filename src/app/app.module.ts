import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { ToastModule } from 'primeng/toast';

import { InterceptorProvider } from '@shared/services/interceptor.service';
import { ErrorInterceptor } from '@shared/services/error-interceptor.service';
import { CancelHttpCallsService } from '@shared/services/cancel-http-calls.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from '@shared/shared.module';

import * as guard from '@shared/guards';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		HttpClientModule,
		ToastModule,
		LoadingBarRouterModule,
		SharedModule,
	],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: InterceptorProvider, multi: true },
		{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
		CancelHttpCallsService,

		guard.AuthorizedGuard,
		guard.GuestGuard,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
