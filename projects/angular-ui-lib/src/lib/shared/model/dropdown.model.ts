type Appearance = 'fill' | 'outline';

export class DropdownModel {
	constructor(
		public appearance: Appearance = 'outline',
		public label: string = '',
		public options: any[] = [],
		public isMultiple: boolean = false,
		public keyValue: string = '',
		public keyLabel: string = '',
		public placeholder: string = '',
		public hint: string = '',
	) {}
}
