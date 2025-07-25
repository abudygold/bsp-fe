import { ButtonModel, CheckboxModel, FormlyModel, TextboxModel } from '@abudygold/angular-ui-lib';

export const FORM_LOGIN_CONST: FormlyModel = {
	formClass: 'tw-grid tw-grid-cols-2 tw-gap-4',
	options: {},
	fields: [
		{
			type: 'textbox',
			control: 'email',
			config: new TextboxModel('outline', 'always', 'Email', 'email', 'name@company.com'),
			inputClass: 'tw-col-span-1',
		},
		{
			type: 'textbox',
			control: 'password',
			config: new TextboxModel('outline', 'always', 'Password', 'password', '••••••••'),
			inputClass: 'tw-col-span-1',
		},
	],
};

export const REMEMBER_ME_CONST: CheckboxModel = new CheckboxModel('Remember me');

export const BUTTON_GOOGLE_LOGIN_CONST: ButtonModel = new ButtonModel(
	'stroked',
	'Sign in with Google',
	'primary',
	false,
	'tw-w-full !tw-h-10',
	'',
	'android',
	'start',
);

export const SUBMIT_LOGIN_CONST: ButtonModel = new ButtonModel(
	'flat',
	'Sign in to your account',
	'primary',
	false,
	'tw-w-full !tw-h-10',
	'',
	'android',
	'start',
);

export const FORM_FORGOT_PASSWORD_CONST: FormlyModel = {
	formClass: 'tw-grid tw-grid-cols-1 tw-gap-4',
	options: {},
	fields: [
		{
			type: 'textbox',
			control: 'email',
			config: new TextboxModel('outline', 'always', 'Email', 'email', 'name@company.com'),
			inputClass: 'tw-col-span-1',
		},
	],
};

export const SEND_FORGOT_PASSWORD_CONST: ButtonModel = new ButtonModel(
	'flat',
	'Send',
	'primary',
	false,
	'tw-w-full !tw-h-10',
);

export const FORM_REGISTER_CONST: FormlyModel = {
	formClass: 'tw-grid tw-grid-cols-1 tw-gap-4',
	options: {},
	fields: [
		{
			type: 'textbox',
			control: 'email',
			config: new TextboxModel('outline', 'always', 'Email', 'email', 'name@company.com'),
			inputClass: 'tw-col-span-1',
		},
	],
};

export const REGISTER_CONST: ButtonModel = new ButtonModel(
	'flat',
	'Send',
	'primary',
	false,
	'tw-w-full !tw-h-10',
);

/* SHARED */
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
