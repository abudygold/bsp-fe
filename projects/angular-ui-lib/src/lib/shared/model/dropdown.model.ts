type Appearance = 'fill' | 'outline';

export class DropdownModel {
	constructor(
		public appearance: Appearance = 'outline',
		public label: string = '',
		public options: any[] = [],
		public placeholder: string = '',
		public keyLabel: string = '',
		public keyValue: string = '',
		public hint: string = '',
		public isMultiple: boolean = false,
	) {}
}
