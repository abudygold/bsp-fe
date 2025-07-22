import { Component, inject } from '@angular/core';
import {
	FormControl,
	FormGroup,
	FormsModule,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {
	AutocompleteComponent,
	AutocompleteModel,
	ButtonComponent,
	ButtonModel,
	ButtonToggleComponent,
	ButtonToggleModel,
	CheckboxComponent,
	CheckboxModel,
	ChipComponent,
	ChipModel,
	DatepickerComponent,
	DatepickerModel,
	DropdownComponent,
	DropdownModel,
	FormStore,
	RadioButtonComponent,
	RadioModel,
	TextareaComponent,
	TextboxComponent,
	TextboxModel,
} from '@abudygold/angular-ui-lib';
import {
	DUMMMY_AUTOCOMPLETE_CONFIG,
	DUMMMY_AVATAR_CHIP_CONFIG,
	DUMMMY_DRAG_DROP_CHIP_CONFIG,
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
	DUMMMY_INPUT_CHIP_CONFIG,
	DUMMMY_AUTOCOMPLETE_CHIP_CONFIG,
	DUMMMY_CHECKBOX_CHILD_CONFIG,
} from './app.const';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ExampleDialogComponent } from './pages/example/dialog/example-dialog/example-dialog.component';
import { RouterOutlet } from '@angular/router';

@Component({
	selector: 'app-root',
	imports: [
		FormsModule,
		ReactiveFormsModule,
		ButtonComponent,
		MatCheckboxModule,
		MatIconModule,
		MatDialogModule,
		TextboxComponent,
		TextareaComponent,
		DropdownComponent,
		RadioButtonComponent,
		CheckboxComponent,
		DatepickerComponent,
		AutocompleteComponent,
		ButtonToggleComponent,
		ChipComponent,
		RouterOutlet,
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
	textboxConfig: TextboxModel = DUMMMY_TEXTBOX_CONFIG;
	textareaConfig: TextboxModel = DUMMMY_TEXTAREA_CONFIG;
	dropdownConfig: DropdownModel = DUMMMY_DROPDOWN_CONFIG;
	radioConfig: RadioModel = DUMMMY_RADIO_CONFIG;
	checkboxConfig: CheckboxModel = DUMMMY_CHECKBOX_CONFIG;
	checkboxAllConfig: CheckboxModel = DUMMMY_CHECKBOX_CHILD_CONFIG;
	datepickerConfig: DatepickerModel = DUMMMY_DATEPICKER_CONFIG;
	datepickerRangeConfig: DatepickerModel = DUMMMY_DATEPICKER_RANGE_CONFIG;
	buttonToggleConfig: ButtonToggleModel = DUMMMY_BUTTON_TOGGLE_CONFIG;
	autocompleteConfig: AutocompleteModel = DUMMMY_AUTOCOMPLETE_CONFIG;
	avatarChipConfig: ChipModel = DUMMMY_AVATAR_CHIP_CONFIG;
	dragdropChipConfig: ChipModel = DUMMMY_DRAG_DROP_CHIP_CONFIG;
	inputChipConfig: ChipModel = DUMMMY_INPUT_CHIP_CONFIG;
	autocompleteChipConfig: ChipModel = DUMMMY_AUTOCOMPLETE_CHIP_CONFIG;

	form: FormGroup = new FormGroup({
		name: new FormControl('', Validators.required),
		description: new FormControl('', [Validators.required]),
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

	pageChange(event: any): void {
		console.log(event);
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
