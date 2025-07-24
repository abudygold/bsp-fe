import { Component } from '@angular/core';
import { EXAMPLE_ADD_FORM } from '../../shared/const';
import {
	FormControl,
	FormGroup,
	FormsModule,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
import { FormlyComponent, FormlyModel } from '@abudygold/angular-ui-lib';

@Component({
	selector: 'app-example-add',
	imports: [FormsModule, ReactiveFormsModule, FormlyComponent],
	templateUrl: './example-add.component.html',
	styleUrl: './example-add.component.scss',
})
export class ExampleAddComponent {
	formConfig: FormlyModel = EXAMPLE_ADD_FORM;
	form: FormGroup = new FormGroup({
		name: new FormControl('', Validators.required),
		gender: new FormControl('', Validators.required),
		bod: new FormControl('', Validators.required),
		description: new FormControl('', Validators.required),
		radio: new FormControl('', Validators.required),
		checkbox: new FormControl([], Validators.required),
		checkbox2: new FormControl([], Validators.required),
		autocomplete: new FormControl('', Validators.required),
		chipInput: new FormControl([], Validators.required),
		chipAutocomplete: new FormControl([], Validators.required),
		buttonToggle: new FormControl(false, Validators.requiredTrue),
	});

	onInputChange(): void {
		console.log('form raw value:', this.form.getRawValue());
	}

	onSubmit(): void {
		this.form.markAllAsTouched();

		console.log(this.form.getRawValue());
	}
}
