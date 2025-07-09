import { OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PaginationComponent implements OnInit {
    pageChange: import("@angular/core").OutputEmitterRef<{
        pageIndex: number;
        pageSize: number;
    }>;
    pageSizeOptions: number[];
    totalItems: import("@angular/core").InputSignal<number>;
    pageSize: import("@angular/core").ModelSignal<number>;
    pageIndex: import("@angular/core").ModelSignal<number>;
    get totalPages(): number;
    get totalPagesArray(): number[];
    get rangeStart(): number;
    get rangeEnd(): number;
    ngOnInit(): void;
    onChangePageSize(): void;
    onPageChange(): void;
    nextPage(): void;
    prevPage(): void;
    emitChange(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PaginationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PaginationComponent, "lib-pagination", never, { "totalItems": { "alias": "totalItems"; "required": true; "isSignal": true; }; "pageSize": { "alias": "pageSize"; "required": false; "isSignal": true; }; "pageIndex": { "alias": "pageIndex"; "required": false; "isSignal": true; }; }, { "pageChange": "pageChange"; "pageSize": "pageSizeChange"; "pageIndex": "pageIndexChange"; }, never, never, true, never>;
}
