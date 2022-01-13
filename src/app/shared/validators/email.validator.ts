import { AbstractControl } from '@angular/forms';

export function emailValidator(control: AbstractControl) {
	const emailRegEx = new RegExp(/^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b$/i);
	if (!emailRegEx.test(control.value)) {
		return { emailValidator: true };
	}
	return null;
}
