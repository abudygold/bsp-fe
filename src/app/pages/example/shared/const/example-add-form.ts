import { DatepickerModel, DropdownModel, TextboxModel } from '@abudygold/angular-ui-lib';

// Highlight: Example List Form interface and constant
export interface IExampleAddForm {
	type: string;
	key: string;
	options: any;
}

export const EXAMPLE_ADD_FORM: IExampleAddForm[] = [
	{
		type: 'text',
		key: 'name',
		options: new TextboxModel('outline', 'Name', 'text', 'Enter your name'),
	},
	{
		type: 'dropdown',
		key: 'framework',
		options: new DropdownModel(
			'outline',
			'Javascript Framework',
			['React', 'Angular', 'Vue', 'Svelte'],
			'Select javascript framework',
		),
	},
	{
		type: 'date',
		key: 'bod',
		options: new DatepickerModel('outline', 'BOD', 'Enter your BOD', false),
	},
	{
		type: 'textarea',
		key: 'description',
		options: new TextboxModel('outline', 'Description', 'textarea', 'Enter description', '', 5),
	},
];
