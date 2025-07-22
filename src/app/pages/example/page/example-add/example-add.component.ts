import { Component } from '@angular/core';
import { EXAMPLE_ADD_FORM, IExampleAddForm } from '../../shared/const';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
	DatepickerComponent,
	DropdownComponent,
	TextareaComponent,
	TextboxComponent,
} from '@abudygold/angular-ui-lib';

@Component({
	selector: 'app-example-add',
	imports: [
		FormsModule,
		ReactiveFormsModule,
		TextboxComponent,
		TextareaComponent,
		DropdownComponent,
		DatepickerComponent,
	],
	templateUrl: './example-add.component.html',
	styleUrl: './example-add.component.scss',
})
export class ExampleAddComponent {
	formConfig: IExampleAddForm[] = EXAMPLE_ADD_FORM;
	form: FormGroup = new FormGroup({
		name: new FormControl(''),
		framework: new FormControl(''),
		bod: new FormControl(''),
		description: new FormControl(''),
	});

	onInputChange(value: any): void {
		console.log('Input Changed:', value);
	}

	onSubmit(): void {
		this.form.markAllAsTouched();

		console.log(this.form.getRawValue());
	}
}
