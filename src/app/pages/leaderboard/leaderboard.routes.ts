import { Routes } from '@angular/router';
import { LEADERBOARD_BREADCRUMB } from '../../shared/form-builder/breadcrumbs';

export const LEADERBOARD_ROUTES: Routes = [
	{
		path: 'leaderboard',
		loadComponent: () =>
			import('./page/leaderboard/leaderboard.component').then(m => m.LeaderboardComponent),
		data: {
			breadcrumb: LEADERBOARD_BREADCRUMB,
		},
	},
];
