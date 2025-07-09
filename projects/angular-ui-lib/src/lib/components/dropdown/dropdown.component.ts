import { Component, inject, input, output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { FormStore } from '../../store';
import { DropdownModel } from '../../shared/model';

@Component({
	selector: 'lib-dropdown',
	imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatSelectModule],
	templateUrl: './dropdown.component.html',
	styleUrl: './dropdown.component.scss',
})
export class DropdownComponent {
	protected formStore = inject(FormStore);

	onSelection = output<any>();

	inputConfig = input.required<DropdownModel>();
	control = input.required<FormControl>();

	onSelectionChange(event: MatSelectChange): void {
		this.onSelection.emit(event.value);
	}
}
