import { PropType } from 'vue';
import { FdsFileModel } from '@/model/fds.model';
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            list: FdsFileModel[];
            icons: Record<string, string>;
            defaultIcon: string;
            hideDelete: boolean;
            hideDownload: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            list: {
                type: PropType<FdsFileModel[]>;
                required: true;
                default: () => never[];
            };
            icons: {
                type: PropType<Record<string, string>>;
                default: () => {
                    pdf: string;
                    image: string;
                    doc: string;
                    odt: string;
                    xls: string;
                };
            };
            defaultIcon: {
                type: StringConstructor;
                default: string;
            };
            hideDelete: {
                type: BooleanConstructor;
                default: boolean;
            };
            hideDownload: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & {
            onDownload?: ((...args: any[]) => any) | undefined;
            onDelete?: ((...args: any[]) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "list" | "icons" | "defaultIcon" | "hideDelete" | "hideDownload">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: "download" | "delete", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            list: {
                type: PropType<FdsFileModel[]>;
                required: true;
                default: () => never[];
            };
            icons: {
                type: PropType<Record<string, string>>;
                default: () => {
                    pdf: string;
                    image: string;
                    doc: string;
                    odt: string;
                    xls: string;
                };
            };
            defaultIcon: {
                type: StringConstructor;
                default: string;
            };
            hideDelete: {
                type: BooleanConstructor;
                default: boolean;
            };
            hideDownload: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & {
            onDownload?: ((...args: any[]) => any) | undefined;
            onDelete?: ((...args: any[]) => any) | undefined;
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("download" | "delete")[], string, {
            list: FdsFileModel[];
            icons: Record<string, string>;
            defaultIcon: string;
            hideDelete: boolean;
            hideDownload: boolean;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        list: {
            type: PropType<FdsFileModel[]>;
            required: true;
            default: () => never[];
        };
        icons: {
            type: PropType<Record<string, string>>;
            default: () => {
                pdf: string;
                image: string;
                doc: string;
                odt: string;
                xls: string;
            };
        };
        defaultIcon: {
            type: StringConstructor;
            default: string;
        };
        hideDelete: {
            type: BooleanConstructor;
            default: boolean;
        };
        hideDownload: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & {
        onDownload?: ((...args: any[]) => any) | undefined;
        onDelete?: ((...args: any[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    list: {
        type: PropType<FdsFileModel[]>;
        required: true;
        default: () => never[];
    };
    icons: {
        type: PropType<Record<string, string>>;
        default: () => {
            pdf: string;
            image: string;
            doc: string;
            odt: string;
            xls: string;
        };
    };
    defaultIcon: {
        type: StringConstructor;
        default: string;
    };
    hideDelete: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideDownload: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onDownload?: ((...args: any[]) => any) | undefined;
    onDelete?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("download" | "delete")[], "download" | "delete", {
    list: FdsFileModel[];
    icons: Record<string, string>;
    defaultIcon: string;
    hideDelete: boolean;
    hideDownload: boolean;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
});
export default _default;
