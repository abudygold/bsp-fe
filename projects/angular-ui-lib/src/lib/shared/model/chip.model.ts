type Appearance = 'fill' | 'outline';
type ChipType = 'avatar' | 'dragdrop' | 'input' | 'autocomplete';

export class ChipModel {
	constructor(
		public label: string,
		public chipType: ChipType = 'avatar',
		public keyLabel: string = '',
		public keyAvatar: string = '',
		public appearance?: Appearance,
		public placeholder?: string,
		public editable: boolean = true,
		public addBlur: boolean = true,
	) {}
}
