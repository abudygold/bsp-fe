import { WritableSignal } from '@angular/core';

type Appearance = 'fill' | 'outline';
type ChipType = 'avatar' | 'dragdrop' | 'input' | 'autocomplete';

export class ChipModel {
	constructor(
		public chipType: ChipType = 'avatar',
		public tags: WritableSignal<any[]>,
		public avatar: string = '',
		public key: string = '',
		public appearance?: Appearance,
		public label?: string,
		public placeholder?: string,
		public addBlur?: boolean,
		public autocompleteOptions?: any[],
	) {}
}
