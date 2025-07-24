type Appearance = 'fill' | 'outline';

export class AutocompleteModel {
	constructor(
		public appearance: Appearance = 'outline',
		public label: string = '',
		public placeholder: string = '',
		public keyLabel: string = '',
		public keyValue: string = '',
		public labelClass: string = '',
		public hint: string = '',
	) {}
}
