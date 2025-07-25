type Appearance = 'fill' | 'outline';
type FloatLabel = 'always' | 'auto';
type TextBoxType = 'text' | 'password' | 'email' | 'number' | 'textarea';

export class TextboxModel {
	constructor(
		public appearance: Appearance = 'outline',
		public floatLabel: FloatLabel = 'auto',
		public label: string = '',
		public type: TextBoxType = 'text',
		public placeholder: string = '',
		public hint: string = '',
		public rows: number = 5,
		public limit: number = 0,
	) {}
}
