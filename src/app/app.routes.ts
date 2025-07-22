import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./pages/example/page/example-list/example-list.component').then(
				m => m.ExampleListComponent,
			),
	},
	{
		path: 'add',
		loadComponent: () =>
			import('./pages/example/page/example-add/example-add.component').then(
				m => m.ExampleAddComponent,
			),
	},
	{
		path: 'edit/:id',
		loadComponent: () =>
			import('./pages/example/page/example-edit/example-edit.component').then(
				m => m.ExampleEditComponent,
			),
	},
	{
		path: 'detail/:id',
		loadComponent: () =>
			import('./pages/example/page/example-detail/example-detail.component').then(
				m => m.ExampleDetailComponent,
			),
	},
];
