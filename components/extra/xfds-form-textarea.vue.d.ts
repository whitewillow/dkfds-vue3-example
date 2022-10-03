declare const _default: import("vue").DefineComponent<{
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
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "dirty" | "input" | "valid")[], "input" | "update:modelValue" | "dirty" | "valid", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
}>> & {
    onInput?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onDirty?: ((...args: any[]) => any) | undefined;
    onValid?: ((...args: any[]) => any) | undefined;
}, {
    readonly: boolean;
    label: string;
    hint: string;
    disabled: boolean;
    id: string;
    modelValue: string;
    placeholder: string;
    inputClass: string;
    rows: number;
    rowlength: number;
    maxLength: number;
    validations: ((x?: unknown) => string | null)[];
    tooltip: string;
}>;
export default _default;
