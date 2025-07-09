type ButtonVariant = 'basic' | 'raised' | 'flat' | 'icon' | 'stroked' | 'fab' | 'mini-fab' | 'extended-fab';
type IconPosition = 'start' | 'end';
export declare class ButtonModel {
    variant: ButtonVariant;
    label: string;
    disabled: boolean;
    link: string;
    icon: string;
    iconPosition: IconPosition;
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
    constructor(variant?: ButtonVariant, label?: string, disabled?: boolean, link?: string, icon?: string, iconPosition?: IconPosition);
}
export {};
