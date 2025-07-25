import { Routes } from '@angular/router';
import { LAYOUT_ROUTES } from './layout/layout.routes';
import { AUTH_ROUTES } from './pages/auth/auth.routes';

export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'auth',
	},
	...AUTH_ROUTES,
	...LAYOUT_ROUTES,
];
