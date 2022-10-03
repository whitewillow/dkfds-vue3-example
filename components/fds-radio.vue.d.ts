import { PropType } from 'vue';
import { FdsOptionItem } from '@/model/fds.model';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: StringConstructor;
    };
    list: {
        type: PropType<FdsOptionItem[]>;
        required: true;
        default: () => never[];
    };
    id: {
        type: StringConstructor;
        default: null;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "dirty")[], "update:modelValue" | "dirty", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: StringConstructor;
    };
    list: {
        type: PropType<FdsOptionItem[]>;
        required: true;
        default: () => never[];
    };
    id: {
        type: StringConstructor;
        default: null;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onDirty?: ((...args: any[]) => any) | undefined;
}, {
    id: string;
    list: FdsOptionItem[];
}>;
export default _default;
