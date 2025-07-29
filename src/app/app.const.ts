import { environment } from '../environments/environment';

export const API_URL = environment.apiUrl;
export const NAVIGATIONS: any[] = [
	{
		label: 'Dashboard',
		icon: 'home',
		isOpened: false,
		isParent: true,
		isActive: false,
		link: '/dashboard',
	},
	{
		label: 'Users',
		icon: 'groups',
		isOpened: false,
		isParent: true,
		isActive: false,
		subMenu: [
			{
				label: 'List',
				icon: 'lists',
				link: '/secure/users',
				isActive: false,
				paddingLeft: '2rem',
			},
			{
				label: 'Add',
				icon: 'add',
				link: '/secure/users/add',
				isActive: false,
				paddingLeft: '2rem',
			},
		],
	},
	{
		label: 'Example Page',
		icon: 'settings',
		isOpened: false,
		isParent: true,
		isActive: false,
		subMenu: [
			{
				label: 'List',
				icon: 'lists',
				link: '/secure/example',
				paddingLeft: '2rem',
				isActive: false,
			},
			{
				label: 'Add',
				icon: 'add',
				link: '/secure/example/add',
				paddingLeft: '2rem',
				isActive: false,
			},
			{
				label: 'Expander',
				icon: 'home',
				link: '/ccc',
				paddingLeft: '2rem',
				isActive: false,
			},
			{
				label: 'Component',
				icon: 'home',
				isOpened: false,
				isActive: false,
				paddingLeft: '2rem',
				subMenu: [
					{
						label: 'Accordion',
						icon: 'home',
						link: '/ddd',
						paddingLeft: '4rem',
						isActive: false,
					},
					{
						label: 'Button',
						icon: 'home',
						link: '/eee',
						paddingLeft: '4rem',
						isActive: false,
					},
					{
						label: 'Expander',
						icon: 'home',
						link: '/fff',
						paddingLeft: '4rem',
						isActive: false,
					},
					{
						label: 'Component',
						icon: 'home',
						isOpened: false,
						isActive: false,
						paddingLeft: '4rem',
						subMenu: [
							{
								label: 'Accordion',
								icon: 'home',
								link: '/ggg',
								paddingLeft: '6rem',
								isActive: false,
							},
							{
								label: 'Button',
								icon: 'home',
								link: '/hhh',
								paddingLeft: '6rem',
								isActive: false,
							},
							{
								label: 'Expander',
								icon: 'home',
								link: '/iii',
								paddingLeft: '6rem',
								isActive: false,
							},
						],
					},
				],
			},
		],
	},
];
