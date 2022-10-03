declare const _default: import("vue").DefineComponent<{
    modelValue: {
        default: number;
    };
    inputType: {
        type: StringConstructor;
        default: string;
    };
    suffix: {
        type: StringConstructor;
        default: null;
    };
    prefix: {
        type: StringConstructor;
        default: null;
    };
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
    id: {
        type: StringConstructor;
        default: null;
    };
    placeholder: {
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
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "dirty" | "input" | "valid")[], "input" | "update:modelValue" | "dirty" | "valid", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        default: number;
    };
    inputType: {
        type: StringConstructor;
        default: string;
    };
    suffix: {
        type: StringConstructor;
        default: null;
    };
    prefix: {
        type: StringConstructor;
        default: null;
    };
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
    id: {
        type: StringConstructor;
        default: null;
    };
    placeholder: {
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
    modelValue: number;
    inputType: string;
    suffix: string;
    prefix: string;
    placeholder: string;
    autocomplete: string;
    inputClass: string;
    validations: ((x?: unknown) => string | null)[];
    tooltip: string;
}>;
export default _default;
