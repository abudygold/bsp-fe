import { Component, inject, signal } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
	ApiService,
	TableComponent,
	TableModel,
	TextboxComponent,
} from '@devkitify/angular-ui-kit';
import { Sort } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { IViewList, VIEW_LIST_FORM } from '../../../../shared/form-builder/search';
import { CUSTOMER_LIST_PATH } from '../../../../shared/const';
import { VOUCHER_TRACKER_TABLE } from '../../../../shared/form-builder/table/voucher';

@Component({
	selector: 'app-tracker-voucher',
	imports: [TableComponent, TextboxComponent, MatIconModule],
	templateUrl: './tracker-voucher.component.html',
	styleUrl: './tracker-voucher.component.scss',
})
export class TrackerVoucherComponent {
	#apiService = inject(ApiService);

	tableConfig: TableModel = VOUCHER_TRACKER_TABLE;
	searchControl: FormControl = new FormControl('');
	formConfig = {
		search: signal<IViewList>(VIEW_LIST_FORM('Search by voucher name')),
	};

	constructor() {
		this.#fetchData();
	}

	#fetchData(): void {
		this.tableConfig.isLoading.set(true);
		this.#apiService.get(CUSTOMER_LIST_PATH, this.tableConfig.filters).subscribe({
			next: (resp: any) => {
				this.tableConfig.dataSource = resp as any[];
				this.tableConfig.dataTotal = (resp as any[]).length;
				this.tableConfig.generateDataType();
				this.tableConfig.dataType = {
					...this.tableConfig.dataType,
					actions: {
						type: 'custom',
					},
				};
			},
			complete: () => this.tableConfig.isLoading.set(false),
			error: () => this.tableConfig.isLoading.set(false),
		});
	}

	sortChange(event: Sort): void {
		this.tableConfig.sortActive = event.active;
		this.tableConfig.sortDirection = event.direction;
	}

	pageChange(event: { pageIndex: number; pageSize: number }): void {
		console.log(event);
		this.tableConfig.pageIndex = event.pageIndex;
		this.tableConfig.pageSize = event.pageSize;
		this.tableConfig.filters['pageIndex'] = this.tableConfig.pageIndex;
		this.tableConfig.filters['pageSize'] = this.tableConfig.pageSize;
		this.#fetchData();
	}

	onInputChange(): void {
		this.tableConfig.filters['username'] = this.searchControl.value;
		this.#fetchData();
	}
}
