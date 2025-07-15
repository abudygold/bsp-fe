type LabelPosition = 'before' | 'after';

export class ButtonToggleModel {
	constructor(
		public label: string = '',
		public labelPosition: LabelPosition = 'after',
	) {}
}
