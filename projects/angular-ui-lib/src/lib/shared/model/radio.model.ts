export class RadioModel {
	constructor(
		public label: string = '',
		public options: any[] = [],
		public keyValue: string = '',
		public keyLabel: string = '',
		public isVertical: boolean = false,
	) {}
}
