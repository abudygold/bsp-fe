import { Routes } from '@angular/router';
import { CUSTOMER_ROUTES } from '../pages/customer/customer.routes';
import { DASHBOARD_ROUTES } from '../pages/dashboard/dashboard.routes';
import { LEADERBOARD_ROUTES } from '../pages/leaderboard/leaderboard.routes';
import { VOUCHER_ROUTES } from '../pages/voucher/voucher.routes';

export const LAYOUT_ROUTES: Routes = [
	{
		path: 'secure',
		loadComponent: () =>
			import('./page/main-layout/main-layout.component').then(m => m.MainLayoutComponent),
		children: [
			{
				path: '',
				redirectTo: 'dashboard',
				pathMatch: 'full',
			},
			...DASHBOARD_ROUTES,
			...LEADERBOARD_ROUTES,
			...VOUCHER_ROUTES,
			...CUSTOMER_ROUTES,
		],
	},
];
