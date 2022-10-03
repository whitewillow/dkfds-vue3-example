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
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "dirty" | "input")[], "input" | "update:modelValue" | "dirty", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
}, {
    readonly: boolean;
    disabled: boolean;
    id: string;
    modelValue: number;
    inputType: string;
    suffix: string;
    prefix: string;
    placeholder: string;
    autocomplete: string;
    inputClass: string;
}>;
export default _default;
