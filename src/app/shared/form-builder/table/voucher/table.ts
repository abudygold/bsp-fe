import { TableModel } from '@devkitify/angular-ui-kit';

export const VOUCHER_LIST_TABLE: TableModel = new TableModel();
VOUCHER_LIST_TABLE.columns = [
	{
		key: 'id',
		label: 'No',
		sortable: true,
	},
	{
		key: 'name',
		label: 'Campaign Name',
		sortable: true,
	},
	{
		key: 'phone',
		label: 'Campaign End Date',
		sortable: true,
	},
	{
		key: 'username',
		label: 'Issued Voucher',
		sortable: false,
	},
	{
		key: 'email',
		label: 'Distributed Voucher',
		sortable: false,
	},
	{
		key: 'website',
		label: 'Claimed Voucher',
		sortable: false,
	},
];
VOUCHER_LIST_TABLE.sortActive = 'name';
VOUCHER_LIST_TABLE.sortDirection = 'asc';
VOUCHER_LIST_TABLE.isHttpPagination.set(true);

export const VOUCHER_TRACKER_TABLE: TableModel = new TableModel();
VOUCHER_TRACKER_TABLE.columns = [
	{
		key: 'id',
		label: 'No',
		sortable: true,
	},
	{
		key: 'name',
		label: 'Voucher Name',
		sortable: true,
	},
	{
		key: 'phone',
		label: 'Campaign Name',
		sortable: true,
	},
	{
		key: 'username',
		label: 'Issued Voucher',
		sortable: false,
	},
	{
		key: 'email',
		label: 'Voucher Holder',
		sortable: false,
	},
	{
		key: 'website',
		label: 'Status Voucher',
		sortable: false,
	},
];
VOUCHER_TRACKER_TABLE.sortActive = 'name';
VOUCHER_TRACKER_TABLE.sortDirection = 'asc';
VOUCHER_TRACKER_TABLE.isHttpPagination.set(true);
