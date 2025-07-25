import {
	AutocompleteModel,
	ButtonToggleModel,
	CheckboxModel,
	ChipModel,
	DatepickerModel,
	DropdownModel,
	FormlyModel,
	RadioModel,
	TextboxModel,
} from '@abudygold/angular-ui-lib';
import { signal } from '@angular/core';

export const EXAMPLE_ADD_FORM: FormlyModel = {
	formClass: 'tw-grid tw-grid-cols-2 tw-gap-4',
	fields: [
		{
			type: 'textbox',
			control: 'name',
			config: new TextboxModel('outline', 'auto', 'Name', 'text', 'Enter your name'),
			inputClass: 'tw-col-span-1',
		},
		{
			type: 'dropdown',
			control: 'gender',
			config: new DropdownModel('outline', 'Gender', 'Select gender', 'label', '', 'value'),
			inputClass: 'tw-col-span-1',
			keyOption: 'arrayOfObject',
		},
		{
			type: 'datepicker',
			control: 'bod',
			config: new DatepickerModel('outline', 'Birth of Date', 'Enter your Birth of Date', false),
			inputClass: 'tw-col-span-2',
		},
		{
			type: 'textarea',
			control: 'description',
			config: new TextboxModel(
				'outline',
				'auto',
				'Description',
				'textarea',
				'Enter description',
				'',
				5,
			),
			inputClass: 'tw-col-span-2',
		},
		{
			type: 'autocomplete',
			control: 'autocomplete',
			config: new AutocompleteModel('outline', 'Gender', 'Select gender'),
			inputClass: 'tw-col-span-2',
			keyOption: 'arrayOfString',
		},
		{
			type: 'radio',
			control: 'radio',
			config: new RadioModel('Select gender', 'label', 'value', '', true),
			inputClass: 'tw-col-span-1',
			keyOption: 'arrayOfObject',
		},
		{
			type: 'checkbox',
			control: 'checkbox',
			config: new CheckboxModel('Select gender', 'label', '', '', '', true),
			inputClass: 'tw-col-span-1',
			keyOption: 'arrayOfObject',
		},
		{
			type: 'checkbox',
			control: 'checkbox2',
			config: new CheckboxModel('Select gender', 'label', '', 'children', '', true),
			inputClass: 'tw-col-span-2',
			keyOption: 'parentTaskOption',
		},
		{
			type: 'chip',
			control: '',
			config: new ChipModel('Avatar Chip', 'avatar', 'label', 'avatar'),
			inputClass: 'tw-col-span-2',
			keyOption: 'chipOptions',
		},
		{
			type: 'chip',
			control: '',
			config: new ChipModel('Drag & Drop Chip', 'dragdrop', 'label'),
			inputClass: 'tw-col-span-2',
			keyOption: 'arrayOfObject',
		},
		{
			type: 'chip',
			control: 'chipInput',
			config: new ChipModel('Input Tag', 'input', '', '', 'outline', 'Input a tag'),
			inputClass: 'tw-col-span-2',
		},
		{
			type: 'chip',
			control: 'chipAutocomplete',
			config: new ChipModel(
				'Autocomplete Tag',
				'autocomplete',
				'label',
				'',
				'outline',
				'Input a tag',
			),
			inputClass: 'tw-col-span-2',
			keyOption: 'chip2Options',
		},
		{
			type: 'button-toggle',
			control: 'buttonToggle',
			config: new ButtonToggleModel('I agree to the terms and conditions'),
			inputClass: 'tw-col-span-2',
		},
	],
	options: {
		arrayOfString: signal<any[]>(['Male', 'Female']),
		arrayOfObject: signal<any[]>([
			{
				label: 'Male',
				value: 'male',
			},
			{
				label: 'Female',
				value: 'female',
			},
		]),
		parentTaskOption: signal<any>({
			name: 'Parent task',
			completed: false,
			children: [
				{
					label: 'Male',
					value: 'male',
					completed: false,
				},
				{
					label: 'Female',
					value: 'female',
					completed: false,
				},
			],
		}),
		chipOptions: signal<any[]>([
			{ label: 'Dog one', avatar: 'https://material.angular.dev/assets/img/examples/shiba1.jpg' },
			{ label: 'Dog two', avatar: 'https://material.angular.dev/assets/img/examples/shiba1.jpg' },
			{ label: 'Dog three', avatar: 'https://material.angular.dev/assets/img/examples/shiba1.jpg' },
		]),
		chip2Options: signal<any[]>([
			{ label: 'Dog one' },
			{ label: 'Dog two' },
			{ label: 'Dog three' },
		]),
	},
};
