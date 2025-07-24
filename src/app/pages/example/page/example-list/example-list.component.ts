import {
	BreadcrumbModel,
	BreadcrumbsComponent,
	ButtonComponent,
	TableComponent,
	TableModel,
	TextboxComponent,
} from '@abudygold/angular-ui-lib';
import { Component, inject } from '@angular/core';
import {
	DUMMY_DATA,
	DUMMY_TABLE_CONST,
	EXAMPLE_LIST_FORM,
	IExampleListForm,
	BREADCRUMBS,
} from '../../shared/const';
import { Sort } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-example-list',
	imports: [
		MatCheckboxModule,
		MatIconModule,
		TextboxComponent,
		ButtonComponent,
		TableComponent,
		BreadcrumbsComponent,
	],
	templateUrl: './example-list.component.html',
	styleUrl: './example-list.component.scss',
})
export class ExampleListComponent {
	#router = inject(Router);

	searchControl: FormControl = new FormControl('');

	tableConfig: TableModel = DUMMY_TABLE_CONST;
	formList: IExampleListForm = EXAMPLE_LIST_FORM;
	breadcrumbs: BreadcrumbModel[] = BREADCRUMBS;

	onRowSelection(row: any): void {
		this.tableConfig.selectRow(row);
		console.log('selectRowData', this.tableConfig.selection.selected, this.tableConfig);
	}

	onAllSelection(isChecked: boolean): void {
		this.tableConfig.selectAll(isChecked);
		console.log('selectAllData', this.tableConfig.selection.selected);
	}

	sortChange(event: Sort): void {
		this.tableConfig.sortKey = event.active;
		this.tableConfig.sortOrder = event.direction;
	}

	pageChange(event: any): void {
		console.log(event);
	}

	onInputChange(): void {
		this.tableConfig.isLoading.set(true);

		if (!this.searchControl.value) {
			this.tableConfig.dataSource = DUMMY_DATA;
			this.tableConfig.dataTotal = this.tableConfig.dataSource.length;
			this.tableConfig.isLoading.set(false);
			return;
		}

		setTimeout(() => {
			this.tableConfig.dataSource = this.tableConfig.dataSource.filter(d =>
				d.name?.toLowerCase().includes(this.searchControl.value?.toLowerCase()),
			);
			this.tableConfig.dataTotal = this.tableConfig.dataSource.length;
			this.tableConfig.isLoading.set(false);
		}, 2000);
	}

	onAction(): void {
		console.log('--- Action Clicked ---');
	}

	navigateToAdd(): void {
		this.#router.navigate(['/add']);
	}
}
