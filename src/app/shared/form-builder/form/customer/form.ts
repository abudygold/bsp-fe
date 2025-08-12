import { FormlyModel } from '@devkitify/angular-ui-kit';

export const CUSTOMER_FORM: FormlyModel = {
	formClass: 'tw-grid tw-grid-cols-1 tw-gap-4',
	fields: [
		{
			type: 'textbox',
			control: 'name',
			fieldClass: 'tw-col-span-1',
			config: {
				label: 'Name',
				placeholder: 'Enter name',
				required: true,
			},
		},
		{
			type: 'textbox',
			control: 'phone',
			fieldClass: 'tw-col-span-1',
			config: {
				label: 'Phone',
				placeholder: 'Enter phone',
				required: true,
				textbox: {
					textboxType: 'number',
				},
			},
		},
		{
			type: 'textbox',
			control: 'group',
			fieldClass: 'tw-col-span-1',
			config: {
				label: 'Group',
				placeholder: 'Enter group',
				required: true,
			},
		},
	],
	options: {},
};
