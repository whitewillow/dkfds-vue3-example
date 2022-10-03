import { FdsCheckboxItem } from '@/model/fds.model';
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            label: string;
            hint: string;
            modelValue: FdsCheckboxItem[];
            suffix: string;
            prefix: string;
            validations: ((x?: unknown) => string | null)[];
            tooltip: string;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
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
            modelValue: {
                type: import("vue").PropType<FdsCheckboxItem[]>;
                required: boolean;
                default: () => never[];
            };
        }>> & {
            onInput?: ((...args: any[]) => any) | undefined;
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
            onDirty?: ((...args: any[]) => any) | undefined;
            onValid?: ((...args: any[]) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "label" | "hint" | "modelValue" | "suffix" | "prefix" | "validations" | "tooltip">;
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
        $emit: (event: "update:modelValue" | "dirty" | "input" | "valid", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
            modelValue: {
                type: import("vue").PropType<FdsCheckboxItem[]>;
                required: boolean;
                default: () => never[];
            };
        }>> & {
            onInput?: ((...args: any[]) => any) | undefined;
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
            onDirty?: ((...args: any[]) => any) | undefined;
            onValid?: ((...args: any[]) => any) | undefined;
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "dirty" | "input" | "valid")[], string, {
            label: string;
            hint: string;
            modelValue: FdsCheckboxItem[];
            suffix: string;
            prefix: string;
            validations: ((x?: unknown) => string | null)[];
            tooltip: string;
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
        modelValue: {
            type: import("vue").PropType<FdsCheckboxItem[]>;
            required: boolean;
            default: () => never[];
        };
    }>> & {
        onInput?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        onDirty?: ((...args: any[]) => any) | undefined;
        onValid?: ((...args: any[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
    modelValue: {
        type: import("vue").PropType<FdsCheckboxItem[]>;
        required: boolean;
        default: () => never[];
    };
}>> & {
    onInput?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onDirty?: ((...args: any[]) => any) | undefined;
    onValid?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "dirty" | "input" | "valid")[], "input" | "update:modelValue" | "dirty" | "valid", {
    label: string;
    hint: string;
    modelValue: FdsCheckboxItem[];
    suffix: string;
    prefix: string;
    validations: ((x?: unknown) => string | null)[];
    tooltip: string;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
});
export default _default;