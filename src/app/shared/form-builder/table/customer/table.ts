import { TableModel } from '@devkitify/angular-ui-kit';

export const CUSTOMER_TABLE: TableModel = new TableModel();
CUSTOMER_TABLE.columns = [
	{
		key: 'id',
		label: 'No',
		sortable: true,
	},
	{
		key: 'name',
		label: 'Customer Name',
		sortable: true,
	},
	{
		key: 'phone',
		label: 'Phone Number',
		sortable: true,
	},
	{
		key: 'username',
		label: 'Distributed Voucher',
		sortable: false,
	},
	{
		key: 'email',
		label: 'Claimed Voucher',
		sortable: false,
	},
	{
		key: 'website',
		label: 'Group',
		sortable: false,
	},
	{
		key: 'actions',
		label: 'Actions',
		sortable: false,
	},
];
CUSTOMER_TABLE.sortActive = 'name';
CUSTOMER_TABLE.sortDirection = 'asc';
CUSTOMER_TABLE.isHttpPagination.set(true);
