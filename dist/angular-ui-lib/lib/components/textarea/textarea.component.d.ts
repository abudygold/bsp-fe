import { FormControl } from '@angular/forms';
import { TextboxModel } from '../../shared/model';
import { FormStore } from '../../store';
import * as i0 from "@angular/core";
export declare class TextareaComponent {
    protected formStore: FormStore;
    onInput: import("@angular/core").OutputEmitterRef<any>;
    inputConfig: import("@angular/core").InputSignal<TextboxModel>;
    control: import("@angular/core").InputSignal<FormControl<any>>;
    onInputChange(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TextareaComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TextareaComponent, "lib-textarea", never, { "inputConfig": { "alias": "inputConfig"; "required": true; "isSignal": true; }; "control": { "alias": "control"; "required": true; "isSignal": true; }; }, { "onInput": "onInput"; }, never, never, true, never>;
}
