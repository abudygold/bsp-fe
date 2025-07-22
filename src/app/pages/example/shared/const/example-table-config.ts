import { TableModel } from '@abudygold/angular-ui-lib';

export const DUMMY_DATA = [
	{
		name: 'John Doe',
		statusName: 'Active',
		createdDate: new Date().toISOString(),
		total: 12500,
		isSelected: false,
	},
	{
		name: 'Jane Smith',
		statusName: 'Inactive',
		createdDate: new Date().toISOString(),
		total: 12500,
		isSelected: false,
	},
	{
		name: 'Alice Johnson',
		statusName: 'Pending',
		createdDate: new Date().toISOString(),
		total: 12500,
		isSelected: false,
	},
	{
		name: 'Bob Brown',
		statusName: 'Active',
		createdDate: new Date().toISOString(),
		total: 12300,
		isSelected: false,
	},
	{
		name: 'Charlie Davis',
		statusName: 'Inactive',
		createdDate: new Date().toISOString(),
		total: 12200,
		isSelected: false,
	},
	{
		name: 'Diana Evans',
		statusName: 'Active',
		createdDate: new Date().toISOString(),
		total: 12100,
		isSelected: false,
	},
	{
		name: 'Frank Green',
		statusName: 'Pending',
		createdDate: new Date().toISOString(),
		total: 12500,
		isSelected: false,
	},
	{
		name: 'Grace Hall',
		statusName: 'Active',
		createdDate: new Date().toISOString(),
		total: 12500,
		isSelected: false,
	},
	{
		name: 'Henry Irwin',
		statusName: 'Inactive',
		createdDate: new Date().toISOString(),
		total: 12500,
		isSelected: false,
	},
	{
		name: 'Ivy Jenkins',
		statusName: 'Pending',
		createdDate: new Date().toISOString(),
		total: 12500,
		isSelected: false,
	},
	{
		name: 'Henry',
		statusName: 'Inactive',
		createdDate: new Date().toISOString(),
		total: 12500,
		isSelected: false,
	},
	{
		name: 'Ivy',
		statusName: 'Pending',
		createdDate: new Date().toISOString(),
		total: 12500,
		isSelected: false,
	},
];

export const DUMMY_TABLE_CONST: TableModel = new TableModel();
DUMMY_TABLE_CONST.columns = [
	{
		key: 'selection',
		label: '',
		sortable: false,
	},
	{
		key: 'name',
		label: 'Name',
		sortable: true,
	},
	{
		key: 'statusName',
		label: 'Status Name',
		sortable: true,
	},
	{
		key: 'createdDate',
		label: 'Created Date',
		sortable: false,
	},
	{
		key: 'total',
		label: 'Total Payment',
		sortable: true,
	},
	{
		key: 'actions',
		label: 'Actions',
		sortable: false,
	},
];
DUMMY_TABLE_CONST.dataTotal = DUMMY_DATA.length;
DUMMY_TABLE_CONST.dataSource = DUMMY_DATA;
DUMMY_TABLE_CONST.sortKey = 'name';
DUMMY_TABLE_CONST.sortOrder = 'asc';
DUMMY_TABLE_CONST.isHttpPagination.set(false);
DUMMY_TABLE_CONST.generateDataType();
DUMMY_TABLE_CONST.dataType = {
	...DUMMY_TABLE_CONST.dataType,
	createdDate: {
		type: 'date',
		format: 'M/d/yyyy hh:mma',
	},
	statusName: {
		type: 'custom',
	},
	selection: {
		type: 'custom',
	},
	total: {
		type: 'currency',
		currency: 'IDR',
		locale: 'id-ID',
		minimumFractionDigits: 0,
		maximumFractionDigits: 0,
	},
	actions: {
		type: 'custom',
	},
};
