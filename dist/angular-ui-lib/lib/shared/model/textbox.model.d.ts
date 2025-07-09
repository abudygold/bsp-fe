type Appearance = 'fill' | 'outline';
type TextBoxType = 'text' | 'password' | 'email' | 'number' | 'textarea';
export declare class TextboxModel {
    appearance: Appearance;
    label: string;
    type: TextBoxType;
    placeholder: string;
    hint: string;
    rows: number;
    limit: number;
    constructor(appearance?: Appearance, label?: string, type?: TextBoxType, placeholder?: string, hint?: string, rows?: number, limit?: number);
}
export {};
