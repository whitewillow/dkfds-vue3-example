declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            readonly: boolean;
            disabled: boolean;
            id: string;
            modelValue: string;
            inputType: string;
            suffix: string;
            prefix: string;
            placeholder: string;
            autocomplete: string;
            inputClass: string;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            modelValue: {
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
            inputType: {
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
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "readonly" | "disabled" | "id" | "modelValue" | "inputType" | "suffix" | "prefix" | "placeholder" | "autocomplete" | "inputClass">;
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
        $emit: (event: "update:modelValue" | "dirty" | "input", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            modelValue: {
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
            inputType: {
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
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "dirty" | "input")[], string, {
            readonly: boolean;
            disabled: boolean;
            id: string;
            modelValue: string;
            inputType: string;
            suffix: string;
            prefix: string;
            placeholder: string;
            autocomplete: string;
            inputClass: string;
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
        modelValue: {
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
        inputType: {
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
    } & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
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
    inputType: {
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
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "dirty" | "input")[], "input" | "update:modelValue" | "dirty", {
    readonly: boolean;
    disabled: boolean;
    id: string;
    modelValue: string;
    inputType: string;
    suffix: string;
    prefix: string;
    placeholder: string;
    autocomplete: string;
    inputClass: string;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        button: (_: {}) => any;
    };
});
export default _default;
