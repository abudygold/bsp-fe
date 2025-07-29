import { Routes } from '@angular/router';

export const USERS_ROUTES: Routes = [
	{
		path: 'users',
		children: [
			{
				path: '',
				loadComponent: () => import('./page/users-list').then(m => m.UsersListComponent),
			},
			{
				path: 'add',
				loadComponent: () => import('./page/users-add').then(m => m.UsersAddComponent),
			},
			{
				path: 'edit/:id',
				loadComponent: () => import('./page/users-edit').then(m => m.UsersEditComponent),
			},
		],
	},
];
