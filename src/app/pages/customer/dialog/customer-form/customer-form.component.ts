import { Component, computed, inject, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import {
	FormControl,
	FormGroup,
	FormsModule,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {
	ButtonComponent,
	FormlyComponent,
	FormlyModel,
	ModalComponent,
} from '@devkitify/angular-ui-kit';
import { ISubmitButton, SUBMIT_BUTTON_CONST } from '../../../../shared/form-builder/button';
import { CUSTOMER_FORM } from '../../../../shared/form-builder/form/customer';

enum FormType {
	ManualInput = 0,
	Upload = 1,
}

@Component({
	selector: 'app-customer-form',
	imports: [
		FormsModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatTabsModule,
		MatDialogModule,
		MatIconModule,
		ModalComponent,
		FormlyComponent,
		ButtonComponent,
	],
	templateUrl: './customer-form.component.html',
	styleUrl: './customer-form.component.scss',
})
export class CustomerFormComponent {
	#matDialogRef = inject(MatDialogRef);
	#matData = inject<{
		rowData?: any;
	}>(MAT_DIALOG_DATA);

	file: File | null = null;
	form: FormGroup = new FormGroup({
		name: new FormControl(this.#matData.rowData?.name || '', Validators.required),
		phone: new FormControl(this.#matData.rowData?.phone || '', Validators.required),
		group: new FormControl(this.#matData.rowData?.username || '', Validators.required),
	});

	title = computed(() => (this.#matData.rowData ? 'Edit Customer' : 'Add Customer'));
	formConfig = {
		actions: signal<ISubmitButton>(SUBMIT_BUTTON_CONST()),
		manualInput: signal<FormlyModel>(CUSTOMER_FORM),
	};

	onFileSelected(event: Event) {
		const input = event.target as HTMLInputElement;

		if (input.files && input.files.length > 0) this.file = input.files[0];
	}

	onSelectedIndexChange(selectedIndex: number): void {
		if (selectedIndex === FormType.ManualInput) {
			this.file = null;
			return;
		}

		this.form.reset();
	}

	onSubmit(): void {
		this.form.markAllAsTouched();

		if (!this.form.valid && !this.file) return;

		// Integrate with API here

		this.#matDialogRef.close();
	}
}
