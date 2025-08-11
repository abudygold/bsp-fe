export interface INavigation {
	label: string;
	isActive: boolean;
	isOpened?: boolean;
	isParent?: boolean;
	icon?: string;
	link?: string;
	params?: object;
	paddingLeft?: string;
	subMenu?: INavigation[];
}

export const NAVIGATIONS: INavigation[] = [
	{
		isActive: false,
		label: 'Dashboard',
		link: '/secure/dashboard',
		icon: 'home',
	},
	{
		isActive: false,
		label: 'Leaderboard',
		link: '/secure/leaderboard',
		icon: 'leaderboard',
	},
	{
		isActive: false,
		isOpened: false,
		label: 'Voucher',
		icon: 'confirmation_number',
		subMenu: [
			{
				isActive: false,
				label: 'Voucher List',
				link: '/secure/voucher-list',
				icon: 'lists',
			},
			{
				isActive: false,
				label: 'Generate Voucher',
				link: '/secure/generate-voucher',
				icon: 'qr_code_2_add',
			},
			{
				isActive: false,
				label: 'Distribute Voucher',
				link: '/secure/distribute-voucher',
				icon: 'hub',
			},
			{
				isActive: false,
				label: 'Tracker Voucher',
				link: '/secure/tracker-voucher',
				icon: 'analytics',
			},
		],
	},
	{
		isActive: false,
		label: 'Customer',
		link: '/secure/customer',
		icon: 'group',
	},
];
