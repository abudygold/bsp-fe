import { TemplateRef } from '@angular/core';
import { TextboxModel } from '../../shared/model';
import { FormControl } from '@angular/forms';
import { FormStore } from '../../store';
import * as i0 from "@angular/core";
export declare class TextboxComponent {
    protected formStore: FormStore;
    onInput: import("@angular/core").OutputEmitterRef<any>;
    inputConfig: import("@angular/core").InputSignal<TextboxModel>;
    control: import("@angular/core").InputSignal<FormControl<any>>;
    matPrefixRef: TemplateRef<any> | null;
    matSuffixRef: TemplateRef<any> | null;
    matTextPrefixRef: TemplateRef<any> | null;
    matTextSuffixRef: TemplateRef<any> | null;
    onInputChange(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TextboxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TextboxComponent, "lib-textbox", never, { "inputConfig": { "alias": "inputConfig"; "required": true; "isSignal": true; }; "control": { "alias": "control"; "required": true; "isSignal": true; }; }, { "onInput": "onInput"; }, ["matPrefixRef", "matSuffixRef", "matTextPrefixRef", "matTextSuffixRef"], never, true, never>;
}
