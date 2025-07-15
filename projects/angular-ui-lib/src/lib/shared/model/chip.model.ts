type ChipType = 'avatar' | 'dragdrop' | 'input' | 'autocomplete';

export class ChipModel {
	constructor(
		public chipType: ChipType = 'avatar',
		public options: any[] = [],
		public keyValue: string = '',
		public keyLabel: string = '',
		public addBlur: boolean = true,
	) {}
}
