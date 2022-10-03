import { FdsTabItem } from '@/model/fds.model';
declare const _default: import("vue").DefineComponent<{
    list: {
        type: () => Array<FdsTabItem>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "navigate"[], "navigate", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    list: {
        type: () => Array<FdsTabItem>;
        required: true;
    };
}>> & {
    onNavigate?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _default;
