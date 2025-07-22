import {
	AutocompleteModel,
	BreadcrumbModel,
	ButtonModel,
	ButtonToggleModel,
	CheckboxModel,
	ChipModel,
	DatepickerModel,
	DropdownModel,
	RadioModel,
	TextboxModel,
} from '@abudygold/angular-ui-lib';
import { signal } from '@angular/core';

export const DUMMY_BUTTTON_BASIC_CONFIG: ButtonModel = new ButtonModel(
	'basic',
	'Basic',
	'primary',
	false,
	'',
	'home',
	'start',
);

export const DUMMY_BUTTTON_RAISED_CONFIG: ButtonModel = new ButtonModel(
	'raised',
	'Raised',
	'secondary-gray',
	false,
	'',
	'home',
	'start',
);

export const DUMMY_BUTTTON_STROKED_CONFIG: ButtonModel = new ButtonModel(
	'stroked',
	'Stroked',
	'primary',
	false,
	'',
	'home',
	'end',
);

export const DUMMY_BUTTTON_FLAT_CONFIG: ButtonModel = new ButtonModel(
	'flat',
	'Flat',
	'primary',
	false,
	'',
	'home',
	'start',
);

export const DUMMY_BUTTTON_ICON_CONFIG: ButtonModel = new ButtonModel(
	'icon',
	'',
	'tertiary',
	false,
	'',
	'home',
	'start',
);

export const DUMMY_BUTTTON_FAB_CONFIG: ButtonModel = new ButtonModel(
	'fab',
	'',
	'secondary',
	false,
	'',
	'home',
	'start',
);

export const DUMMMY_TEXTBOX_CONFIG: TextboxModel = new TextboxModel(
	'outline',
	'Name',
	'text',
	'Enter your name',
	'Enter your name',
);

export const DUMMMY_TEXTAREA_CONFIG: TextboxModel = new TextboxModel(
	'outline',
	'Description',
	'textarea',
	'Enter your description',
	'',
	2,
	100,
);

export const DUMMMY_DATEPICKER_CONFIG: DatepickerModel = new DatepickerModel(
	'outline',
	'BOD',
	'Enter your BOD',
	false,
);

export const DUMMMY_DATEPICKER_RANGE_CONFIG: DatepickerModel = new DatepickerModel(
	'outline',
	'Booking Date',
	'Select your booking date',
	true,
);

export const DUMMMY_AUTOCOMPLETE_CONFIG: AutocompleteModel = new AutocompleteModel(
	'outline',
	'Number',
	'Select a Number',
	[
		{
			label: 'React',
			value: 'react',
		},
		{
			label: 'Angular',
			value: 'angular',
		},
		{
			label: 'Vue',
			value: 'vue',
		},
		{
			label: 'Svelte',
			value: 'svelte',
		},
	],
	'label',
);

export const DUMMMY_BUTTON_TOGGLE_CONFIG: ButtonToggleModel = new ButtonToggleModel(
	'I agree to the terms and conditions',
);

export const DUMMMY_DROPDOWN_CONFIG: DropdownModel = new DropdownModel(
	'outline',
	'Javascript Framework',
	['React', 'Angular', 'Vue', 'Svelte'],
	'Select javascript framework',
);

export const DUMMMY_RADIO_CONFIG: RadioModel = new RadioModel(
	'Select javascript framework',
	[
		{
			label: 'React',
			value: 'react',
		},
		{
			label: 'Angular',
			value: 'angular',
		},
		{
			label: 'Vue',
			value: 'vue',
		},
		{
			label: 'Svelte',
			value: 'svelte',
		},
	],
	'label',
);

export const DUMMMY_CHECKBOX_CONFIG: CheckboxModel = new CheckboxModel(
	'Select javascript framework',
	[
		{
			label: 'React',
			value: 'react',
		},
		{
			label: 'Angular',
			value: 'angular',
		},
		{
			label: 'Vue',
			value: 'vue',
		},
		{
			label: 'Svelte',
			value: 'svelte',
		},
	],
	'label',
);

export const DUMMMY_CHECKBOX_CHILD_CONFIG: CheckboxModel = new CheckboxModel(
	'Select javascript framework',
	{
		name: 'Parent task',
		completed: false,
		children: [
			{ name: 'Child task 1', completed: false },
			{ name: 'Child task 2', completed: false },
			{ name: 'Child task 3', completed: false },
		],
	},
	'',
	'',
	'children',
);

export const DUMMMY_AVATAR_CHIP_CONFIG: ChipModel = new ChipModel(
	'Avatar Chip',
	'avatar',
	signal([
		{ label: 'Dog one', avatar: 'https://material.angular.dev/assets/img/examples/shiba1.jpg' },
		{ label: 'Dog two', avatar: 'https://material.angular.dev/assets/img/examples/shiba1.jpg' },
		{ label: 'Dog three', avatar: 'https://material.angular.dev/assets/img/examples/shiba1.jpg' },
	]),
	'label',
	'avatar',
);

export const DUMMMY_DRAG_DROP_CHIP_CONFIG: ChipModel = new ChipModel(
	'Drag & Drop Chip',
	'dragdrop',
	signal([
		{ label: 'Dog one', avatar: 'https://material.angular.dev/assets/img/examples/shiba1.jpg' },
		{ label: 'Dog two', avatar: 'https://material.angular.dev/assets/img/examples/shiba1.jpg' },
		{ label: 'Dog three', avatar: 'https://material.angular.dev/assets/img/examples/shiba1.jpg' },
	]),
	'label',
);

export const DUMMMY_INPUT_CHIP_CONFIG: ChipModel = new ChipModel(
	'Please select framework',
	'input',
	signal([
		{
			name: 'React',
		},
		{
			name: 'Angular',
		},
		{
			name: 'Vue',
		},
		{
			name: 'Svelte',
		},
	]),
	'name',
	'',
	'outline',
	'Select Framework',
	true,
);

export const DUMMMY_AUTOCOMPLETE_CHIP_CONFIG: ChipModel = new ChipModel(
	'Please select framework',
	'autocomplete',
	signal([
		{
			name: 'React',
		},
	]),
	'name',
	'',
	'outline',
	'Select Framework',
	true,
	[
		{
			name: 'React',
		},
		{
			name: 'Angular',
		},
		{
			name: 'Vue',
		},
		{
			name: 'Svelte',
		},
	],
);
