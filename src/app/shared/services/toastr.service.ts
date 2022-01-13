import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

export type Severity = 'success' | 'info' | 'warn' | 'error';

@Injectable({
	providedIn: 'root',
})
export class ToastrService {
	constructor(private messageService: MessageService) {}

	addCustom(
		severity: 'custom',
		summary: string,
		detail: string,
		styleClass?: string,
		contentStyleClass?: string
	): void {
		this.messageService.add({
			severity,
			summary,
			detail,
			styleClass,
			contentStyleClass,
		});
	}

	addSingle(severity: Severity, summary: string, detail: string) {
		this.messageService.add({ severity, summary, detail });
	}

	success(detail: string, summary: string = 'Success') {
		this.addSingle('success', summary, detail);
	}
	info(detail: string, summary: string = 'Info') {
		this.addSingle('info', summary, detail);
	}
	warn(detail: string, summary: string = 'Warn') {
		this.addSingle('warn', summary, detail);
	}
	error(detail: string, summary: string = 'Error') {
		this.addSingle('error', summary, detail);
	}

	addMultiple() {
		this.messageService.addAll([
			{
				severity: 'success',
				summary: 'Service Message',
				detail: 'Via MessageService',
			},
			{
				severity: 'info',
				summary: 'Info Message',
				detail: 'Via MessageService',
			},
		]);
	}

	clear() {
		this.messageService.clear();
	}
}
