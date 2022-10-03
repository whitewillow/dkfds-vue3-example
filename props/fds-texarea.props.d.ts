/**
 * Comon props for FDS Textarea
 */
declare const fdsTextareaProps: {
    modelValue: {
        type: StringConstructor;
        default: string;
        required: boolean;
    };
    id: {
        type: StringConstructor;
        default: null;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    inputClass: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    rows: {
        type: NumberConstructor;
        default: number;
    };
    rowlength: {
        type: NumberConstructor;
        default: number;
    };
    maxLength: {
        type: NumberConstructor;
        default: number;
    };
};
export default fdsTextareaProps;
