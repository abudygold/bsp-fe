import { Injectable } from '@angular/core';
import { AbstractControl, FormArray, FormGroup } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class FormStore {
	getControl(control: AbstractControl): AbstractControl {
		return control;
	}

	getFormArray(formArray: FormArray): FormGroup[] {
		return formArray.controls as FormGroup[];
	}

	addControl(formArray: FormArray, initFunction: any): void {
		formArray.push(initFunction());
	}

	removeControl(formArray: FormArray, index: number): void {
		formArray.removeAt(index);
	}

	isValid(control: AbstractControl): boolean {
		if (!control) return false;

		return control.invalid && (control.dirty || control.touched);
	}

	getErrorMessage(
		control: AbstractControl,
		messageValidation: Record<string, string> | undefined,
	): string | null {
		if (!control || !control.errors) return null;

		const errors = control.errors;

		if (errors['required'])
			return messageValidation && messageValidation['required']
				? messageValidation['required']
				: 'This field is required.';

		if (errors['email'])
			return messageValidation && messageValidation['email']
				? messageValidation['email']
				: 'Please enter a valid email address.';

		if (errors['minlength'])
			return messageValidation && messageValidation['minlength']
				? messageValidation['minlength']
				: `Minimum length is ${errors['minlength'].requiredLength}.`;

		if (errors['maxlength'])
			return messageValidation && messageValidation['maxlength']
				? messageValidation['maxlength']
				: `Maximum length is ${errors['maxlength'].requiredLength}.`;

		if (errors['min'])
			return messageValidation && messageValidation['min']
				? messageValidation['min']
				: `Minimum value is ${errors['min'].min}.`;

		if (errors['max'])
			return messageValidation && messageValidation['max']
				? messageValidation['max']
				: `Maximum value is ${errors['max'].max}.`;

		if (errors['pattern'])
			return messageValidation && messageValidation['pattern']
				? messageValidation['pattern']
				: 'Invalid format.';

		if (errors['matStartDateInvalid'])
			return messageValidation && messageValidation['matStartDateInvalid']
				? messageValidation['matStartDateInvalid']
				: 'Invalid start date.';

		if (errors['matEndDateInvalid'])
			return messageValidation && messageValidation['matEndDateInvalid']
				? messageValidation['matEndDateInvalid']
				: 'Invalid end date.';

		return 'Invalid field.';
	}
}
