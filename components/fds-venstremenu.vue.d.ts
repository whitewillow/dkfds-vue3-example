import { FdsNavigationItem } from '@/model/fds.model';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: () => FdsNavigationItem[];
        required: boolean;
    };
    showIndex: {
        type: BooleanConstructor;
        default: boolean;
    };
    navigateFirst: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "navigate")[], "update:modelValue" | "navigate", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: () => FdsNavigationItem[];
        required: boolean;
    };
    showIndex: {
        type: BooleanConstructor;
        default: boolean;
    };
    navigateFirst: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onNavigate?: ((...args: any[]) => any) | undefined;
}, {
    showIndex: boolean;
    navigateFirst: boolean;
}>;
export default _default;
