/**
 * Comon props for FDS Textarea
 */
declare const fdsInputProps: {
    id: {
        type: StringConstructor;
        default: null;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    inputType: {
        type: StringConstructor;
        default: string;
    };
    autocomplete: {
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
};
export default fdsInputProps;
