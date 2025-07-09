import {
	ButtonModel,
	CheckboxModel,
	DropdownModel,
	RadioModel,
	TableConfigModel,
	TextboxModel,
} from 'angular-ui-lib';

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

export const DUMMY_BUTTTON_CONFIG: ButtonModel = new ButtonModel(
	'flat',
	'Submit Form',
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
	// ['React', 'Angular', 'Vue', 'Svelte'],
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
