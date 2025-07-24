export class CheckboxModel {
	constructor(
		public label: string = '',
		public keyLabel: string = '',
		public keyValue: string = '',
		public childKey: string = '',
		public labelClass: string = '',
		public isVertical: boolean = false,
		public disabled: boolean = false,
		public labelPosition: 'after' | 'before' = 'after',
	) {}
}
