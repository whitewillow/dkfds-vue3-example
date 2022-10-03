declare const _default: import("vue").DefineComponent<{
    id: {
        type: StringConstructor;
        default: null;
    };
    modelValue: {
        type: import("vue").PropType<import("../main_plugin.js").FdsCheckboxItem[]>;
        required: boolean;
        default: () => never[];
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "dirty")[], "update:modelValue" | "dirty", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: null;
    };
    modelValue: {
        type: import("vue").PropType<import("../main_plugin.js").FdsCheckboxItem[]>;
        required: boolean;
        default: () => never[];
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onDirty?: ((...args: any[]) => any) | undefined;
}, {
    id: string;
    modelValue: import("../main_plugin.js").FdsCheckboxItem[];
}>;
export default _default;
