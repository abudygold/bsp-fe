import { WritableSignal } from '@angular/core';

type FormType =
	| 'textbox'
	| 'textarea'
	| 'datepicker'
	| 'dropdown'
	| 'radio'
	| 'checkbox'
	| 'autocomplete'
	| 'chip'
	| 'button-toggle';

export class FormlyModel {
	constructor(
		public formClass: string = '', // tw-grid tw-grid-cols-1 tw-gap-4
		public fields: {
			type: FormType;
			control: string;
			config: any;
			keyOption?: string;
			inputClass?: string; // tw-col-span-1
		}[] = [],
		public options: {
			[key: string]: WritableSignal<any[]>;
		} = {},
	) {}
}
