import { ButtonModel, TextboxModel } from '@abudygold/angular-ui-lib';

const SEARCH_TEXTBOX_CONST: TextboxModel = new TextboxModel(
	'outline',
	'auto',
	'Search by Name',
	'text',
	'Enter your name',
);

const ADD_NEW_BUTTON: ButtonModel = new ButtonModel(
	'flat',
	'Add New Data',
	'primary',
	false,
	'',
	'add',
);

// Highlight: Example List Form interface and constant
export interface IExampleListForm {
	searchTextbox: TextboxModel;
	addNewButton: ButtonModel;
}

export const EXAMPLE_LIST_FORM: IExampleListForm = {
	searchTextbox: SEARCH_TEXTBOX_CONST,
	addNewButton: ADD_NEW_BUTTON,
};
