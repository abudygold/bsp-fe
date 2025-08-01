import { Component } from '@angular/core';
import {
	FormControl,
	FormGroup,
	FormsModule,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
import { ButtonComponent, FormlyComponent, FormlyModel } from '@abudygold/angular-ui-lib';
import { ISubmitButton, SUBMIT_BUTTON_CONST } from '../../../../shared/const/button';
import { EXAMPLE_FORM } from '../../../../shared/const/form/example';

@Component({
	selector: 'app-example-add',
	imports: [FormsModule, ReactiveFormsModule, FormlyComponent, ButtonComponent],
	templateUrl: './example-add.component.html',
	styleUrl: './example-add.component.scss',
})
export class ExampleAddComponent {
	formConfig: FormlyModel = EXAMPLE_FORM;
	submitButton: ISubmitButton = SUBMIT_BUTTON_CONST();
	form: FormGroup = new FormGroup({
		name: new FormControl('', Validators.required),
		description: new FormControl('', Validators.required),
		gender: new FormControl('', Validators.required),
		birthOfDate: new FormControl('', Validators.required),
		rangeDatepicker: new FormControl('', [Validators.required]),
		radio: new FormControl('', Validators.required),
		checkbox: new FormControl([], Validators.required),
		checkbox1: new FormControl([], Validators.required),
		checkbox2: new FormControl([], Validators.required),
		parentCheckbox: new FormControl([], Validators.required),
		autocomplete: new FormControl('', Validators.required),
		autocomplete1: new FormControl('', Validators.required),
		chipInput: new FormControl([], Validators.required),
		chipAutocomplete: new FormControl([], Validators.required),
		chipAutocomplete1: new FormControl([], Validators.required),
		buttonToggle: new FormControl(false, Validators.requiredTrue),
	});

	onInputChange(): void {
		console.log('form raw value:', this.form.getRawValue());
	}

	onSubmit(): void {
		this.form.markAllAsTouched();

		if (!this.form.valid) return;

		console.log(this.form.getRawValue());
	}
}
