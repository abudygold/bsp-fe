import { Routes } from '@angular/router';
import { CUSTOMER_BREADCRUMB } from '../../shared/form-builder/breadcrumbs';

export const CUSTOMER_ROUTES: Routes = [
	{
		path: 'customer',
		loadComponent: () =>
			import('./page/customer/customer.component').then(m => m.CustomerComponent),
		data: {
			breadcrumb: CUSTOMER_BREADCRUMB,
		},
	},
];
