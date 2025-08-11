import { BreadcrumbModel } from '@devkitify/angular-ui-kit';

export const VOUCHER_LIST_BREADCRUMB: BreadcrumbModel[] = [
	{ label: 'Dashboard', icon: 'home', url: '/secure/dashboard' },
	{ label: 'Voucher List', icon: 'lists' },
];

export const DISTRIBUTE_VOUCHER_BREADCRUMB: BreadcrumbModel[] = [
	{ label: 'Dashboard', icon: 'home', url: '/secure/dashboard' },
	{ label: 'Distribute Voucher', icon: 'hub' },
];

export const GENERATE_VOUCHER_BREADCRUMB: BreadcrumbModel[] = [
	{ label: 'Dashboard', icon: 'home', url: '/secure/dashboard' },
	{ label: 'Generate Voucher', icon: 'qr_code_2_add' },
];

export const TRACKER_VOUCHER_BREADCRUMB: BreadcrumbModel[] = [
	{ label: 'Dashboard', icon: 'home', url: '/secure/dashboard' },
	{ label: 'Tracker Voucher', icon: 'analytics' },
];
