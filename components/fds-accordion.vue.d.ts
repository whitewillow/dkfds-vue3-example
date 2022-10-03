declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            hint: string;
            collapsed: boolean;
            disabled: boolean;
            variant: string;
            variantText: string;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            /**
             * Overskrift
             * */
            header: {
                type: StringConstructor;
            };
            /**
             * Hjælpetekst
             * */
            hint: {
                type: StringConstructor;
                default: string;
            };
            /**
             * Er Accordion lukket
             * */
            collapsed: {
                type: BooleanConstructor;
                default: boolean;
            };
            /**
             * Disabled
             * */
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            /**
             * Type - ikon der vises til højre
             * */
            variant: {
                type: () => string | 'success' | 'warning' | 'error';
                default: null;
            };
            /**
             * Tilhørende tekst til varianten (typen)
             * */
            variantText: {
                type: StringConstructor;
                default: string;
            };
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "hint" | "collapsed" | "disabled" | "variant" | "variantText">;
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
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            /**
             * Overskrift
             * */
            header: {
                type: StringConstructor;
            };
            /**
             * Hjælpetekst
             * */
            hint: {
                type: StringConstructor;
                default: string;
            };
            /**
             * Er Accordion lukket
             * */
            collapsed: {
                type: BooleanConstructor;
                default: boolean;
            };
            /**
             * Disabled
             * */
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            /**
             * Type - ikon der vises til højre
             * */
            variant: {
                type: () => string | 'success' | 'warning' | 'error';
                default: null;
            };
            /**
             * Tilhørende tekst til varianten (typen)
             * */
            variantText: {
                type: StringConstructor;
                default: string;
            };
        }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            hint: string;
            collapsed: boolean;
            disabled: boolean;
            variant: string;
            variantText: string;
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
        /**
         * Overskrift
         * */
        header: {
            type: StringConstructor;
        };
        /**
         * Hjælpetekst
         * */
        hint: {
            type: StringConstructor;
            default: string;
        };
        /**
         * Er Accordion lukket
         * */
        collapsed: {
            type: BooleanConstructor;
            default: boolean;
        };
        /**
         * Disabled
         * */
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        /**
         * Type - ikon der vises til højre
         * */
        variant: {
            type: () => string | 'success' | 'warning' | 'error';
            default: null;
        };
        /**
         * Tilhørende tekst til varianten (typen)
         * */
        variantText: {
            type: StringConstructor;
            default: string;
        };
    }>> & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    /**
     * Overskrift
     * */
    header: {
        type: StringConstructor;
    };
    /**
     * Hjælpetekst
     * */
    hint: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Er Accordion lukket
     * */
    collapsed: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Disabled
     * */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Type - ikon der vises til højre
     * */
    variant: {
        type: () => string | 'success' | 'warning' | 'error';
        default: null;
    };
    /**
     * Tilhørende tekst til varianten (typen)
     * */
    variantText: {
        type: StringConstructor;
        default: string;
    };
}>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    hint: string;
    collapsed: boolean;
    disabled: boolean;
    variant: string;
    variantText: string;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        header: (_: {}) => any;
        default: (_: {}) => any;
    };
});
/**
 * Komponent til Accordions
 * https://designsystem.dk/komponenter/accordions/
 *
 * */
export default _default;