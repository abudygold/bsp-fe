import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ButtonComponent, FormlyComponent, FormlyModel } from '@devkitify/angular-ui-kit';
import { GENERATE_VOUCHER_FORM } from '../../../../shared/form-builder/form/generate-voucher';
import { ISubmitButton, SUBMIT_BUTTON_CONST } from '../../../../shared/form-builder/button';

@Component({
	selector: 'app-generate-voucher',
	imports: [FormlyComponent, ButtonComponent],
	templateUrl: './generate-voucher.component.html',
	styleUrl: './generate-voucher.component.scss',
})
export class GenerateVoucherComponent {
	form: FormGroup = new FormGroup({
		campaignName: new FormControl('', Validators.required),
		campaignDuration: new FormControl('', Validators.required),
		voucherName: new FormControl('', Validators.required),
		voucherValue: new FormControl('', Validators.required),
		voucherType: new FormControl('', Validators.required),
		voucherQuantity: new FormControl('', Validators.required),
	});

	formConfig = {
		form: signal<FormlyModel>(GENERATE_VOUCHER_FORM),
		submitButton: signal<ISubmitButton>(SUBMIT_BUTTON_CONST()),
	};

	onSubmit(): void {
		this.form.markAllAsTouched();

		if (!this.form.valid) return;

		// Integrate with API here
	}
}
