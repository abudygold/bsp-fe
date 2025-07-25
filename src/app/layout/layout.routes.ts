import { Routes } from '@angular/router';
import { EXAMPLE_ROUTES } from '../pages/example/example.routes';

export const LAYOUT_ROUTES: Routes = [
	{
		path: 'secure',
		children: [
			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'example',
			},
			...EXAMPLE_ROUTES,
		],
	},
];
