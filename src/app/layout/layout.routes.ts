import { Routes } from '@angular/router';
import { EXAMPLE_ROUTES } from '../pages/example/example.routes';
import { USERS_ROUTES } from '../pages/users/users.routes';

export const LAYOUT_ROUTES: Routes = [
	{
		path: 'secure',
		loadComponent: () =>
			import('./page/main-layout/main-layout.component').then(m => m.MainLayoutComponent),
		children: [
			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'example',
			},
			...EXAMPLE_ROUTES,
			...USERS_ROUTES,
		],
	},
];
