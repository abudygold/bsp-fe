import { Routes } from '@angular/router';
import { USER_ADD_BREADCRUMB, USER_LIST_BREADCRUMB } from '../../shared/const/breadcrumbs';

export const USERS_ROUTES: Routes = [
	{
		path: 'users',
		children: [
			{
				path: '',
				loadComponent: () => import('./page/users-list').then(m => m.UsersListComponent),
				data: {
					breadcrumb: USER_LIST_BREADCRUMB,
				},
			},
			{
				path: 'add',
				loadComponent: () => import('./page/users-add').then(m => m.UsersAddComponent),
				data: {
					breadcrumb: USER_ADD_BREADCRUMB,
				},
			},
			{
				path: 'edit/:id',
				loadComponent: () => import('./page/users-edit').then(m => m.UsersEditComponent),
			},
		],
	},
];
