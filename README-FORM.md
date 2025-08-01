## Usage: FormlyComponent

The `FormlyComponent` is a powerful Angular component that allows you to create dynamic forms with various input types, including textboxes, dropdowns, datepickers, and chips. It supports reactive programming with Angular's `WritableSignal` for options management.

### 1. Define Form Constants

Create a constants file to define your form configuration and buttons. This helps in maintaining a clean structure and reusability across your application.:

```typescript
import { FormlyModel } from '@abudygold/angular-ui-lib';
import { signal } from '@angular/core';

export const EXAMPLE_FORM: FormlyModel = {
	formClass: 'tw-grid tw-grid-cols-2 tw-gap-4',
	fields: [
		{
			type: 'textbox',
			control: 'name',
			fieldClass: 'tw-col-span-1',
			config: {
				label: 'Name',
				placeholder: 'Enter your name',
				required: true,
			},
		},
		{
			type: 'dropdown',
			control: 'gender',
			fieldClass: 'tw-col-span-1',
			optionKey: 'arrayOfObject',
			config: {
				label: 'Select gender',
				placeholder: 'Enter your name',
				required: true,
				dropdown: {
					optionLabel: 'label',
					optionCompareWith: 'value',
				},
			},
		},
		{
			type: 'datepicker',
			control: 'bod',
			fieldClass: 'tw-col-span-1',
			config: {
				label: 'Birth of Date',
				placeholder: 'Select your Birth of Date',
				required: true,
			},
		},
		{
			type: 'textarea',
			control: 'description',
			fieldClass: 'tw-col-span-1',
			config: {
				label: 'Description',
				placeholder: 'Enter description',
				required: true,
				textarea: {
					rows: 5,
				},
			},
		},
		{
			type: 'autocomplete',
			control: 'autocomplete',
			fieldClass: 'tw-col-span-1',
			optionKey: 'arrayOfString',
			config: {
				label: 'Gender',
				placeholder: 'Select gender',
				required: true,
			},
		},
		{
			type: 'radio',
			control: 'radio',
			fieldClass: 'tw-col-span-1',
			optionKey: 'arrayOfObject',
			config: {
				label: 'Gender',
				placeholder: 'Select gender',
				required: true,
				radio: {
					optionLabel: 'label',
					optionKey: 'value',
					isVertical: true,
				},
			},
		},
		{
			type: 'checkbox',
			control: 'checkbox',
			fieldClass: 'tw-col-span-1',
			optionKey: 'arrayOfObject',
			config: {
				label: 'Select gender',
				placeholder: 'Select gender',
				required: true,
				checkbox: {
					optionLabel: 'label',
					isVertical: true,
				},
			},
		},
		{
			type: 'checkbox',
			control: 'checkbox2',
			fieldClass: 'tw-col-span-2',
			optionKey: 'parentTaskOption',
			config: {
				label: 'Select gender',
				placeholder: 'Select gender',
				required: true,
				checkbox: {
					optionLabel: 'label',
					optionChildKey: 'children',
					isVertical: true,
				},
			},
		},
		{
			type: 'chip',
			control: '',
			fieldClass: 'tw-col-span-2',
			optionKey: 'chipOptions',
			config: {
				label: 'Avatar Chip',
				required: true,
				chip: {
					chipType: 'avatar',
					optionLabel: 'label',
					optionAvatar: 'avatar',
				},
			},
		},
		{
			type: 'chip',
			control: '',
			fieldClass: 'tw-col-span-2',
			optionKey: 'arrayOfObject',
			config: {
				label: 'Drag & Drop Chip',
				required: true,
				chip: {
					chipType: 'dragdrop',
					optionLabel: 'label',
				},
			},
		},
		{
			type: 'chip',
			control: 'chipInput',
			fieldClass: 'tw-col-span-2',
			config: {
				label: 'Input Tag',
				placeholder: 'Input a tag',
				required: true,
				chip: {
					chipType: 'input',
					optionLabel: 'label',
				},
			},
		},
		{
			type: 'chip',
			control: 'chipAutocomplete',
			fieldClass: 'tw-col-span-2',
			optionKey: 'chip2Options',
			config: {
				label: 'Autocomplete Tag',
				placeholder: 'Input a tag',
				required: true,
				chip: {
					chipType: 'autocomplete',
					optionLabel: 'label',
				},
			},
		},
		{
			type: 'button-toggle',
			control: 'buttonToggle',
			fieldClass: 'tw-col-span-2',
			config: {
				label: 'I agree to the terms and conditions',
				required: true,
			},
		},
	],
	options: {
		arrayOfString: signal<any[]>(['Male', 'Female']),
		arrayOfObject: signal<any[]>([
			{
				label: 'Male',
				value: 'male',
			},
			{
				label: 'Female',
				value: 'female',
			},
		]),
		parentTaskOption: signal<any>({
			name: 'Parent task',
			completed: false,
			children: [
				{
					label: 'Male',
					value: 'male',
					completed: false,
				},
				{
					label: 'Female',
					value: 'female',
					completed: false,
				},
			],
		}),
		chipOptions: signal<any[]>([
			{ label: 'Dog one', avatar: 'https://material.angular.dev/assets/img/examples/shiba1.jpg' },
			{ label: 'Dog two', avatar: 'https://material.angular.dev/assets/img/examples/shiba1.jpg' },
			{ label: 'Dog three', avatar: 'https://material.angular.dev/assets/img/examples/shiba1.jpg' },
		]),
		chip2Options: signal<any[]>([
			{ label: 'Dog one' },
			{ label: 'Dog two' },
			{ label: 'Dog three' },
		]),
	},
};
```

```typescript
import { ButtonModel } from '@abudygold/angular-ui-lib';

export interface ISubmitButton {
	submitButton: ButtonModel;
	cancelButton: ButtonModel;
}

const SUBMIT_BUTTON = (label: string): ButtonModel => new ButtonModel('flat', label, 'primary');
const CANCEL_BUTTON = (label: string): ButtonModel => new ButtonModel('stroked', label, 'primary');

export const SUBMIT_BUTTON_CONST = (
	submitLabel: string = 'Submit',
	cancelLabel: string = 'Cancel',
): ISubmitButton => ({
	submitButton: SUBMIT_BUTTON(submitLabel),
	cancelButton: CANCEL_BUTTON(cancelLabel),
});
```

This file centralizes your form's configuration and constants for easy reuse.

### 2. Prepare Your Data

Define your form data and configuration in your component:

```typescript
import { Component } from '@angular/core';
import {
	FormControl,
	FormGroup,
	FormsModule,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
import { ButtonComponent, FormlyComponent, FormlyModel } from '@abudygold/angular-ui-lib';
import { ISubmitButton, SUBMIT_BUTTON_CONST } from '../const/button';
import { EXAMPLE_FORM } from '../const/form/example';

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
```

### 3. Use in Template

Add the component to your template and bind your data:

```html
<form [formGroup]="form" (ngSubmit)="onSubmit()">
	@defer {
	<lib-formly [form]="form" [formConfig]="formConfig" (onChange)="onInputChange()" />

	<div class="tw-flex tw-justify-end tw-gap-4 tw-my-4">
		<lib-button [config]="submitButton.cancelButton" />
		<lib-button [config]="submitButton.submitButton" />
	</div>
	} @loading (minimum 500ms) { Please wait... }
</form>
```

### 4. API

| Input       | Type                                                                                                                                                       | Description                                                                         |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `formClass` | string                                                                                                                                                     | Custom CSS class for the form container.                                            |
| `fields`    | Array<{ type: FormType; control: string; fieldClass?: string; optionKey?: string; messageValidation?: Record<string, string>; config: ConfigFieldModel; }> | An array of objects that define the form fields.                                    |
| `options`   | Record<string, WritableSignal<any[]>>                                                                                                                      | An object to store and manage options for fields like dropdowns, radios, and chips. |

---

## For more advanced usage:

- **Dynamic Form Fields:** Use the <code>fields</code> property to dynamically generate various input types such as textboxes, dropdowns, datepickers, and chips within the form.
- **Reactive Options:** The <code>options</code> property uses <code>WritableSignal<any[]></code> to provide reactive data for form fields like dropdowns, checkboxes, and chips.
- **Custom Validation Messages:** The <code>messageValidation</code> property can be used to provide custom error messages for form validation.
- **Layout and Styling:** Use <code>formClass</code> to apply custom CSS to the form layout and <code>fieldClass</code> to style individual form fields.
- **Complex Checkboxes:** The <code>checkbox</code> field type supports nested options, defined by the <code>optionChildKey</code>, which allows for a parent-child relationship in the checkboxes.
