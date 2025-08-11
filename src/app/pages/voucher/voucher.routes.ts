import { Routes } from '@angular/router';
import {
	DISTRIBUTE_VOUCHER_BREADCRUMB,
	GENERATE_VOUCHER_BREADCRUMB,
	TRACKER_VOUCHER_BREADCRUMB,
	VOUCHER_LIST_BREADCRUMB,
} from '../../shared/form-builder/breadcrumbs';

export const VOUCHER_ROUTES: Routes = [
	{
		path: 'voucher-list',
		loadComponent: () =>
			import('./page/voucher-list/voucher-list.component').then(m => m.VoucherListComponent),
		data: {
			breadcrumb: VOUCHER_LIST_BREADCRUMB,
		},
	},
	{
		path: 'generate-voucher',
		loadComponent: () =>
			import('./page/generate-voucher/generate-voucher.component').then(
				m => m.GenerateVoucherComponent,
			),
		data: {
			breadcrumb: GENERATE_VOUCHER_BREADCRUMB,
		},
	},
	{
		path: 'distribute-voucher',
		loadComponent: () =>
			import('./page/distribute-voucher/distribute-voucher.component').then(
				m => m.DistributeVoucherComponent,
			),
		data: {
			breadcrumb: DISTRIBUTE_VOUCHER_BREADCRUMB,
		},
	},
	{
		path: 'tracker-voucher',
		loadComponent: () =>
			import('./page/tracker-voucher/tracker-voucher.component').then(
				m => m.TrackerVoucherComponent,
			),
		data: {
			breadcrumb: TRACKER_VOUCHER_BREADCRUMB,
		},
	},
];
