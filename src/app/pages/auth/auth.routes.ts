import { Routes } from '@angular/router';
import { AuthComponent } from './page/auth/auth.component';

export const AUTH_ROUTES: Routes = [
	{
		path: 'auth',
		component: AuthComponent,
		children: [
			{
				path: '',
				loadComponent: () =>
					import('./components/login/login.component').then(m => m.LoginComponent),
			},
			{
				path: 'forgot-password',
				loadComponent: () =>
					import('./components/forgot/forgot.component').then(m => m.ForgotComponent),
			},
			{
				path: 'register',
				loadComponent: () =>
					import('./components/register/register.component').then(m => m.RegisterComponent),
			},
		],
	},
];
