import { WritableSignal } from '@angular/core';
import { DateFilterFn } from '@angular/material/datepicker';

type FormType =
	| 'textbox'
	| 'textarea'
	| 'datepicker'
	| 'dropdown'
	| 'radio'
	| 'checkbox'
	| 'autocomplete'
	| 'chip'
	| 'button-toggle';
type TextBoxType = 'text' | 'password' | 'email' | 'number' | 'textarea';
type ChipType = 'avatar' | 'dragdrop' | 'input' | 'autocomplete';
type LabelPosition = 'before' | 'after';

export class FormlyModel {
	constructor(
		public formClass: string = '',
		public fields: {
			type: FormType;
			control: string;
			fieldClass?: string;
			optionKey?: string;
			messageValidation?: Record<string, string>;
			config: ConfigFieldModel;
		}[] = [],
		public options: {
			[key: string]: WritableSignal<any[]>;
		} = {},
	) {}
}

export class ConfigFieldModel {
	public label: string;
	public labelClass?: string;
	public placeholder?: string;
	public hint?: string;
	public required?: boolean;
	public disabled?: boolean;
	public textbox?: TextboxModel;
	public textarea?: TextareaModel;
	public radio?: RadioModel;
	public dropdown?: DropdownModel;
	public datepicker?: DatepickerModel;
	public chip?: ChipModel;
	public checkbox?: CheckboxModel;
	public autocomplete?: AutocompleteModel;
	public toggle?: ButtonToggleModel;

	constructor() {
		this.label = '';
	}
}

class TextboxModel {
	public textboxType: TextBoxType;
	public isOnlyNumber?: boolean;
	public limit?: number;

	constructor() {
		this.textboxType = 'text';
		this.isOnlyNumber = false;
		this.limit = 0;
	}
}

class TextareaModel {
	public rows?: number;
	public limit?: number;

	constructor() {
		this.rows = 5;
		this.limit = 0;
	}
}

class RadioModel {
	public optionLabel?: string;
	public optionKey?: string;
	public isVertical?: boolean;

	constructor() {
		this.optionLabel = '';
		this.optionKey = '';
		this.isVertical = false;
	}
}

class DropdownModel {
	public optionLabel?: string;
	public optionKey?: string;
	public optionCompareWith?: string;
	public isMultiple?: boolean;

	constructor() {
		this.optionLabel = '';
		this.optionKey = '';
		this.optionCompareWith = '';
		this.isMultiple = false;
	}
}

class DatepickerModel {
	public isInline?: boolean;
	public isRangeDate?: boolean;
	public placeholderStart?: string;
	public placeholderEnd?: string;
	public datepickerFilter?: DateFilterFn<any>;
	public minDate?: Date;
	public maxDate?: Date;

	constructor() {
		this.isInline = false;
		this.isRangeDate = false;
		this.placeholderStart = 'Start date';
		this.placeholderEnd = 'End date';
		this.datepickerFilter = (date: any) => true;
	}
}

class ChipModel {
	public chipType: ChipType;
	public optionLabel?: string;
	public optionAvatar?: string;
	public editable?: boolean;
	public addBlur?: boolean;

	constructor() {
		this.chipType = 'avatar';
		this.optionLabel = '';
		this.optionAvatar = '';
		this.editable = true;
		this.addBlur = true;
	}
}

class CheckboxModel {
	public optionLabel?: string;
	public optionKey?: string;
	public optionChildKey?: string;
	public isVertical?: boolean;
	public labelPosition?: 'after' | 'before';

	constructor() {
		this.optionLabel = '';
		this.optionKey = '';
		this.optionChildKey = '';
		this.isVertical = false;
		this.labelPosition = 'after';
	}
}

class AutocompleteModel {
	public optionLabel?: string;
	public optionKey?: string;

	constructor() {
		this.optionLabel = '';
		this.optionKey = '';
	}
}

class ButtonToggleModel {
	public labelPosition: LabelPosition;

	constructor() {
		this.labelPosition = 'after';
	}
}
