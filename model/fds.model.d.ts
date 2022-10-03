export declare enum FdsVariantEnum {
    primary = "primary",
    secondary = "secondary",
    tertiary = "tertiary",
    quaternary = "quaternary",
    info = "info",
    success = "success",
    warning = "warning",
    error = "error"
}
/**
 * Used for radio, dropdowns
 */
export interface FdsOptionItem {
    title: string;
    value: string;
    disabled?: boolean;
}
/**
 * Used for Checkbox
 */
export interface FdsCheckboxItem extends FdsOptionItem {
    checked?: boolean;
}
export interface FdsErrorListItem {
    anchor: string;
    text: string;
}
export interface FdsFileModel {
    id: string;
    filnavn: string;
    label?: string;
    type: string;
}
export interface FdsFileInputModel {
    filnavn: string;
    type: string;
    size: number;
    data: string;
}
export interface FdsNavigationItem {
    key: string;
    title: string;
    active: boolean;
    disabled?: boolean;
    hint: string;
    icon?: string;
    ignore?: boolean;
    href?: string;
    children?: Array<FdsNavigationItem>;
}
export interface FdsTabItem {
    key: string;
    title: string;
    active: boolean;
    disabled?: boolean;
    ignore?: boolean;
}
