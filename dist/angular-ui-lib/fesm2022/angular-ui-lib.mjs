import * as i0 from '@angular/core';
import { input, output, Component, Pipe, model, ContentChild, ViewChild, ChangeDetectionStrategy, Injectable, inject, DestroyRef, signal } from '@angular/core';
import * as i1$1 from '@angular/common';
import { NgTemplateOutlet, CommonModule } from '@angular/common';
import * as i1 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i2 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i4 from '@angular/material/progress-spinner';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import * as i3$1 from '@angular/material/sort';
import { MatSortModule, MatSort } from '@angular/material/sort';
import * as i2$2 from '@angular/material/table';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import * as i3 from '@angular/material/divider';
import { MatDividerModule } from '@angular/material/divider';
import * as i2$1 from '@angular/material/select';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i3$2 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i1$2 from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import * as i1$3 from '@angular/common/http';
import { SelectionModel } from '@angular/cdk/collections';

class ButtonComponent {
    config = input.required();
    onClick = output();
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: ButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.14", type: ButtonComponent, isStandalone: true, selector: "lib-button", inputs: { config: { classPropertyName: "config", publicName: "config", isSignal: true, isRequired: true, transformFunction: null } }, outputs: { onClick: "onClick" }, ngImport: i0, template: "@if (!config().link) {\r\n\t<button\r\n\t\tmat-button\r\n\t\t[disabled]=\"config().disabled\"\r\n\t\t[class.mat-mdc-raised-button]=\"config().variant === 'raised'\"\r\n\t\t[class.mat-mdc-outlined-button]=\"config().variant === 'stroked'\"\r\n\t\t[class.mat-mdc-unelevated-button]=\"config().variant === 'flat'\"\r\n\t\t[class.mat-mdc-icon-button]=\"config().variant === 'icon'\"\r\n\t\t[class.mat-mdc-fab]=\"config().variant === 'fab'\"\r\n\t\t[class.mat-mdc-mini-fab]=\"config().variant === 'mini-fab'\"\r\n\t\t[class.mat-mdc-extended-fab]=\"config().variant === 'extended-fab'\"\r\n\t\t(click)=\"onClick.emit()\"\r\n\t>\r\n\t\t<ng-container [ngTemplateOutlet]=\"buttonLabel\" />\r\n\t</button>\r\n} @else {\r\n\t<a\r\n\t\tmat-button\r\n\t\ttarget=\"_blank\"\r\n\t\t[href]=\"config().link\"\r\n\t\t[disabled]=\"config().disabled\"\r\n\t\t[class.mat-mdc-raised-button]=\"config().variant === 'raised'\"\r\n\t\t[class.mat-mdc-outlined-button]=\"config().variant === 'stroked'\"\r\n\t\t[class.mat-mdc-unelevated-button]=\"config().variant === 'flat'\"\r\n\t\t[class.mat-mdc-icon-button]=\"config().variant === 'icon'\"\r\n\t\t[class.mat-mdc-fab]=\"config().variant === 'fab'\"\r\n\t\t[class.mat-mdc-mini-fab]=\"config().variant === 'mini-fab'\"\r\n\t\t[class.mat-mdc-extended-fab]=\"config().variant === 'extended-fab'\"\r\n\t>\r\n\t\t<ng-container [ngTemplateOutlet]=\"buttonLabel\" />\r\n\t</a>\r\n}\r\n\r\n<ng-template #buttonLabel>\r\n\t@if (config().icon && config().iconPosition === 'start') {\r\n\t\t<mat-icon>{{ config().icon }}</mat-icon>\r\n\t}\r\n\r\n\t<span>{{ config().label }}</span>\r\n\r\n\t@if (config().icon && config().iconPosition === 'end') {\r\n\t\t<mat-icon>{{ config().icon }}</mat-icon>\r\n\t}\r\n</ng-template>\r\n", styles: [""], dependencies: [{ kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1.MatAnchor, selector: "a[mat-button], a[mat-raised-button], a[mat-flat-button], a[mat-stroked-button]", exportAs: ["matButton", "matAnchor"] }, { kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i2.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-button', imports: [NgTemplateOutlet, MatButtonModule, MatIconModule], template: "@if (!config().link) {\r\n\t<button\r\n\t\tmat-button\r\n\t\t[disabled]=\"config().disabled\"\r\n\t\t[class.mat-mdc-raised-button]=\"config().variant === 'raised'\"\r\n\t\t[class.mat-mdc-outlined-button]=\"config().variant === 'stroked'\"\r\n\t\t[class.mat-mdc-unelevated-button]=\"config().variant === 'flat'\"\r\n\t\t[class.mat-mdc-icon-button]=\"config().variant === 'icon'\"\r\n\t\t[class.mat-mdc-fab]=\"config().variant === 'fab'\"\r\n\t\t[class.mat-mdc-mini-fab]=\"config().variant === 'mini-fab'\"\r\n\t\t[class.mat-mdc-extended-fab]=\"config().variant === 'extended-fab'\"\r\n\t\t(click)=\"onClick.emit()\"\r\n\t>\r\n\t\t<ng-container [ngTemplateOutlet]=\"buttonLabel\" />\r\n\t</button>\r\n} @else {\r\n\t<a\r\n\t\tmat-button\r\n\t\ttarget=\"_blank\"\r\n\t\t[href]=\"config().link\"\r\n\t\t[disabled]=\"config().disabled\"\r\n\t\t[class.mat-mdc-raised-button]=\"config().variant === 'raised'\"\r\n\t\t[class.mat-mdc-outlined-button]=\"config().variant === 'stroked'\"\r\n\t\t[class.mat-mdc-unelevated-button]=\"config().variant === 'flat'\"\r\n\t\t[class.mat-mdc-icon-button]=\"config().variant === 'icon'\"\r\n\t\t[class.mat-mdc-fab]=\"config().variant === 'fab'\"\r\n\t\t[class.mat-mdc-mini-fab]=\"config().variant === 'mini-fab'\"\r\n\t\t[class.mat-mdc-extended-fab]=\"config().variant === 'extended-fab'\"\r\n\t>\r\n\t\t<ng-container [ngTemplateOutlet]=\"buttonLabel\" />\r\n\t</a>\r\n}\r\n\r\n<ng-template #buttonLabel>\r\n\t@if (config().icon && config().iconPosition === 'start') {\r\n\t\t<mat-icon>{{ config().icon }}</mat-icon>\r\n\t}\r\n\r\n\t<span>{{ config().label }}</span>\r\n\r\n\t@if (config().icon && config().iconPosition === 'end') {\r\n\t\t<mat-icon>{{ config().icon }}</mat-icon>\r\n\t}\r\n</ng-template>\r\n" }]
        }] });

/*
 *  * Author: Abdullah Umar Babsel
 *  * Date: 12/06/2025
 */
class CurrencyIntlPipe {
    transform(value, currency = 'USD', locale = 'en-US', minimumFractionDigits, maximumFractionDigits) {
        const options = {
            style: 'currency',
            currency,
            minimumFractionDigits,
            maximumFractionDigits,
        };
        // Remove undefined options
        Object.keys(options).forEach(key => options[key] === undefined &&
            delete options[key]);
        return new Intl.NumberFormat(locale, options).format(value);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: CurrencyIntlPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
    static ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "19.2.14", ngImport: i0, type: CurrencyIntlPipe, isStandalone: true, name: "currencyIntl" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: CurrencyIntlPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'currencyIntl',
                    standalone: true,
                }]
        }] });

class PaginationComponent {
    pageChange = output();
    pageSizeOptions = [5, 10, 25, 50];
    totalItems = input.required();
    pageSize = model(10);
    pageIndex = model(0);
    get totalPages() {
        return Math.ceil(this.totalItems() / this.pageSize());
    }
    get totalPagesArray() {
        return Array(this.totalPages)
            .fill(0)
            .map((_, i) => i);
    }
    get rangeStart() {
        return this.pageIndex() * this.pageSize() + 1;
    }
    get rangeEnd() {
        return Math.min((this.pageIndex() + 1) * this.pageSize(), this.totalItems());
    }
    ngOnInit() {
        this.emitChange();
    }
    onChangePageSize() {
        this.pageIndex.set(0);
        this.emitChange();
    }
    onPageChange() {
        this.emitChange();
    }
    nextPage() {
        if (this.pageIndex() < this.totalPages - 1) {
            this.pageIndex.set(this.pageIndex() + 1);
            this.emitChange();
        }
    }
    prevPage() {
        if (this.pageIndex() > 0) {
            this.pageIndex.set(this.pageIndex() - 1);
            this.emitChange();
        }
    }
    emitChange() {
        this.pageChange.emit({ pageIndex: this.pageIndex(), pageSize: this.pageSize() });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PaginationComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.14", type: PaginationComponent, isStandalone: true, selector: "lib-pagination", inputs: { totalItems: { classPropertyName: "totalItems", publicName: "totalItems", isSignal: true, isRequired: true, transformFunction: null }, pageSize: { classPropertyName: "pageSize", publicName: "pageSize", isSignal: true, isRequired: false, transformFunction: null }, pageIndex: { classPropertyName: "pageIndex", publicName: "pageIndex", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { pageChange: "pageChange", pageSize: "pageSizeChange", pageIndex: "pageIndexChange" }, ngImport: i0, template: "<div class=\"custom-paginator\">\r\n\t<div class=\"left\">\r\n\t\t<span class=\"label\">Items per page:</span>\r\n\t\t<mat-select [(value)]=\"pageSize\" (selectionChange)=\"onChangePageSize()\">\r\n\t\t\t@for (item of pageSizeOptions; track $index) {\r\n\t\t\t\t<mat-option [value]=\"item\">{{ item }}</mat-option>\r\n\t\t\t}\r\n\t\t</mat-select>\r\n\r\n\t\t<mat-divider [vertical]=\"true\" class=\"divider\" />\r\n\r\n\t\t<span class=\"label\"> {{ rangeStart }}-{{ rangeEnd }} of {{ totalItems() }} Item </span>\r\n\t</div>\r\n\r\n\t<div class=\"right\">\r\n\t\t<mat-divider [vertical]=\"true\" class=\"divider\" />\r\n\r\n\t\t<mat-select [(value)]=\"pageIndex\" (selectionChange)=\"onPageChange()\">\r\n\t\t\t@for (item of totalPagesArray; track $index) {\r\n\t\t\t\t<mat-option [value]=\"item\">{{ item + 1 }}</mat-option>\r\n\t\t\t}\r\n\t\t</mat-select>\r\n\t\t<span>of {{ totalPages }}</span>\r\n\r\n\t\t<mat-divider [vertical]=\"true\" class=\"divider\" />\r\n\r\n\t\t<button mat-icon-button (click)=\"prevPage()\" [disabled]=\"pageIndex() === 0\" class=\"arrow-icon\">\r\n\t\t\t<mat-icon>arrow_back</mat-icon>\r\n\t\t</button>\r\n\r\n\t\t<mat-divider [vertical]=\"true\" class=\"divider\" />\r\n\r\n\t\t<button\r\n\t\t\tmat-icon-button\r\n\t\t\t(click)=\"nextPage()\"\r\n\t\t\t[disabled]=\"pageIndex() >= totalPages - 1\"\r\n\t\t\tclass=\"arrow-icon\"\r\n\t\t>\r\n\t\t\t<mat-icon>arrow_forward</mat-icon>\r\n\t\t</button>\r\n\t</div>\r\n</div>\r\n", styles: [".custom-paginator{display:flex;justify-content:space-between;align-items:center;padding:0 16px}.custom-paginator .left,.custom-paginator .right{display:flex;align-items:center;gap:16px}.custom-paginator mat-select{width:40px}.custom-paginator .label{font-size:14px;color:#3f3f46}.custom-paginator .arrow-icon{margin-top:5px}.custom-paginator .divider{height:50px;border-right-color:#e0e0e0!important}\n"], dependencies: [{ kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i2$1.MatSelect, selector: "mat-select", inputs: ["aria-describedby", "panelClass", "disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth", "canSelectNullableOptions"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "component", type: i2$1.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i2.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "ngmodule", type: MatDividerModule }, { kind: "component", type: i3.MatDivider, selector: "mat-divider", inputs: ["vertical", "inset"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: PaginationComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-pagination', imports: [MatSelectModule, MatIconModule, MatDividerModule], template: "<div class=\"custom-paginator\">\r\n\t<div class=\"left\">\r\n\t\t<span class=\"label\">Items per page:</span>\r\n\t\t<mat-select [(value)]=\"pageSize\" (selectionChange)=\"onChangePageSize()\">\r\n\t\t\t@for (item of pageSizeOptions; track $index) {\r\n\t\t\t\t<mat-option [value]=\"item\">{{ item }}</mat-option>\r\n\t\t\t}\r\n\t\t</mat-select>\r\n\r\n\t\t<mat-divider [vertical]=\"true\" class=\"divider\" />\r\n\r\n\t\t<span class=\"label\"> {{ rangeStart }}-{{ rangeEnd }} of {{ totalItems() }} Item </span>\r\n\t</div>\r\n\r\n\t<div class=\"right\">\r\n\t\t<mat-divider [vertical]=\"true\" class=\"divider\" />\r\n\r\n\t\t<mat-select [(value)]=\"pageIndex\" (selectionChange)=\"onPageChange()\">\r\n\t\t\t@for (item of totalPagesArray; track $index) {\r\n\t\t\t\t<mat-option [value]=\"item\">{{ item + 1 }}</mat-option>\r\n\t\t\t}\r\n\t\t</mat-select>\r\n\t\t<span>of {{ totalPages }}</span>\r\n\r\n\t\t<mat-divider [vertical]=\"true\" class=\"divider\" />\r\n\r\n\t\t<button mat-icon-button (click)=\"prevPage()\" [disabled]=\"pageIndex() === 0\" class=\"arrow-icon\">\r\n\t\t\t<mat-icon>arrow_back</mat-icon>\r\n\t\t</button>\r\n\r\n\t\t<mat-divider [vertical]=\"true\" class=\"divider\" />\r\n\r\n\t\t<button\r\n\t\t\tmat-icon-button\r\n\t\t\t(click)=\"nextPage()\"\r\n\t\t\t[disabled]=\"pageIndex() >= totalPages - 1\"\r\n\t\t\tclass=\"arrow-icon\"\r\n\t\t>\r\n\t\t\t<mat-icon>arrow_forward</mat-icon>\r\n\t\t</button>\r\n\t</div>\r\n</div>\r\n", styles: [".custom-paginator{display:flex;justify-content:space-between;align-items:center;padding:0 16px}.custom-paginator .left,.custom-paginator .right{display:flex;align-items:center;gap:16px}.custom-paginator mat-select{width:40px}.custom-paginator .label{font-size:14px;color:#3f3f46}.custom-paginator .arrow-icon{margin-top:5px}.custom-paginator .divider{height:50px;border-right-color:#e0e0e0!important}\n"] }]
        }] });

class TableComponent {
    sortChange = output();
    pageChange = output();
    mouseOverChange = output();
    selectData = output();
    dataSource = new MatTableDataSource([]);
    tableConfig = input.required();
    sort;
    selectionTemplate;
    customTemplate;
    disableClick(event, tableKey) {
        (tableKey === 'action' || tableKey === 'selection') && event.stopPropagation();
    }
    displayValue(value) {
        return value !== null && value !== undefined ? value : '-';
    }
    getPropertyValue(obj, key) {
        if (!key)
            return obj;
        const props = key.split('.');
        for (let i = 0; i < props.length; i++) {
            if (obj === null || obj === undefined) {
                return 'N/A';
            }
            obj = obj[props[i]];
        }
        return obj !== undefined ? obj : null;
    }
    get pagedData() {
        const { dataSource, pageIndex, pageSize } = this.tableConfig();
        if (Array.isArray(dataSource)) {
            const start = pageIndex * pageSize;
            const end = start + pageSize;
            this.dataSource = new MatTableDataSource(dataSource.slice(start, end));
            this.dataSource.sort = this.sort;
        }
        return this.dataSource;
    }
    onPageChange(page) {
        if (!page)
            return;
        if (this.tableConfig().isHttpPagination()) {
            this.pageChange.emit(page);
            return;
        }
        this.tableConfig().pageIndex = page.pageIndex;
        this.tableConfig().pageSize = page.pageSize;
        this.pagedData;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: TableComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.14", type: TableComponent, isStandalone: true, selector: "lib-table", inputs: { tableConfig: { classPropertyName: "tableConfig", publicName: "tableConfig", isSignal: true, isRequired: true, transformFunction: null } }, outputs: { sortChange: "sortChange", pageChange: "pageChange", mouseOverChange: "mouseOverChange", selectData: "selectData" }, queries: [{ propertyName: "selectionTemplate", first: true, predicate: ["selectionTemplate"], descendants: true }, { propertyName: "customTemplate", first: true, predicate: ["customTemplate"], descendants: true }], viewQueries: [{ propertyName: "sort", first: true, predicate: MatSort, descendants: true }], ngImport: i0, template: "@if (tableConfig()) {\r\n\t<div\r\n\t\tclass=\"table-container\"\r\n\t\t[class.table-row]=\"tableConfig().isEmpty()\"\r\n\t\t[class.table-empty]=\"tableConfig().isEmpty()\"\r\n\t\t[class.loading]=\"tableConfig().isLoading()\"\r\n\t>\r\n\t\t<div class=\"table-wrapper\">\r\n\t\t\t<table\r\n\t\t\t\tmatSort\r\n\t\t\t\tmatSortDisableClear\r\n\t\t\t\tmat-table\r\n\t\t\t\tclass=\"table\"\r\n\t\t\t\t[class]=\"tableConfig().tableClass\"\r\n\t\t\t\t[dataSource]=\"pagedData\"\r\n\t\t\t\t[matSortActive]=\"\r\n\t\t\t\t\ttableConfig().isSorter() ? tableConfig().sortKey || tableConfig().dataKey[0] : ''\r\n\t\t\t\t\"\r\n\t\t\t\t[matSortDirection]=\"tableConfig().sortOrder\"\r\n\t\t\t\t(matSortChange)=\"sortChange.emit($event)\"\r\n\t\t\t>\r\n\t\t\t\t<tr mat-header-row class=\"table-header\" *matHeaderRowDef=\"tableConfig().dataKey\"></tr>\r\n\r\n\t\t\t\t<tr\r\n\t\t\t\t\tmat-row\r\n\t\t\t\t\tclass=\"table-row\"\r\n\t\t\t\t\t*matRowDef=\"let row; columns: tableConfig().dataKey; let rowIndex = index\"\r\n\t\t\t\t\t[class.table-row-selected]=\"tableConfig().isSelected(row)\"\r\n\t\t\t\t\t(click)=\"selectData.emit(row)\"\r\n\t\t\t\t\t(mouseleave)=\"mouseOverChange.emit(null)\"\r\n\t\t\t\t\t(mouseover)=\"mouseOverChange.emit(row)\"\r\n\t\t\t\t></tr>\r\n\r\n\t\t\t\t@for (tableKey of tableConfig().dataKey; track tableKey; let index = $index) {\r\n\t\t\t\t\t<ng-container [matColumnDef]=\"tableKey\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef>\r\n\t\t\t\t\t\t\t@if (tableKey === 'selection') {\r\n\t\t\t\t\t\t\t\t<ng-container [ngTemplateOutlet]=\"selectionTemplate\"> </ng-container>\r\n\t\t\t\t\t\t\t} @else {\r\n\t\t\t\t\t\t\t\t<span\r\n\t\t\t\t\t\t\t\t\tclass=\"table-header\"\r\n\t\t\t\t\t\t\t\t\tmat-sort-header\r\n\t\t\t\t\t\t\t\t\t[disableClear]=\"true\"\r\n\t\t\t\t\t\t\t\t\t[class.tw-font-normal]=\"!tableConfig().isSorter()\"\r\n\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t{{ tableConfig().dataLabel[index] }}\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t</th>\r\n\r\n\t\t\t\t\t\t<td\r\n\t\t\t\t\t\t\tmat-cell\r\n\t\t\t\t\t\t\t*matCellDef=\"let data; let i = index; let rowIndex = index\"\r\n\t\t\t\t\t\t\t(click)=\"disableClick($event, tableKey)\"\r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t<div class=\"table-row-cell\">\r\n\t\t\t\t\t\t\t\t@switch (tableConfig().dataType[tableKey].type) {\r\n\t\t\t\t\t\t\t\t\t@case ('date') {\r\n\t\t\t\t\t\t\t\t\t\t{{\r\n\t\t\t\t\t\t\t\t\t\t\tgetPropertyValue(data, tableKey)\r\n\t\t\t\t\t\t\t\t\t\t\t\t| date: tableConfig().dataType[tableKey].format\r\n\t\t\t\t\t\t\t\t\t\t}}\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t@case ('number') {\r\n\t\t\t\t\t\t\t\t\t\t{{ getPropertyValue(data, tableKey) }}\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t@case ('title') {\r\n\t\t\t\t\t\t\t\t\t\t{{ getPropertyValue(data, tableKey) | titlecase }}\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t@case ('currency') {\r\n\t\t\t\t\t\t\t\t\t\t<!-- {{ 123456.789 | currencyIntl:'JPY':'ja-JP':0:0 }} -->\r\n\t\t\t\t\t\t\t\t\t\t{{\r\n\t\t\t\t\t\t\t\t\t\t\tgetPropertyValue(data, tableKey) || 0\r\n\t\t\t\t\t\t\t\t\t\t\t\t| currencyIntl\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t: tableConfig().dataType[tableKey].currency\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t: tableConfig().dataType[tableKey].locale\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t: tableConfig().dataType[tableKey].minimumFractionDigits\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t: tableConfig().dataType[tableKey].maximumFractionDigits\r\n\t\t\t\t\t\t\t\t\t\t}}\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t@case ('custom') {\r\n\t\t\t\t\t\t\t\t\t\t<ng-container\r\n\t\t\t\t\t\t\t\t\t\t\t[ngTemplateOutlet]=\"customTemplate\"\r\n\t\t\t\t\t\t\t\t\t\t\t[ngTemplateOutletContext]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\tdata: data,\r\n\t\t\t\t\t\t\t\t\t\t\t\tkey: tableKey,\r\n\t\t\t\t\t\t\t\t\t\t\t\tindex: rowIndex,\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t@default {\r\n\t\t\t\t\t\t\t\t\t\t{{ displayValue(getPropertyValue(data, tableKey)) }}\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t}\r\n\r\n\t\t\t\t@if (tableConfig().isEmpty()) {\r\n\t\t\t\t\t<ng-container>\r\n\t\t\t\t\t\t<tr\r\n\t\t\t\t\t\t\tmat-footer-row\r\n\t\t\t\t\t\t\t*matFooterRowDef=\"['nodata']\"\r\n\t\t\t\t\t\t\t[hidden]=\"(tableConfig().dataSource || []).length\"\r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t<span> No Data Available </span>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"nodata\">\r\n\t\t\t\t\t\t<td\r\n\t\t\t\t\t\t\tmat-footer-row\r\n\t\t\t\t\t\t\t*matFooterCellDef\r\n\t\t\t\t\t\t\tclass=\"border-empty\"\r\n\t\t\t\t\t\t\t[colSpan]=\"(tableConfig().dataKey || []).length\"\r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\tNo Data Available\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t}\r\n\t\t\t</table>\r\n\t\t</div>\r\n\r\n\t\t@if (!tableConfig().isEmpty() && tableConfig().isPagination()) {\r\n\t\t\t<div class=\"table-pagination\">\r\n\t\t\t\t<lib-pagination\r\n\t\t\t\t\t[pageIndex]=\"tableConfig().pageIndex\"\r\n\t\t\t\t\t[pageSize]=\"tableConfig().pageSize\"\r\n\t\t\t\t\t[totalItems]=\"tableConfig().dataTotal\"\r\n\t\t\t\t\t(pageChange)=\"onPageChange($event)\"\r\n\t\t\t\t/>\r\n\t\t\t</div>\r\n\t\t}\r\n\r\n\t\t@if (tableConfig().isLoading()) {\r\n\t\t\t<div class=\"spinner-container\">\r\n\t\t\t\t<mat-progress-spinner color=\"primary\" mode=\"indeterminate\"></mat-progress-spinner>\r\n\t\t\t</div>\r\n\t\t}\r\n\t</div>\r\n}\r\n", styles: [".table-container{position:relative;display:grid;border:1px solid #d4d4d8;border-radius:16px}.table-container .table-wrapper{overflow-x:auto;border-top-right-radius:16px;border-top-left-radius:16px}.table-container.loading{min-height:30vh}.table-container .table{height:fit-content;border-collapse:separate}.table-container .table .table-header{background:#f9f9fb}.table-container .table .table-row{min-height:0;background:#fff;cursor:pointer}.table-container .table .table-row td{max-width:400px;border-bottom:.5px solid #d4d4d8}.table-container .table .table-row:first-child td{border-top:1px solid #d4d4d8}.table-container .table .table-row:hover{background:#e4e4e8}.table-container .table .table-row .table-row-cell{display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical;font-weight:400;color:#09090b}.table-container .table .table-row-selected{background:#91466a0d}.table-container .table .table-row-selected:first-child{border-bottom:unset}.table-container .table .table-row-selected:first-child td:not(:first-child):not(:last-child){border:2px solid var(--mat-sys-primary);border-left:unset;border-right:unset;border-bottom:2px solid var(--mat-sys-primary);border-radius:unset}.table-container .table .table-row-selected:first-child td:first-child{border:2px solid var(--mat-sys-primary);border-right:unset;border-bottom:2px solid var(--mat-sys-primary)}.table-container .table .table-row-selected:first-child td:last-child{border:2px solid var(--mat-sys-primary);border-left:unset;border-bottom:2px solid var(--mat-sys-primary)}.table-container .table .table-row-selected:not(:first-child):not(:last-child){border-left:2px solid var(--mat-sys-primary);border-right:2px solid var(--mat-sys-primary)}.table-container .table .table-row-selected:last-child{border:2px solid var(--mat-sys-primary)}.table-container .table .table-row-selected:last-child td:not(:first-child):not(:last-child){border:2px solid var(--mat-sys-primary);border-left:unset;border-right:unset}.table-container .table .table-row-selected:last-child td:first-child{border:2px solid var(--mat-sys-primary);border-right:unset}.table-container .table .table-row-selected:last-child td:last-child{border:2px solid var(--mat-sys-primary);border-left:unset}.table-container .table .table-row-selected td:not(:first-child):not(:last-child){border-top:2px solid var(--mat-sys-primary);border-bottom:2px solid var(--mat-sys-primary)}.table-container .table .table-row-selected td:first-child{border:2px solid var(--mat-sys-primary);border-left:2px solid var(--mat-sys-primary);border-right:unset}.table-container .table .table-row-selected td:last-child{border:2px solid var(--mat-sys-primary);border-right:2px solid var(--mat-sys-primary);border-left:unset}.table-container .spinner-container{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;padding-top:20px}.border-empty{border-top:1px solid rgba(143,134,147,.3);border-bottom:1px solid rgba(143,134,147,.3)}\n"], dependencies: [{ kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "ngmodule", type: CommonModule }, { kind: "pipe", type: i1$1.TitleCasePipe, name: "titlecase" }, { kind: "pipe", type: i1$1.DatePipe, name: "date" }, { kind: "pipe", type: CurrencyIntlPipe, name: "currencyIntl" }, { kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i2$2.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i2$2.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i2$2.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i2$2.MatColumnDef, selector: "[matColumnDef]", inputs: ["matColumnDef"] }, { kind: "directive", type: i2$2.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i2$2.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i2$2.MatFooterCellDef, selector: "[matFooterCellDef]" }, { kind: "directive", type: i2$2.MatFooterRowDef, selector: "[matFooterRowDef]", inputs: ["matFooterRowDef", "matFooterRowDefSticky"] }, { kind: "directive", type: i2$2.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i2$2.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i2$2.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i2$2.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "component", type: i2$2.MatFooterRow, selector: "mat-footer-row, tr[mat-footer-row]", exportAs: ["matFooterRow"] }, { kind: "ngmodule", type: MatSortModule }, { kind: "directive", type: i3$1.MatSort, selector: "[matSort]", inputs: ["matSortActive", "matSortStart", "matSortDirection", "matSortDisableClear", "matSortDisabled"], outputs: ["matSortChange"], exportAs: ["matSort"] }, { kind: "component", type: i3$1.MatSortHeader, selector: "[mat-sort-header]", inputs: ["mat-sort-header", "arrowPosition", "start", "disabled", "sortActionDescription", "disableClear"], exportAs: ["matSortHeader"] }, { kind: "ngmodule", type: MatProgressSpinnerModule }, { kind: "component", type: i4.MatProgressSpinner, selector: "mat-progress-spinner, mat-spinner", inputs: ["color", "mode", "value", "diameter", "strokeWidth"], exportAs: ["matProgressSpinner"] }, { kind: "component", type: PaginationComponent, selector: "lib-pagination", inputs: ["totalItems", "pageSize", "pageIndex"], outputs: ["pageChange", "pageSizeChange", "pageIndexChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: TableComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-table', imports: [
                        NgTemplateOutlet,
                        CommonModule,
                        CurrencyIntlPipe,
                        MatTableModule,
                        MatSortModule,
                        MatProgressSpinnerModule,
                        PaginationComponent,
                    ], changeDetection: ChangeDetectionStrategy.OnPush, template: "@if (tableConfig()) {\r\n\t<div\r\n\t\tclass=\"table-container\"\r\n\t\t[class.table-row]=\"tableConfig().isEmpty()\"\r\n\t\t[class.table-empty]=\"tableConfig().isEmpty()\"\r\n\t\t[class.loading]=\"tableConfig().isLoading()\"\r\n\t>\r\n\t\t<div class=\"table-wrapper\">\r\n\t\t\t<table\r\n\t\t\t\tmatSort\r\n\t\t\t\tmatSortDisableClear\r\n\t\t\t\tmat-table\r\n\t\t\t\tclass=\"table\"\r\n\t\t\t\t[class]=\"tableConfig().tableClass\"\r\n\t\t\t\t[dataSource]=\"pagedData\"\r\n\t\t\t\t[matSortActive]=\"\r\n\t\t\t\t\ttableConfig().isSorter() ? tableConfig().sortKey || tableConfig().dataKey[0] : ''\r\n\t\t\t\t\"\r\n\t\t\t\t[matSortDirection]=\"tableConfig().sortOrder\"\r\n\t\t\t\t(matSortChange)=\"sortChange.emit($event)\"\r\n\t\t\t>\r\n\t\t\t\t<tr mat-header-row class=\"table-header\" *matHeaderRowDef=\"tableConfig().dataKey\"></tr>\r\n\r\n\t\t\t\t<tr\r\n\t\t\t\t\tmat-row\r\n\t\t\t\t\tclass=\"table-row\"\r\n\t\t\t\t\t*matRowDef=\"let row; columns: tableConfig().dataKey; let rowIndex = index\"\r\n\t\t\t\t\t[class.table-row-selected]=\"tableConfig().isSelected(row)\"\r\n\t\t\t\t\t(click)=\"selectData.emit(row)\"\r\n\t\t\t\t\t(mouseleave)=\"mouseOverChange.emit(null)\"\r\n\t\t\t\t\t(mouseover)=\"mouseOverChange.emit(row)\"\r\n\t\t\t\t></tr>\r\n\r\n\t\t\t\t@for (tableKey of tableConfig().dataKey; track tableKey; let index = $index) {\r\n\t\t\t\t\t<ng-container [matColumnDef]=\"tableKey\">\r\n\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef>\r\n\t\t\t\t\t\t\t@if (tableKey === 'selection') {\r\n\t\t\t\t\t\t\t\t<ng-container [ngTemplateOutlet]=\"selectionTemplate\"> </ng-container>\r\n\t\t\t\t\t\t\t} @else {\r\n\t\t\t\t\t\t\t\t<span\r\n\t\t\t\t\t\t\t\t\tclass=\"table-header\"\r\n\t\t\t\t\t\t\t\t\tmat-sort-header\r\n\t\t\t\t\t\t\t\t\t[disableClear]=\"true\"\r\n\t\t\t\t\t\t\t\t\t[class.tw-font-normal]=\"!tableConfig().isSorter()\"\r\n\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t{{ tableConfig().dataLabel[index] }}\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t</th>\r\n\r\n\t\t\t\t\t\t<td\r\n\t\t\t\t\t\t\tmat-cell\r\n\t\t\t\t\t\t\t*matCellDef=\"let data; let i = index; let rowIndex = index\"\r\n\t\t\t\t\t\t\t(click)=\"disableClick($event, tableKey)\"\r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t<div class=\"table-row-cell\">\r\n\t\t\t\t\t\t\t\t@switch (tableConfig().dataType[tableKey].type) {\r\n\t\t\t\t\t\t\t\t\t@case ('date') {\r\n\t\t\t\t\t\t\t\t\t\t{{\r\n\t\t\t\t\t\t\t\t\t\t\tgetPropertyValue(data, tableKey)\r\n\t\t\t\t\t\t\t\t\t\t\t\t| date: tableConfig().dataType[tableKey].format\r\n\t\t\t\t\t\t\t\t\t\t}}\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t@case ('number') {\r\n\t\t\t\t\t\t\t\t\t\t{{ getPropertyValue(data, tableKey) }}\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t@case ('title') {\r\n\t\t\t\t\t\t\t\t\t\t{{ getPropertyValue(data, tableKey) | titlecase }}\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t@case ('currency') {\r\n\t\t\t\t\t\t\t\t\t\t<!-- {{ 123456.789 | currencyIntl:'JPY':'ja-JP':0:0 }} -->\r\n\t\t\t\t\t\t\t\t\t\t{{\r\n\t\t\t\t\t\t\t\t\t\t\tgetPropertyValue(data, tableKey) || 0\r\n\t\t\t\t\t\t\t\t\t\t\t\t| currencyIntl\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t: tableConfig().dataType[tableKey].currency\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t: tableConfig().dataType[tableKey].locale\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t: tableConfig().dataType[tableKey].minimumFractionDigits\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t: tableConfig().dataType[tableKey].maximumFractionDigits\r\n\t\t\t\t\t\t\t\t\t\t}}\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t@case ('custom') {\r\n\t\t\t\t\t\t\t\t\t\t<ng-container\r\n\t\t\t\t\t\t\t\t\t\t\t[ngTemplateOutlet]=\"customTemplate\"\r\n\t\t\t\t\t\t\t\t\t\t\t[ngTemplateOutletContext]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\tdata: data,\r\n\t\t\t\t\t\t\t\t\t\t\t\tkey: tableKey,\r\n\t\t\t\t\t\t\t\t\t\t\t\tindex: rowIndex,\r\n\t\t\t\t\t\t\t\t\t\t\t}\"\r\n\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t@default {\r\n\t\t\t\t\t\t\t\t\t\t{{ displayValue(getPropertyValue(data, tableKey)) }}\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t}\r\n\r\n\t\t\t\t@if (tableConfig().isEmpty()) {\r\n\t\t\t\t\t<ng-container>\r\n\t\t\t\t\t\t<tr\r\n\t\t\t\t\t\t\tmat-footer-row\r\n\t\t\t\t\t\t\t*matFooterRowDef=\"['nodata']\"\r\n\t\t\t\t\t\t\t[hidden]=\"(tableConfig().dataSource || []).length\"\r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t<span> No Data Available </span>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"nodata\">\r\n\t\t\t\t\t\t<td\r\n\t\t\t\t\t\t\tmat-footer-row\r\n\t\t\t\t\t\t\t*matFooterCellDef\r\n\t\t\t\t\t\t\tclass=\"border-empty\"\r\n\t\t\t\t\t\t\t[colSpan]=\"(tableConfig().dataKey || []).length\"\r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\tNo Data Available\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t}\r\n\t\t\t</table>\r\n\t\t</div>\r\n\r\n\t\t@if (!tableConfig().isEmpty() && tableConfig().isPagination()) {\r\n\t\t\t<div class=\"table-pagination\">\r\n\t\t\t\t<lib-pagination\r\n\t\t\t\t\t[pageIndex]=\"tableConfig().pageIndex\"\r\n\t\t\t\t\t[pageSize]=\"tableConfig().pageSize\"\r\n\t\t\t\t\t[totalItems]=\"tableConfig().dataTotal\"\r\n\t\t\t\t\t(pageChange)=\"onPageChange($event)\"\r\n\t\t\t\t/>\r\n\t\t\t</div>\r\n\t\t}\r\n\r\n\t\t@if (tableConfig().isLoading()) {\r\n\t\t\t<div class=\"spinner-container\">\r\n\t\t\t\t<mat-progress-spinner color=\"primary\" mode=\"indeterminate\"></mat-progress-spinner>\r\n\t\t\t</div>\r\n\t\t}\r\n\t</div>\r\n}\r\n", styles: [".table-container{position:relative;display:grid;border:1px solid #d4d4d8;border-radius:16px}.table-container .table-wrapper{overflow-x:auto;border-top-right-radius:16px;border-top-left-radius:16px}.table-container.loading{min-height:30vh}.table-container .table{height:fit-content;border-collapse:separate}.table-container .table .table-header{background:#f9f9fb}.table-container .table .table-row{min-height:0;background:#fff;cursor:pointer}.table-container .table .table-row td{max-width:400px;border-bottom:.5px solid #d4d4d8}.table-container .table .table-row:first-child td{border-top:1px solid #d4d4d8}.table-container .table .table-row:hover{background:#e4e4e8}.table-container .table .table-row .table-row-cell{display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical;font-weight:400;color:#09090b}.table-container .table .table-row-selected{background:#91466a0d}.table-container .table .table-row-selected:first-child{border-bottom:unset}.table-container .table .table-row-selected:first-child td:not(:first-child):not(:last-child){border:2px solid var(--mat-sys-primary);border-left:unset;border-right:unset;border-bottom:2px solid var(--mat-sys-primary);border-radius:unset}.table-container .table .table-row-selected:first-child td:first-child{border:2px solid var(--mat-sys-primary);border-right:unset;border-bottom:2px solid var(--mat-sys-primary)}.table-container .table .table-row-selected:first-child td:last-child{border:2px solid var(--mat-sys-primary);border-left:unset;border-bottom:2px solid var(--mat-sys-primary)}.table-container .table .table-row-selected:not(:first-child):not(:last-child){border-left:2px solid var(--mat-sys-primary);border-right:2px solid var(--mat-sys-primary)}.table-container .table .table-row-selected:last-child{border:2px solid var(--mat-sys-primary)}.table-container .table .table-row-selected:last-child td:not(:first-child):not(:last-child){border:2px solid var(--mat-sys-primary);border-left:unset;border-right:unset}.table-container .table .table-row-selected:last-child td:first-child{border:2px solid var(--mat-sys-primary);border-right:unset}.table-container .table .table-row-selected:last-child td:last-child{border:2px solid var(--mat-sys-primary);border-left:unset}.table-container .table .table-row-selected td:not(:first-child):not(:last-child){border-top:2px solid var(--mat-sys-primary);border-bottom:2px solid var(--mat-sys-primary)}.table-container .table .table-row-selected td:first-child{border:2px solid var(--mat-sys-primary);border-left:2px solid var(--mat-sys-primary);border-right:unset}.table-container .table .table-row-selected td:last-child{border:2px solid var(--mat-sys-primary);border-right:2px solid var(--mat-sys-primary);border-left:unset}.table-container .spinner-container{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;padding-top:20px}.border-empty{border-top:1px solid rgba(143,134,147,.3);border-bottom:1px solid rgba(143,134,147,.3)}\n"] }]
        }], propDecorators: { sort: [{
                type: ViewChild,
                args: [MatSort]
            }], selectionTemplate: [{
                type: ContentChild,
                args: ['selectionTemplate']
            }], customTemplate: [{
                type: ContentChild,
                args: ['customTemplate']
            }] } });

class FormStore {
    getControl(control) {
        return control;
    }
    getFormArray(formArray) {
        return formArray.controls;
    }
    addControl(formArray, initFunction) {
        formArray.push(initFunction());
    }
    removeControl(formArray, index) {
        formArray.removeAt(index);
    }
    isValid(control) {
        if (!control)
            return false;
        return control.invalid && (control.dirty || control.touched);
    }
    getErrorMessage(control) {
        if (!control || !control.errors)
            return null;
        const errors = control.errors;
        console.log('Control errors:', errors);
        if (errors['required']) {
            console.log('Required field error:', control);
            return 'This field is required.';
        }
        if (errors['email']) {
            return 'Please enter a valid email address.';
        }
        if (errors['minlength']) {
            return `Minimum length is ${errors['minlength'].requiredLength}.`;
        }
        if (errors['maxlength']) {
            console.log('Max length error:', errors['maxlength']);
            return `Maximum length is ${errors['maxlength'].requiredLength}.`;
        }
        if (errors['min']) {
            return `Minimum value is ${errors['min'].min}.`;
        }
        if (errors['max']) {
            return `Maximum value is ${errors['max'].max}.`;
        }
        if (errors['pattern']) {
            return 'Invalid format.';
        }
        // Add more error mappings as needed
        return 'Invalid field.';
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: FormStore, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: FormStore, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: FormStore, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });

class TextboxComponent {
    formStore = inject(FormStore);
    onInput = output();
    inputConfig = input.required();
    control = input.required();
    matPrefixRef;
    matSuffixRef;
    matTextPrefixRef;
    matTextSuffixRef;
    onInputChange(event) {
        const inputValue = event.target.value;
        let timerId = null;
        clearTimeout(timerId);
        timerId = setTimeout(() => this.onInput.emit(inputValue), 600);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: TextboxComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.14", type: TextboxComponent, isStandalone: true, selector: "lib-textbox", inputs: { inputConfig: { classPropertyName: "inputConfig", publicName: "inputConfig", isSignal: true, isRequired: true, transformFunction: null }, control: { classPropertyName: "control", publicName: "control", isSignal: true, isRequired: true, transformFunction: null } }, outputs: { onInput: "onInput" }, queries: [{ propertyName: "matPrefixRef", first: true, predicate: ["matPrefixRef"], descendants: true }, { propertyName: "matSuffixRef", first: true, predicate: ["matSuffixRef"], descendants: true }, { propertyName: "matTextPrefixRef", first: true, predicate: ["matTextPrefixRef"], descendants: true }, { propertyName: "matTextSuffixRef", first: true, predicate: ["matTextSuffixRef"], descendants: true }], ngImport: i0, template: "<mat-form-field [appearance]=\"inputConfig().appearance\" class=\"textbox-field\">\r\n\t<mat-label>{{ inputConfig().label }}</mat-label>\r\n\t<input\r\n\t\tmatInput\r\n\t\t[formControl]=\"control()\"\r\n\t\t[placeholder]=\"inputConfig().placeholder\"\r\n\t\t[maxlength]=\"inputConfig().limit || null\"\r\n\t\t(input)=\"onInputChange($event)\"\r\n\t/>\r\n\r\n\t@if (matPrefixRef) {\r\n\t\t<ng-container matPrefix [ngTemplateOutlet]=\"matPrefixRef\"> </ng-container>\r\n\t}\r\n\t@if (matSuffixRef) {\r\n\t\t<ng-container matSuffix [ngTemplateOutlet]=\"matSuffixRef\"> </ng-container>\r\n\t}\r\n\t@if (matTextPrefixRef) {\r\n\t\t<ng-container matTextPrefix [ngTemplateOutlet]=\"matTextPrefixRef\"> </ng-container>\r\n\t}\r\n\t@if (matTextSuffixRef) {\r\n\t\t<ng-container matTextSuffix [ngTemplateOutlet]=\"matTextSuffixRef\"> </ng-container>\r\n\t}\r\n\r\n\t@if (inputConfig().hint) {\r\n\t\t<mat-hint align=\"end\">{{ inputConfig().hint }}</mat-hint>\r\n\t}\r\n\r\n\t@if (inputConfig().limit) {\r\n\t\t<mat-hint align=\"end\">{{ control().value.length }} / {{ inputConfig().limit }}</mat-hint>\r\n\t}\r\n\r\n\t@if (formStore.isValid(control())) {\r\n\t\t<mat-error align=\"end\">{{ formStore.getErrorMessage(control()) }}</mat-error>\r\n\t}\r\n</mat-form-field>\r\n", styles: [".textbox-field.mat-mdc-form-field{width:100%}\n"], dependencies: [{ kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1$2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1$2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$2.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1$2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2$1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2$1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i2$1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i2$1.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i2$1.MatPrefix, selector: "[matPrefix], [matIconPrefix], [matTextPrefix]", inputs: ["matTextPrefix"] }, { kind: "directive", type: i2$1.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i3$2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly", "disabledInteractive"], exportAs: ["matInput"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: TextboxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-textbox', imports: [NgTemplateOutlet, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<mat-form-field [appearance]=\"inputConfig().appearance\" class=\"textbox-field\">\r\n\t<mat-label>{{ inputConfig().label }}</mat-label>\r\n\t<input\r\n\t\tmatInput\r\n\t\t[formControl]=\"control()\"\r\n\t\t[placeholder]=\"inputConfig().placeholder\"\r\n\t\t[maxlength]=\"inputConfig().limit || null\"\r\n\t\t(input)=\"onInputChange($event)\"\r\n\t/>\r\n\r\n\t@if (matPrefixRef) {\r\n\t\t<ng-container matPrefix [ngTemplateOutlet]=\"matPrefixRef\"> </ng-container>\r\n\t}\r\n\t@if (matSuffixRef) {\r\n\t\t<ng-container matSuffix [ngTemplateOutlet]=\"matSuffixRef\"> </ng-container>\r\n\t}\r\n\t@if (matTextPrefixRef) {\r\n\t\t<ng-container matTextPrefix [ngTemplateOutlet]=\"matTextPrefixRef\"> </ng-container>\r\n\t}\r\n\t@if (matTextSuffixRef) {\r\n\t\t<ng-container matTextSuffix [ngTemplateOutlet]=\"matTextSuffixRef\"> </ng-container>\r\n\t}\r\n\r\n\t@if (inputConfig().hint) {\r\n\t\t<mat-hint align=\"end\">{{ inputConfig().hint }}</mat-hint>\r\n\t}\r\n\r\n\t@if (inputConfig().limit) {\r\n\t\t<mat-hint align=\"end\">{{ control().value.length }} / {{ inputConfig().limit }}</mat-hint>\r\n\t}\r\n\r\n\t@if (formStore.isValid(control())) {\r\n\t\t<mat-error align=\"end\">{{ formStore.getErrorMessage(control()) }}</mat-error>\r\n\t}\r\n</mat-form-field>\r\n", styles: [".textbox-field.mat-mdc-form-field{width:100%}\n"] }]
        }], propDecorators: { matPrefixRef: [{
                type: ContentChild,
                args: ['matPrefixRef']
            }], matSuffixRef: [{
                type: ContentChild,
                args: ['matSuffixRef']
            }], matTextPrefixRef: [{
                type: ContentChild,
                args: ['matTextPrefixRef']
            }], matTextSuffixRef: [{
                type: ContentChild,
                args: ['matTextSuffixRef']
            }] } });

class TextareaComponent {
    formStore = inject(FormStore);
    onInput = output();
    inputConfig = input.required();
    control = input.required();
    onInputChange(event) {
        const inputValue = event.target.value;
        let timerId = null;
        clearTimeout(timerId);
        timerId = setTimeout(() => this.onInput.emit(inputValue), 600);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: TextareaComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.14", type: TextareaComponent, isStandalone: true, selector: "lib-textarea", inputs: { inputConfig: { classPropertyName: "inputConfig", publicName: "inputConfig", isSignal: true, isRequired: true, transformFunction: null }, control: { classPropertyName: "control", publicName: "control", isSignal: true, isRequired: true, transformFunction: null } }, outputs: { onInput: "onInput" }, ngImport: i0, template: "<mat-form-field [appearance]=\"inputConfig().appearance\" class=\"textarea-field\">\r\n\t<mat-label>{{ inputConfig().label }}</mat-label>\r\n\t<textarea\r\n\t\tmatInput\r\n\t\t[formControl]=\"control()\"\r\n\t\t[rows]=\"inputConfig().rows\"\r\n\t\t[placeholder]=\"inputConfig().placeholder\"\r\n\t\t[maxlength]=\"inputConfig().limit || null\"\r\n\t\t(input)=\"onInputChange($event)\"\r\n\t></textarea>\r\n\r\n\t@if (inputConfig().hint) {\r\n\t\t<mat-hint align=\"end\">{{ inputConfig().hint }}</mat-hint>\r\n\t}\r\n\r\n\t@if (inputConfig().limit) {\r\n\t\t<mat-hint align=\"end\">{{ control().value.length }} / {{ inputConfig().limit }}</mat-hint>\r\n\t}\r\n\r\n\t@if (formStore.isValid(control())) {\r\n\t\t<mat-error align=\"end\">{{ formStore.getErrorMessage(control()) }}</mat-error>\r\n\t}\r\n</mat-form-field>\r\n", styles: [".textarea-field.mat-mdc-form-field{width:100%}\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1$2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1$2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$2.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1$2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2$1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2$1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i2$1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i2$1.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i3$2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly", "disabledInteractive"], exportAs: ["matInput"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: TextareaComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-textarea', imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<mat-form-field [appearance]=\"inputConfig().appearance\" class=\"textarea-field\">\r\n\t<mat-label>{{ inputConfig().label }}</mat-label>\r\n\t<textarea\r\n\t\tmatInput\r\n\t\t[formControl]=\"control()\"\r\n\t\t[rows]=\"inputConfig().rows\"\r\n\t\t[placeholder]=\"inputConfig().placeholder\"\r\n\t\t[maxlength]=\"inputConfig().limit || null\"\r\n\t\t(input)=\"onInputChange($event)\"\r\n\t></textarea>\r\n\r\n\t@if (inputConfig().hint) {\r\n\t\t<mat-hint align=\"end\">{{ inputConfig().hint }}</mat-hint>\r\n\t}\r\n\r\n\t@if (inputConfig().limit) {\r\n\t\t<mat-hint align=\"end\">{{ control().value.length }} / {{ inputConfig().limit }}</mat-hint>\r\n\t}\r\n\r\n\t@if (formStore.isValid(control())) {\r\n\t\t<mat-error align=\"end\">{{ formStore.getErrorMessage(control()) }}</mat-error>\r\n\t}\r\n</mat-form-field>\r\n", styles: [".textarea-field.mat-mdc-form-field{width:100%}\n"] }]
        }] });

class DropdownComponent {
    formStore = inject(FormStore);
    onSelection = output();
    inputConfig = input.required();
    control = input.required();
    onSelectionChange(event) {
        this.onSelection.emit(event.value);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: DropdownComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.2.14", type: DropdownComponent, isStandalone: true, selector: "lib-dropdown", inputs: { inputConfig: { classPropertyName: "inputConfig", publicName: "inputConfig", isSignal: true, isRequired: true, transformFunction: null }, control: { classPropertyName: "control", publicName: "control", isSignal: true, isRequired: true, transformFunction: null } }, outputs: { onSelection: "onSelection" }, ngImport: i0, template: "<mat-form-field [appearance]=\"inputConfig().appearance\" class=\"dropdown-field\">\r\n\t<mat-label>{{ inputConfig().label }}</mat-label>\r\n\t<mat-select\r\n\t\t[formControl]=\"control()\"\r\n\t\t[placeholder]=\"inputConfig().placeholder\"\r\n\t\t[multiple]=\"inputConfig().isMultiple\"\r\n\t\t(selectionChange)=\"onSelectionChange($event)\"\r\n\t>\r\n\t\t@if (inputConfig().isMultiple) {\r\n\t\t\t<mat-select-trigger>\r\n\t\t\t\t{{\r\n\t\t\t\t\tcontrol().value\r\n\t\t\t\t\t\t? typeof control().value?.at(0) === 'object'\r\n\t\t\t\t\t\t\t? control().value.at(0)[inputConfig().keyLabel]\r\n\t\t\t\t\t\t\t: control().value.at(0)\r\n\t\t\t\t\t\t: ''\r\n\t\t\t\t}}\r\n\t\t\t\t@if (control().value && (control().value?.length || 0) > 1) {\r\n\t\t\t\t\t<span>\r\n\t\t\t\t\t\t(+{{ (control().value?.length || 0) - 1 }}\r\n\t\t\t\t\t\t{{ control().value?.length === 2 ? 'other' : 'others' }})\r\n\t\t\t\t\t</span>\r\n\t\t\t\t}\r\n\t\t\t</mat-select-trigger>\r\n\t\t}\r\n\t\t@for (option of inputConfig().options; track option) {\r\n\t\t\t<mat-option [value]=\"inputConfig().keyValue ? option[inputConfig().keyValue] : option\">\r\n\t\t\t\t{{ inputConfig().keyLabel ? option[inputConfig().keyLabel] : option }}\r\n\t\t\t</mat-option>\r\n\t\t}\r\n\t</mat-select>\r\n\r\n\t@if (inputConfig().hint) {\r\n\t\t<mat-hint align=\"end\">{{ inputConfig().hint }}</mat-hint>\r\n\t}\r\n\r\n\t@if (formStore.isValid(control())) {\r\n\t\t<mat-error align=\"end\">{{ formStore.getErrorMessage(control()) }}</mat-error>\r\n\t}\r\n</mat-form-field>\r\n", styles: [".dropdown-field.mat-mdc-form-field{width:100%}\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1$2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1$2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2$1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2$1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i2$1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i2$1.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i2$1.MatSelect, selector: "mat-select", inputs: ["aria-describedby", "panelClass", "disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth", "canSelectNullableOptions"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "directive", type: i2$1.MatSelectTrigger, selector: "mat-select-trigger" }, { kind: "component", type: i2$1.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: DropdownComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-dropdown', imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatSelectModule], template: "<mat-form-field [appearance]=\"inputConfig().appearance\" class=\"dropdown-field\">\r\n\t<mat-label>{{ inputConfig().label }}</mat-label>\r\n\t<mat-select\r\n\t\t[formControl]=\"control()\"\r\n\t\t[placeholder]=\"inputConfig().placeholder\"\r\n\t\t[multiple]=\"inputConfig().isMultiple\"\r\n\t\t(selectionChange)=\"onSelectionChange($event)\"\r\n\t>\r\n\t\t@if (inputConfig().isMultiple) {\r\n\t\t\t<mat-select-trigger>\r\n\t\t\t\t{{\r\n\t\t\t\t\tcontrol().value\r\n\t\t\t\t\t\t? typeof control().value?.at(0) === 'object'\r\n\t\t\t\t\t\t\t? control().value.at(0)[inputConfig().keyLabel]\r\n\t\t\t\t\t\t\t: control().value.at(0)\r\n\t\t\t\t\t\t: ''\r\n\t\t\t\t}}\r\n\t\t\t\t@if (control().value && (control().value?.length || 0) > 1) {\r\n\t\t\t\t\t<span>\r\n\t\t\t\t\t\t(+{{ (control().value?.length || 0) - 1 }}\r\n\t\t\t\t\t\t{{ control().value?.length === 2 ? 'other' : 'others' }})\r\n\t\t\t\t\t</span>\r\n\t\t\t\t}\r\n\t\t\t</mat-select-trigger>\r\n\t\t}\r\n\t\t@for (option of inputConfig().options; track option) {\r\n\t\t\t<mat-option [value]=\"inputConfig().keyValue ? option[inputConfig().keyValue] : option\">\r\n\t\t\t\t{{ inputConfig().keyLabel ? option[inputConfig().keyLabel] : option }}\r\n\t\t\t</mat-option>\r\n\t\t}\r\n\t</mat-select>\r\n\r\n\t@if (inputConfig().hint) {\r\n\t\t<mat-hint align=\"end\">{{ inputConfig().hint }}</mat-hint>\r\n\t}\r\n\r\n\t@if (formStore.isValid(control())) {\r\n\t\t<mat-error align=\"end\">{{ formStore.getErrorMessage(control()) }}</mat-error>\r\n\t}\r\n</mat-form-field>\r\n", styles: [".dropdown-field.mat-mdc-form-field{width:100%}\n"] }]
        }] });

class ApiService {
    http;
    #destroyRef = inject(DestroyRef);
    constructor(http) {
        this.http = http;
    }
    get(url, params, headers) {
        return this.http
            .get(url, { params, headers, withCredentials: true })
            .pipe(takeUntilDestroyed(this.#destroyRef));
    }
    post(url, body, headers) {
        return this.http
            .post(url, body, { headers, withCredentials: true })
            .pipe(takeUntilDestroyed(this.#destroyRef));
    }
    put(url, body, headers) {
        return this.http
            .put(url, body, { headers, withCredentials: true })
            .pipe(takeUntilDestroyed(this.#destroyRef));
    }
    patch(url, body, headers) {
        return this.http
            .patch(url, body, { headers, withCredentials: true })
            .pipe(takeUntilDestroyed(this.#destroyRef));
    }
    delete(url, params, headers) {
        return this.http
            .delete(url, { params, headers, withCredentials: true })
            .pipe(takeUntilDestroyed(this.#destroyRef));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: ApiService, deps: [{ token: i1$3.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: ApiService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: ApiService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1$3.HttpClient }] });

class ButtonModel {
    variant;
    label;
    disabled;
    link;
    icon;
    iconPosition;
    /**
     * Creates an instance of ButtonModel.
     *
     * @param type - The type of the button. Defaults to 'basic'.
     * @param label - The label text displayed on the button. Defaults to 'Button'.
     * @param disabled - Indicates whether the button is disabled. Defaults to `false`.
     * @param link - The URL or route the button navigates to. Defaults to an empty string.
     * @param icon - The icon associated with the button. Defaults to an empty string.
     * @param iconPosition - The position of the icon relative to the label. Defaults to 'start'.
     */
    constructor(variant = 'basic', label = 'Button', disabled = false, link = '', icon = '', iconPosition = 'start') {
        this.variant = variant;
        this.label = label;
        this.disabled = disabled;
        this.link = link;
        this.icon = icon;
        this.iconPosition = iconPosition;
    }
}

const TablePageIndexDefaultConst = 0;
const TablePageSizeDefaultConst = 10;
class TableConfigModel {
    dataKey;
    dataLabel;
    dataSource;
    dataTotal;
    pageIndex;
    pageSize;
    sortKey = '';
    sortOrder;
    selection = new SelectionModel(true, []);
    tableClass = '';
    isHttpPagination = signal(true);
    isPagination = signal(true);
    isSorter = signal(true);
    isLoading = signal(false);
    selectedOptionId = signal(null);
    options = {
        sortDirection: 'desc',
        sortActive: 'date',
        limit: 10,
        page: 1,
        property: null,
        filters: {},
    };
    dataType = {};
    constructor() {
        this.dataKey = [];
        this.dataLabel = [];
        this.dataSource = [];
        this.dataTotal = 0;
        this.pageIndex = TablePageIndexDefaultConst;
        this.pageSize = TablePageSizeDefaultConst;
        this.sortOrder = 'asc';
    }
    generateDataType() {
        if (this.dataSource.length === 0)
            return;
        for (const key in this.dataSource[0]) {
            const keyValue = this.dataSource[0][key];
            if (!this.dataKey.includes(key)) {
                continue;
            }
            let dataType = '';
            if (keyValue instanceof Date) {
                dataType = 'date';
            }
            else if (typeof keyValue === 'number') {
                dataType = 'number';
            }
            else if (typeof keyValue === 'string') {
                dataType = 'title';
            }
            else {
                dataType = '';
            }
            this.dataType[key] = { type: dataType };
        }
        return this;
    }
    isEmpty() {
        return this.dataSource?.length === 0;
    }
    resetPage() {
        this.pageIndex = TablePageIndexDefaultConst;
        this.pageSize = TablePageSizeDefaultConst;
        this.sortKey = '';
        this.sortOrder = 'asc';
    }
    resetDataSource() {
        this.resetPage();
        this.dataSource = [];
        this.dataTotal = 0;
    }
    isSelected(row) {
        return this.selection.isSelected(row);
    }
    selectRow(row) {
        this.selection.toggle(row);
    }
    selectAll(isChecked) {
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

class TextboxModel {
    appearance;
    label;
    type;
    placeholder;
    hint;
    rows;
    limit;
    constructor(appearance = 'outline', label = '', type = 'text', placeholder = '', hint = '', rows = 5, limit = 0) {
        this.appearance = appearance;
        this.label = label;
        this.type = type;
        this.placeholder = placeholder;
        this.hint = hint;
        this.rows = rows;
        this.limit = limit;
    }
}

class DropdownModel {
    appearance;
    label;
    options;
    isMultiple;
    keyValue;
    keyLabel;
    placeholder;
    hint;
    constructor(appearance = 'outline', label = '', options = [], isMultiple = false, keyValue = '', keyLabel = '', placeholder = '', hint = '') {
        this.appearance = appearance;
        this.label = label;
        this.options = options;
        this.isMultiple = isMultiple;
        this.keyValue = keyValue;
        this.keyLabel = keyLabel;
        this.placeholder = placeholder;
        this.hint = hint;
    }
}

/*
 * Public API Surface of angular-ui-lib
 */
// Components
// Utils
// export * from './lib/shared/utils/index';

/**
 * Generated bundle index. Do not edit.
 */

export { ApiService, ButtonComponent, ButtonModel, CurrencyIntlPipe, DropdownComponent, DropdownModel, FormStore, TableComponent, TableConfigModel, TextareaComponent, TextboxComponent, TextboxModel };
//# sourceMappingURL=angular-ui-lib.mjs.map
