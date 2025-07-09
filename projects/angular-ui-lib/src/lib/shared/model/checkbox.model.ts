import { Signal } from '@angular/core';

export class CheckboxModel {
	constructor(
		public key: string,
		public label: string = '',
		public options: any = null,
		public keyValue: string = '',
		public keyLabel: string = '',
		public labelPosition: 'after' | 'before' = 'after',
		public disabled: boolean = false,
		public isVertical: boolean = false,
		public childKey: string = '',
	) {}
}
