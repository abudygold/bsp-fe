import { SelectionModel } from '@angular/cdk/collections';
type FilterRequestPayload = Partial<{
    page: number;
    limit: number;
    sort: string;
    order: 'asc' | 'desc' | '';
    filters: {
        [key: string]: any;
    };
}> & {
    [k: string]: any;
};
type DataType = 'date' | 'number' | 'title' | 'currency' | 'custom' | '';
type FilterOptions = FilterRequestPayload;
export declare class TableConfigModel {
    dataKey: string[];
    dataLabel: string[];
    dataSource: any[];
    dataTotal: number;
    pageIndex: number;
    pageSize: number;
    sortKey: string;
    sortOrder: 'asc' | 'desc' | '';
    selection: SelectionModel<any>;
    tableClass: string;
    isHttpPagination: import("@angular/core").WritableSignal<boolean>;
    isPagination: import("@angular/core").WritableSignal<boolean>;
    isSorter: import("@angular/core").WritableSignal<boolean>;
    isLoading: import("@angular/core").WritableSignal<boolean>;
    selectedOptionId: import("@angular/core").WritableSignal<string | number | null>;
    options: FilterOptions;
    dataType: {
        [key: string]: {
            type: DataType;
            format?: string;
            currency?: string;
            locale?: string;
            minimumFractionDigits?: number;
            maximumFractionDigits?: number;
        };
    };
    constructor();
    generateDataType(): this | undefined;
    isEmpty(): boolean;
    resetPage(): void;
    resetDataSource(): void;
    isSelected(row: any): boolean;
    selectRow(row: any): void;
    selectAll(isChecked: boolean): void;
}
export {};
