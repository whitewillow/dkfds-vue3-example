/**
 * Comon props for FDS Textarea
 */
declare const fdsFormProps: {
    validations: {
        type: () => ((x?: unknown) => string | null)[];
        default: null;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    hint: {
        type: StringConstructor;
        default: string;
    };
    tooltip: {
        type: StringConstructor;
        default: null;
    };
};
export default fdsFormProps;
