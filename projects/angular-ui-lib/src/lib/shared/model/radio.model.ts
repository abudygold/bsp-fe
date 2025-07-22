export class RadioModel {
	constructor(
		public label: string = '',
		public options: any[] = [],
		public keyLabel: string = '',
		public keyValue: string = '',
		public isVertical: boolean = false,
	) {}
}
