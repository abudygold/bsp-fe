import { SelectionModel } from '@angular/cdk/collections';
import { signal } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

type FilterRequestPayload = Partial<{
	page: number;
	limit: number;
	sort: string;
	order: 'asc' | 'desc' | '';
	filters: {
		[key: string]: any;
	};
}> & { [k: string]: any };

type DataType = 'date' | 'number' | 'title' | 'currency' | 'custom' | '';
type FilterOptions = FilterRequestPayload;
const TablePageIndexDefaultConst = 0;
const TablePageSizeDefaultConst = 10;

export class TableConfigModel {
	public dataKey: string[];
	public dataLabel: string[];
	public dataSource: any[];
	public dataTotal: number;
	public pageIndex: number;
	public pageSize: number;
	public sortKey: string = '';
	public sortOrder: 'asc' | 'desc' | '';
	public selection: SelectionModel<any> = new SelectionModel<any>(true, []);
	public tableClass: string = '';

	isHttpPagination = signal(true);
	isPagination = signal(true);
	isSorter = signal(true);
	isLoading = signal(false);
	selectedOptionId = signal<string | number | null>(null);
	options: FilterOptions = {
		sortDirection: 'desc',
		sortActive: 'date',
		limit: 10,
		page: 1,
		property: null,
		filters: {},
	};
	dataType: {
		[key: string]: {
			type: DataType;
			format?: string;
			currency?: string;
			locale?: string;
			minimumFractionDigits?: number;
			maximumFractionDigits?: number;
		};
	} = {};

	constructor() {
		this.dataKey = [];
		this.dataLabel = [];
		this.dataSource = [];
		this.dataTotal = 0;
		this.pageIndex = TablePageIndexDefaultConst;
		this.pageSize = TablePageSizeDefaultConst;
		this.sortOrder = 'asc';
	}

	public generateDataType() {
		if (this.dataSource.length === 0) return;

		for (const key in this.dataSource[0]) {
			const keyValue = this.dataSource[0][key];

			if (!this.dataKey.includes(key)) {
				continue;
			}

			let dataType: DataType = '';
			if (keyValue instanceof Date) {
				dataType = 'date';
			} else if (typeof keyValue === 'number') {
				dataType = 'number';
			} else if (typeof keyValue === 'string') {
				dataType = 'title';
			} else {
				dataType = '';
			}

			this.dataType[key] = { type: dataType };
		}

		return this;
	}

	public isEmpty(): boolean {
		return this.dataSource?.length === 0;
	}

	public resetPage() {
		this.pageIndex = TablePageIndexDefaultConst;
		this.pageSize = TablePageSizeDefaultConst;
		this.sortKey = '';
		this.sortOrder = 'asc';
	}

	public resetDataSource() {
		this.resetPage();

		this.dataSource = [];
		this.dataTotal = 0;
	}

	isSelected(row: any): boolean {
		return this.selection.isSelected(row);
	}

	selectRow(row: any): void {
		this.selection.toggle(row);
	}

	selectAll(isChecked: boolean): void {
		if (!isChecked) {
			this.selection.clear();
			return;
		}

		if (this.dataSource instanceof MatTableDataSource) {
			this.selection.select(...this.dataSource.data);
			return;
		}

		this.selection.select(...this.dataSource);
	}
}
