import { Component } from '@angular/core';
import { FormControl, FormsModule, Validators } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Sort } from '@angular/material/sort';
import {
	ButtonComponent,
	ButtonModel,
	DropdownComponent,
	DropdownModel,
	TableComponent,
	TableConfigModel,
	TextareaComponent,
	TextboxComponent,
	TextboxModel,
} from 'angular-ui-lib';
import {
	DUMMMY_DROPDOWN_CONFIG,
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
		ButtonComponent,
		MatCheckboxModule,
		MatIconModule,
		TableComponent,
		TextboxComponent,
		TextareaComponent,
		DropdownComponent,
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

	nameValue: FormControl = new FormControl('', [Validators.required]);
	descriptionValue: FormControl = new FormControl('', [
		Validators.required,
		Validators.maxLength(10),
	]);

	onClicked(type: string): void {
		console.log('Button Clicked!!!', type, this.nameValue.value, this.descriptionValue.value);
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
