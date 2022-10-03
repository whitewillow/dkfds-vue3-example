import { FdsNavigationItem } from '@/model/fds.model';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: () => Array<FdsNavigationItem>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "navigate")[], "update:modelValue" | "navigate", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: () => Array<FdsNavigationItem>;
        required: true;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onNavigate?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _default;
