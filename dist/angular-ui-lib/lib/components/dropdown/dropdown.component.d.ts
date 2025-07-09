import { FormControl } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { FormStore } from '../../store';
import { DropdownModel } from '../../shared/model';
import * as i0 from "@angular/core";
export declare class DropdownComponent {
    protected formStore: FormStore;
    onSelection: import("@angular/core").OutputEmitterRef<any>;
    inputConfig: import("@angular/core").InputSignal<DropdownModel>;
    control: import("@angular/core").InputSignal<FormControl<any>>;
    onSelectionChange(event: MatSelectChange): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DropdownComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DropdownComponent, "lib-dropdown", never, { "inputConfig": { "alias": "inputConfig"; "required": true; "isSignal": true; }; "control": { "alias": "control"; "required": true; "isSignal": true; }; }, { "onSelection": "onSelection"; }, never, never, true, never>;
}
