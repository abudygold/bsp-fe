import { Component, inject, signal } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {
	ApiService,
	ButtonComponent,
	TableComponent,
	TableModel,
	TextboxComponent,
} from '@devkitify/angular-ui-kit';
import { Sort } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { IViewList, VIEW_LIST_FORM } from '../../../../shared/form-builder/search';
import { CUSTOMER_TABLE } from '../../../../shared/form-builder/table/customer';
import { CUSTOMER_LIST_PATH, DIALOG_CONFIG } from '../../../../shared/const';
import { CustomerFormComponent } from '../../dialog/customer-form';

@Component({
	selector: 'app-customer',
	imports: [TableComponent, TextboxComponent, ButtonComponent, MatIconModule],
	templateUrl: './customer.component.html',
	styleUrl: './customer.component.scss',
})
export class CustomerComponent {
	#dialog = inject(MatDialog);
	#apiService = inject(ApiService);

	tableConfig: TableModel = CUSTOMER_TABLE;
	searchControl: FormControl = new FormControl('');
	formConfig = {
		search: signal<IViewList>(VIEW_LIST_FORM('Search by customer name', 'Add Customer')),
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

	onAction(): void {
		console.log('--- Action Clicked ---');
	}

	openFormDialog(rowData: any = null): void {
		this.#dialog.open(CustomerFormComponent, {
			...DIALOG_CONFIG.default,
			data: {
				rowData,
			},
		});
	}
}
