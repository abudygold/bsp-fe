import { WritableSignal } from '@angular/core';

type Appearance = 'fill' | 'outline';
type ChipType = 'avatar' | 'dragdrop' | 'input' | 'autocomplete';

export class ChipModel {
	constructor(
		public label: string,
		public chipType: ChipType = 'avatar',
		public tags: WritableSignal<any[]>,
		public key: string = '',
		public avatar: string = '',
		public appearance?: Appearance,
		public placeholder?: string,
		public addBlur?: boolean,
		public autocompleteOptions?: any[],
	) {}
}
