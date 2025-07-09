import { Component } from '@angular/core';
import {
	FormControl,
	FormGroup,
	FormsModule,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Sort } from '@angular/material/sort';
import {
	ButtonComponent,
	ButtonModel,
	CheckboxComponent,
	CheckboxModel,
	DropdownComponent,
	DropdownModel,
	RadioButtonComponent,
	RadioModel,
	TableComponent,
	TableConfigModel,
	TextareaComponent,
	TextboxComponent,
	TextboxModel,
} from 'angular-ui-lib';
import {
	DUMMMY_CHECKBOX_CONFIG,
	DUMMMY_DROPDOWN_CONFIG,
	DUMMMY_RADIO_CONFIG,
	DUMMMY_TEXTAREA_CONFIG,
	DUMMMY_TEXTBOX_CONFIG,
	DUMMY_BUTTTON_CONFIG,
	DUMMY_TABLE_CONFIG,
} from './app.const';
import { MatIconModule } from '@angular/material/icon';

@Component({
	selector: 'app-root',
	imports: [
		FormsModule,
		ReactiveFormsModule,
		ButtonComponent,
		MatCheckboxModule,
		MatIconModule,
		TableComponent,
		TextboxComponent,
		TextareaComponent,
		DropdownComponent,
		RadioButtonComponent,
		CheckboxComponent,
	],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	buttonConfig: ButtonModel = DUMMY_BUTTTON_CONFIG;
	tableConfig: TableConfigModel = DUMMY_TABLE_CONFIG;
	textboxConfig: TextboxModel = DUMMMY_TEXTBOX_CONFIG;
	textareaConfig: TextboxModel = DUMMMY_TEXTAREA_CONFIG;
	dropdownConfig: DropdownModel = DUMMMY_DROPDOWN_CONFIG;
	radioConfig: RadioModel = DUMMMY_RADIO_CONFIG;
	checkboxConfig: CheckboxModel = DUMMMY_CHECKBOX_CONFIG;

	form: FormGroup = new FormGroup({
		name: new FormControl('', Validators.required),
		description: new FormControl('', [Validators.required, Validators.maxLength(10)]),
		dropdown: new FormControl('', Validators.required),
		radio: new FormControl('', Validators.required),
		checkbox: new FormControl([], Validators.required),
	});

	onSubmit(): void {
		this.form.markAllAsTouched();

		if (!this.form.valid) return;
	}

	onCheckedHandler(row: any): void {
		this.tableConfig.selectRow(row);
		console.log('selectRowData', this.tableConfig.selection.selected);
	}

	selectAllData(isChecked: boolean): void {
		this.tableConfig.selectAll(isChecked);
		console.log('selectAllData', this.tableConfig.selection.selected);
	}

	sortChange(event: Sort): void {
		this.tableConfig.sortKey = event.active;
		this.tableConfig.sortOrder = event.direction;
	}

	onInputChange(value: any): void {
		console.log('Input Changed:', value);
	}
}
