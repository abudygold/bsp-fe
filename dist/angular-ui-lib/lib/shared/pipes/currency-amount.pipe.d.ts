import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CurrencyIntlPipe implements PipeTransform {
    transform(value: number, currency?: string, locale?: string, minimumFractionDigits?: number, maximumFractionDigits?: number): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<CurrencyIntlPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<CurrencyIntlPipe, "currencyIntl", true>;
}
