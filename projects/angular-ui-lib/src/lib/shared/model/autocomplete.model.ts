type Appearance = 'fill' | 'outline';

export class AutocompleteModel {
	constructor(
		public appearance: Appearance = 'outline',
		public label: string = '',
		public placeholder: string = '',
		public options: any[] = [],
		public keyValue: string = '',
		public keyLabel: string = '',
		public displayKey: string = '',
		public hint: string = '',
	) {}
}
