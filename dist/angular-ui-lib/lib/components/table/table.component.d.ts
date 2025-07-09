import { TemplateRef } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TableConfigModel } from '../../shared/model';
import * as i0 from "@angular/core";
interface Pagination {
    pageIndex: number;
    pageSize: number;
}
export declare class TableComponent {
    sortChange: import("@angular/core").OutputEmitterRef<Sort>;
    pageChange: import("@angular/core").OutputEmitterRef<Pagination>;
    mouseOverChange: import("@angular/core").OutputEmitterRef<any>;
    selectData: import("@angular/core").OutputEmitterRef<any>;
    dataSource: MatTableDataSource<any>;
    tableConfig: import("@angular/core").InputSignal<TableConfigModel>;
    sort: MatSort;
    selectionTemplate: TemplateRef<any> | null;
    customTemplate: TemplateRef<any> | null;
    disableClick(event: Event, tableKey: string): void;
    displayValue(value: any): any;
    getPropertyValue(obj: any, key: string): any;
    get pagedData(): MatTableDataSource<any>;
    onPageChange(page: Pagination): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableComponent, "lib-table", never, { "tableConfig": { "alias": "tableConfig"; "required": true; "isSignal": true; }; }, { "sortChange": "sortChange"; "pageChange": "pageChange"; "mouseOverChange": "mouseOverChange"; "selectData": "selectData"; }, ["selectionTemplate", "customTemplate"], never, true, never>;
}
export {};
