import { Routes } from '@angular/router';
import { DASHBOARD_BREADCRUMB } from '../../shared/form-builder/breadcrumbs';

export const DASHBOARD_ROUTES: Routes = [
	{
		path: 'dashboard',
		loadComponent: () =>
			import('./page/dashboard/dashboard.component').then(m => m.DashboardComponent),
		data: {
			breadcrumb: DASHBOARD_BREADCRUMB,
		},
	},
];
