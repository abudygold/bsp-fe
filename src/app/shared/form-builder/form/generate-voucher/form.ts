import { signal } from '@angular/core';
import { FormlyModel } from '@devkitify/angular-ui-kit';

export const GENERATE_VOUCHER_FORM: FormlyModel = {
	formClass: 'tw-grid tw-grid-cols-2 tw-gap-4',
	fields: [
		{
			type: 'textbox',
			control: 'campaignName',
			fieldClass: 'tw-col-span-1',
			config: {
				label: 'Campaign Name',
				placeholder: 'Enter campaign name',
				required: true,
			},
		},
		{
			type: 'textbox',
			control: 'campaignDuration',
			fieldClass: 'tw-col-span-1',
			config: {
				label: 'Campaign Duration',
				placeholder: 'Enter campaign duration',
				required: true,
			},
		},
		{
			type: 'textbox',
			control: 'voucherName',
			fieldClass: 'tw-col-span-1',
			config: {
				label: 'Voucher Name',
				placeholder: 'Enter voucher name',
				required: true,
			},
		},
		{
			type: 'textbox',
			control: 'voucherValue',
			fieldClass: 'tw-col-span-1',
			config: {
				label: 'Voucher Value',
				placeholder: 'Enter voucher value',
				required: true,
			},
		},
		{
			type: 'radio',
			control: 'voucherType',
			fieldClass: 'tw-col-span-1',
			optionKey: 'voucherTypeOptions',
			config: {
				label: 'Voucher Type',
				placeholder: 'Enter voucher value',
				required: true,
				radio: {
					optionLabel: 'label',
				},
			},
		},
		{
			type: 'textbox',
			control: 'voucherQuantity',
			fieldClass: 'tw-col-span-1',
			config: {
				label: 'Voucher Quantity',
				placeholder: 'Enter voucher quantity',
				required: true,
			},
		},
	],
	options: {
		voucherTypeOptions: signal<any[]>([
			{
				label: 'Percentage',
				value: 'percentage',
			},
			{
				label: 'Fix Price',
				value: 'fix_price',
			},
		]),
	},
};
