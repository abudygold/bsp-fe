import { AbstractControl, FormArray, FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class FormStore {
    getControl(control: AbstractControl): AbstractControl;
    getFormArray(formArray: FormArray): FormGroup[];
    addControl(formArray: FormArray, initFunction: any): void;
    removeControl(formArray: FormArray, index: number): void;
    isValid(control: AbstractControl): boolean;
    getErrorMessage(control: AbstractControl): string | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormStore, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FormStore>;
}
