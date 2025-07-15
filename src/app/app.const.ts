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
	TableConfigModel,
	TextboxModel,
} from '@abudygold/angular-ui-lib';
import { signal } from '@angular/core';

export const DUMMY_DATA = [
	{
		name: 'John Doe',
		statusName: 'Active',
		createdDate: new Date().toISOString(),
		isSelected: false,
	},
	{
		name: 'Jane Smith',
		statusName: 'Inactive',
		createdDate: new Date().toISOString(),
		isSelected: false,
	},
	{
		name: 'Alice Johnson',
		statusName: 'Pending',
		createdDate: new Date().toISOString(),
		isSelected: false,
	},
	{
		name: 'Bob Brown',
		statusName: 'Active',
		createdDate: new Date().toISOString(),
		isSelected: false,
	},
	{
		name: 'Charlie Davis',
		statusName: 'Inactive',
		createdDate: new Date().toISOString(),
		isSelected: false,
	},
	{
		name: 'Diana Evans',
		statusName: 'Active',
		createdDate: new Date().toISOString(),
		isSelected: false,
	},
	{
		name: 'Frank Green',
		statusName: 'Pending',
		createdDate: new Date().toISOString(),
		isSelected: false,
	},
	{
		name: 'Grace Hall',
		statusName: 'Active',
		createdDate: new Date().toISOString(),
		isSelected: false,
	},
	{
		name: 'Henry Irwin',
		statusName: 'Inactive',
		createdDate: new Date().toISOString(),
		isSelected: false,
	},
	{
		name: 'Ivy Jenkins',
		statusName: 'Pending',
		createdDate: new Date().toISOString(),
		isSelected: false,
	},
	{
		name: 'Henry',
		statusName: 'Inactive',
		createdDate: new Date().toISOString(),
		isSelected: false,
	},
	{
		name: 'Ivy',
		statusName: 'Pending',
		createdDate: new Date().toISOString(),
		isSelected: false,
	},
];

export const DUMMY_TABLE_CONFIG: TableConfigModel = new TableConfigModel();
DUMMY_TABLE_CONFIG.dataLabel = ['', 'Name', 'Status Name', 'Created Date'];
DUMMY_TABLE_CONFIG.dataKey = ['selection', 'name', 'statusName', 'createdDate'];
DUMMY_TABLE_CONFIG.dataTotal = DUMMY_DATA.length;
DUMMY_TABLE_CONFIG.dataSource = DUMMY_DATA;
DUMMY_TABLE_CONFIG.sortKey = 'name';
DUMMY_TABLE_CONFIG.sortOrder = 'asc';
DUMMY_TABLE_CONFIG.isHttpPagination.set(false);
DUMMY_TABLE_CONFIG.generateDataType();
DUMMY_TABLE_CONFIG.dataType = {
	...DUMMY_TABLE_CONFIG.dataType,
	createdDate: {
		type: 'date',
		format: 'M/d/yyyy hh:mma',
	},
	statusName: {
		type: 'custom',
	},
	selection: {
		type: 'custom',
	},
};

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
	'start',
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
);

export const DUMMMY_TEXTAREA_CONFIG: TextboxModel = new TextboxModel(
	'outline',
	'Description',
	'textarea',
	'Enter your description',
	'',
	2,
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
	// ['One', 'Two', 'Three'],
	[
		{
			label: 'React',
			value: 'react',
			id: 'One',
		},
		{
			label: 'Angular',
			value: 'angular',
			id: 'Two',
		},
		{
			label: 'Vue',
			value: 'vue',
			id: 'Three',
		},
		{
			label: 'Svelte',
			value: 'svelte',
			id: 'Four',
		},
	],
	'',
	'label',
	'id',
);

export const DUMMMY_BUTTON_TOGGLE_CONFIG: ButtonToggleModel = new ButtonToggleModel(
	'I agree to the terms and conditions',
);

export const DUMMMY_DROPDOWN_CONFIG: DropdownModel = new DropdownModel(
	'outline',
	'Javascript Framework',
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
	// ['React', 'Angular', 'Vue', 'Svelte'],
	false,
	'',
	'label',
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
	'value',
	'label',
	true,
);

export const DUMMMY_CHECKBOX_CONFIG: CheckboxModel = new CheckboxModel(
	'value',
	'Select javascript framework',
	// ['React', 'Angular', 'Vue', 'Svelte'],
	/* [
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
	], */
	{
		name: 'Parent task',
		completed: false,
		children: [
			{ name: 'Child task 1', completed: false },
			{ name: 'Child task 2', completed: false },
			{ name: 'Child task 3', completed: false },
		],
	},
	'value',
	'label',
	'after',
	false,
	true,
	'children',
);

export const DUMMMY_AVATAR_CHIP_CONFIG: ChipModel = new ChipModel(
	'avatar',
	signal([
		{ label: 'Dog one', avatar: 'https://material.angular.dev/assets/img/examples/shiba1.jpg' },
		{ label: 'Dog two', avatar: 'https://material.angular.dev/assets/img/examples/shiba1.jpg' },
		{ label: 'Dog three', avatar: 'https://material.angular.dev/assets/img/examples/shiba1.jpg' },
	]),
	'avatar',
	'label',
	'outline',
	'Avatar Chip',
);

export const DUMMMY_DRAG_DROP_CHIP_CONFIG: ChipModel = new ChipModel(
	'dragdrop',
	signal([
		{ label: 'Dog one', avatar: 'https://material.angular.dev/assets/img/examples/shiba1.jpg' },
		{ label: 'Dog two', avatar: 'https://material.angular.dev/assets/img/examples/shiba1.jpg' },
		{ label: 'Dog three', avatar: 'https://material.angular.dev/assets/img/examples/shiba1.jpg' },
	]),
	'',
	'label',
	'outline',
	'Drag & Drop Chip',
);

export const DUMMMY_INPUT_CHIP_CONFIG: ChipModel = new ChipModel(
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
	// signal(['React', 'Angular', 'Vue', 'Svelte']),
	'',
	'name',
	'outline',
	'Select Framework',
	'Please select framework',
	true,
);

export const DUMMMY_AUTOCOMPLETE_CHIP_CONFIG: ChipModel = new ChipModel(
	'autocomplete',
	signal([
		{
			name: 'React',
		},
	]),
	'',
	'name',
	'outline',
	'Select Framework',
	'Please select framework',
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

export const BREADCRUMBS: BreadcrumbModel[] = [
	{ label: 'Home', icon: 'home', url: '/home' },
	{ label: 'Dashboard', icon: 'help_outline', url: '/dashboard' },
	{ label: 'Detail', icon: 'info' },
];
