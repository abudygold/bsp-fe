import { FormlyModel } from '@abudygold/angular-ui-lib';
import { signal } from '@angular/core';

export const EXAMPLE_FORM: FormlyModel = {
	formClass: 'tw-grid tw-grid-cols-2 tw-gap-4',
	fields: [
		{
			type: 'textbox',
			control: 'name',
			fieldClass: 'tw-col-span-1',
			config: {
				label: 'Name',
				placeholder: 'Enter your name',
				required: true,
			},
		},
		{
			type: 'dropdown',
			control: 'gender',
			fieldClass: 'tw-col-span-1',
			optionKey: 'arrayOfObject',
			config: {
				label: 'Select gender',
				placeholder: 'Enter your name',
				required: true,
				dropdown: {
					optionLabel: 'label',
					optionCompareWith: 'value',
				},
			},
		},
		{
			type: 'datepicker',
			control: 'bod',
			fieldClass: 'tw-col-span-1',
			config: {
				label: 'Birth of Date',
				placeholder: 'Select your Birth of Date',
				required: true,
			},
		},
		{
			type: 'textarea',
			control: 'description',
			fieldClass: 'tw-col-span-1',
			config: {
				label: 'Description',
				placeholder: 'Enter description',
				required: true,
				textarea: {
					rows: 5,
				},
			},
		},
		{
			type: 'autocomplete',
			control: 'autocomplete',
			fieldClass: 'tw-col-span-1',
			optionKey: 'arrayOfString',
			config: {
				label: 'Gender',
				placeholder: 'Select gender',
				required: true,
			},
		},
		{
			type: 'radio',
			control: 'radio',
			fieldClass: 'tw-col-span-1',
			optionKey: 'arrayOfObject',
			config: {
				label: 'Gender',
				placeholder: 'Select gender',
				required: true,
				radio: {
					optionLabel: 'label',
					optionKey: 'value',
					isVertical: true,
				},
			},
		},
		{
			type: 'checkbox',
			control: 'checkbox',
			fieldClass: 'tw-col-span-1',
			optionKey: 'arrayOfObject',
			config: {
				label: 'Select gender',
				placeholder: 'Select gender',
				required: true,
				checkbox: {
					optionLabel: 'label',
					isVertical: true,
				},
			},
		},
		{
			type: 'checkbox',
			control: 'checkbox2',
			fieldClass: 'tw-col-span-2',
			optionKey: 'parentTaskOption',
			config: {
				label: 'Select gender',
				placeholder: 'Select gender',
				required: true,
				checkbox: {
					optionLabel: 'label',
					optionChildKey: 'children',
					isVertical: true,
				},
			},
		},
		{
			type: 'chip',
			control: '',
			fieldClass: 'tw-col-span-2',
			optionKey: 'chipOptions',
			config: {
				label: 'Avatar Chip',
				required: true,
				chip: {
					chipType: 'avatar',
					optionLabel: 'label',
					optionAvatar: 'avatar',
				},
			},
		},
		{
			type: 'chip',
			control: '',
			fieldClass: 'tw-col-span-2',
			optionKey: 'arrayOfObject',
			config: {
				label: 'Drag & Drop Chip',
				required: true,
				chip: {
					chipType: 'dragdrop',
					optionLabel: 'label',
				},
			},
		},
		{
			type: 'chip',
			control: 'chipInput',
			fieldClass: 'tw-col-span-2',
			config: {
				label: 'Input Tag',
				placeholder: 'Input a tag',
				required: true,
				chip: {
					chipType: 'input',
					optionLabel: 'label',
				},
			},
		},
		{
			type: 'chip',
			control: 'chipAutocomplete',
			fieldClass: 'tw-col-span-2',
			optionKey: 'chip2Options',
			config: {
				label: 'Autocomplete Tag',
				placeholder: 'Input a tag',
				required: true,
				chip: {
					chipType: 'autocomplete',
					optionLabel: 'label',
				},
			},
		},
		{
			type: 'button-toggle',
			control: 'buttonToggle',
			fieldClass: 'tw-col-span-2',
			config: {
				label: 'I agree to the terms and conditions',
				required: true,
			},
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
