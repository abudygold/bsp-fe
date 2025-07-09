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

	getErrorMessage(control: AbstractControl): string | null {
		if (!control || !control.errors) return null;

		const errors = control.errors;

		if (errors['required']) {
			return 'This field is required.';
		}
		if (errors['email']) {
			return 'Please enter a valid email address.';
		}
		if (errors['minlength']) {
			return `Minimum length is ${errors['minlength'].requiredLength}.`;
		}
		if (errors['maxlength']) {
			return `Maximum length is ${errors['maxlength'].requiredLength}.`;
		}
		if (errors['min']) {
			return `Minimum value is ${errors['min'].min}.`;
		}
		if (errors['max']) {
			return `Maximum value is ${errors['max'].max}.`;
		}
		if (errors['pattern']) {
			return 'Invalid format.';
		}
		// Add more error mappings as needed

		return 'Invalid field.';
	}
}
