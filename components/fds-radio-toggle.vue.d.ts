declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: () => boolean | undefined | null;
    };
    trueLabel: {
        type: StringConstructor;
        default: string;
    };
    falseLabel: {
        type: StringConstructor;
        default: string;
    };
    noLabels: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    disableSlots: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "dirty")[], "update:modelValue" | "dirty", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: () => boolean | undefined | null;
    };
    trueLabel: {
        type: StringConstructor;
        default: string;
    };
    falseLabel: {
        type: StringConstructor;
        default: string;
    };
    noLabels: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    disableSlots: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onDirty?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    trueLabel: string;
    falseLabel: string;
    noLabels: boolean;
    disableSlots: boolean;
}>;
export default _default;
