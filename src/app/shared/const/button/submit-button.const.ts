import { ButtonModel } from '@abudygold/angular-ui-lib';

export interface ISubmitButton {
	submitButton: ButtonModel;
	cancelButton: ButtonModel;
}

const SUBMIT_BUTTON = (label: string): ButtonModel => new ButtonModel('flat', label, 'primary');
const CANCEL_BUTTON = (label: string): ButtonModel => new ButtonModel('stroked', label, 'primary');

export const SUBMIT_BUTTON_CONST = (
	submitLabel: string = 'Submit',
	cancelLabel: string = 'Cancel',
): ISubmitButton => ({
	submitButton: SUBMIT_BUTTON(submitLabel),
	cancelButton: CANCEL_BUTTON(cancelLabel),
});

export const BACK_TO_LOGIN_CONST: ButtonModel = new ButtonModel(
	'stroked',
	'Back to login',
	'primary',
	false,
	'tw-w-full !tw-h-10',
	'',
	'arrow_back',
	'start',
);
