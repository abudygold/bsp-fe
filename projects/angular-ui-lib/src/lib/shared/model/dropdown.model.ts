type Appearance = 'fill' | 'outline';

export class DropdownModel {
	constructor(
		public appearance: Appearance = 'outline',
		public label: string = '',
		public placeholder: string = '',
		public keyLabel: string = '',
		public keyValue: string = '',
		public keyCompare: string = '',
		public labelClass: string = '',
		public hint: string = '',
		public isMultiple: boolean = false,
	) {}
}
