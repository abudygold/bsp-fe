type Appearance = 'fill' | 'outline';
export declare class DropdownModel {
    appearance: Appearance;
    label: string;
    options: any[];
    isMultiple: boolean;
    keyValue: string;
    keyLabel: string;
    placeholder: string;
    hint: string;
    constructor(appearance?: Appearance, label?: string, options?: any[], isMultiple?: boolean, keyValue?: string, keyLabel?: string, placeholder?: string, hint?: string);
}
export {};
