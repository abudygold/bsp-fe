import { Component, inject } from '@angular/core';
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
	AutocompleteComponent,
	AutocompleteModel,
	BreadcrumbModel,
	BreadcrumbsComponent,
	ButtonComponent,
	ButtonModel,
	ButtonToggleComponent,
	ButtonToggleModel,
	CheckboxComponent,
	CheckboxModel,
	DatepickerComponent,
	DatepickerModel,
	DropdownComponent,
	DropdownModel,
	FormStore,
	RadioButtonComponent,
	RadioModel,
	TableComponent,
	TableConfigModel,
	TextareaComponent,
	TextboxComponent,
	TextboxModel,
} from 'angular-ui-lib';
import {
	BREADCRUMBS,
	DUMMMY_AUTOCOMPLETE_CONFIG,
	DUMMMY_BUTTON_TOGGLE_CONFIG,
	DUMMMY_CHECKBOX_CONFIG,
	DUMMMY_DATEPICKER_CONFIG,
	DUMMMY_DATEPICKER_RANGE_CONFIG,
	DUMMMY_DROPDOWN_CONFIG,
	DUMMMY_RADIO_CONFIG,
	DUMMMY_TEXTAREA_CONFIG,
	DUMMMY_TEXTBOX_CONFIG,
	DUMMY_BUTTTON_BASIC_CONFIG,
	DUMMY_BUTTTON_FAB_CONFIG,
	DUMMY_BUTTTON_FLAT_CONFIG,
	DUMMY_BUTTTON_ICON_CONFIG,
	DUMMY_BUTTTON_RAISED_CONFIG,
	DUMMY_BUTTTON_STROKED_CONFIG,
	DUMMY_TABLE_CONFIG,
} from './app.const';
import { MatIconModule } from '@angular/material/icon';
import { ExampleDialogComponent } from './pages/example-dialog';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
	selector: 'app-root',
	imports: [
		FormsModule,
		ReactiveFormsModule,
		ButtonComponent,
		MatCheckboxModule,
		MatIconModule,
		MatDialogModule,
		TableComponent,
		TextboxComponent,
		TextareaComponent,
		DropdownComponent,
		RadioButtonComponent,
		CheckboxComponent,
		DatepickerComponent,
		AutocompleteComponent,
		ButtonToggleComponent,
		BreadcrumbsComponent,
	],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	protected formStore = inject(FormStore);
	#dialog = inject(MatDialog);

	buttonConfig: ButtonModel = DUMMY_BUTTTON_BASIC_CONFIG;
	buttonRaisedConfig: ButtonModel = DUMMY_BUTTTON_RAISED_CONFIG;
	buttonStrokedConfig: ButtonModel = DUMMY_BUTTTON_STROKED_CONFIG;
	buttonFlatConfig: ButtonModel = DUMMY_BUTTTON_FLAT_CONFIG;
	buttonIconConfig: ButtonModel = DUMMY_BUTTTON_ICON_CONFIG;
	buttonFabConfig: ButtonModel = DUMMY_BUTTTON_FAB_CONFIG;
	tableConfig: TableConfigModel = DUMMY_TABLE_CONFIG;
	textboxConfig: TextboxModel = DUMMMY_TEXTBOX_CONFIG;
	textareaConfig: TextboxModel = DUMMMY_TEXTAREA_CONFIG;
	dropdownConfig: DropdownModel = DUMMMY_DROPDOWN_CONFIG;
	radioConfig: RadioModel = DUMMMY_RADIO_CONFIG;
	checkboxConfig: CheckboxModel = DUMMMY_CHECKBOX_CONFIG;
	datepickerConfig: DatepickerModel = DUMMMY_DATEPICKER_CONFIG;
	datepickerRangeConfig: DatepickerModel = DUMMMY_DATEPICKER_RANGE_CONFIG;
	buttonToggleConfig: ButtonToggleModel = DUMMMY_BUTTON_TOGGLE_CONFIG;
	autocompleteConfig: AutocompleteModel = DUMMMY_AUTOCOMPLETE_CONFIG;
	breadcrumbs: BreadcrumbModel[] = BREADCRUMBS;

	form: FormGroup = new FormGroup({
		name: new FormControl('', Validators.required),
		description: new FormControl('', [Validators.required, Validators.maxLength(10)]),
		dropdown: new FormControl('', Validators.required),
		radio: new FormControl('', Validators.required),
		checkbox: new FormControl([], Validators.required),
		datepicker: new FormControl('', Validators.required),
		buttonToggle: new FormControl('', Validators.requiredTrue),
		autocomplete: new FormControl('', Validators.required),
		start: new FormControl('', Validators.required),
		end: new FormControl('', Validators.required),
	});

	onSubmit(): void {
		this.form.markAllAsTouched();

		console.log('form', this.form.getRawValue());

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

	openDialog(): void {
		this.#dialog.open(ExampleDialogComponent, {
			width: '700px',
			autoFocus: false,
		});
	}
}
