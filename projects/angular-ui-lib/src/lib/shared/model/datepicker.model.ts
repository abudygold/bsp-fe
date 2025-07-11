type Appearance = 'fill' | 'outline';

export class DatepickerModel {
	constructor(
		public appearance: Appearance = 'outline',
		public label: string = '',
		public placeholder: string = '',
		public isRangeDate: boolean = false,
		public placeholderStart: string = 'Start date',
		public placeholderEnd: string = 'End date',
		public hint: string = '',
	) {}
}
