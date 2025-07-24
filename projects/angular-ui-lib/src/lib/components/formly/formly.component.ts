import { Component, input, output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TextboxComponent } from '../textbox';
import { TextareaComponent } from '../textarea';
import { DropdownComponent } from '../dropdown';
import { DatepickerComponent } from '../datepicker';
import { FormlyModel } from '../../shared/model';
import { RadioButtonComponent } from '../radio-button';
import { ChipComponent } from '../chip';
import { CheckboxComponent } from '../checkbox';
import { AutocompleteComponent } from '../autocomplete';
import { ButtonToggleComponent } from '../button-toggle';

@Component({
	selector: 'lib-formly',
	imports: [
		TextboxComponent,
		TextareaComponent,
		DropdownComponent,
		DatepickerComponent,
		RadioButtonComponent,
		CheckboxComponent,
		AutocompleteComponent,
		ButtonToggleComponent,
		ChipComponent,
	],
	templateUrl: './formly.component.html',
	styleUrl: './formly.component.scss',
})
export class FormlyComponent {
	onChange = output<void>();

	form = input.required<FormGroup>();
	formConfig = input.required<FormlyModel>();

	optionList(key: string): any[] {
		const options = this.formConfig().options;

		if (!key || options[key] === undefined) return [];

		return options[key]();
	}
}
