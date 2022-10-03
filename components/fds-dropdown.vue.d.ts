import { FdsOptionItem } from '@/model/fds.model';
declare const _default: import("vue").DefineComponent<{
    id: {
        type: StringConstructor;
        default: null;
    };
    modelValue: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    optionHeader: {
        type: StringConstructor;
        default: string;
    };
    noHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    options: {
        type: () => Array<FdsOptionItem>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "dirty" | "change")[], "update:modelValue" | "dirty" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: null;
    };
    modelValue: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    optionHeader: {
        type: StringConstructor;
        default: string;
    };
    noHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    options: {
        type: () => Array<FdsOptionItem>;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onDirty?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    id: string;
    modelValue: string;
    optionHeader: string;
    noHeader: boolean;
}>;
export default _default;
