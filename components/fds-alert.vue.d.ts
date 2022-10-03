declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            header: string;
            level: "success" | "warning" | "error" | "info";
            showIcon: boolean;
            closeable: boolean;
            timeout: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            level: {
                /**
                 * Type af besked
                 * */
                type: () => 'info' | 'success' | 'warning' | 'error';
                default: string;
            };
            /**
             * Vis venstrestillet ikon
             * */
            showIcon: {
                type: BooleanConstructor;
                default: boolean;
            };
            /**
             *  Klik for at lukke/fjerne besked
             * */
            closeable: {
                type: BooleanConstructor;
                default: boolean;
            };
            /**
             *  Overskrift
             * */
            header: {
                type: StringConstructor;
                default: null;
            };
            /**
             *  Hvis sand - lukkes beskeden efter 10 sek
             * */
            timeout: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & {
            onClose?: ((...args: any[]) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "header" | "level" | "showIcon" | "closeable" | "timeout">;
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
        $emit: (event: "close", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            level: {
                /**
                 * Type af besked
                 * */
                type: () => 'info' | 'success' | 'warning' | 'error';
                default: string;
            };
            /**
             * Vis venstrestillet ikon
             * */
            showIcon: {
                type: BooleanConstructor;
                default: boolean;
            };
            /**
             *  Klik for at lukke/fjerne besked
             * */
            closeable: {
                type: BooleanConstructor;
                default: boolean;
            };
            /**
             *  Overskrift
             * */
            header: {
                type: StringConstructor;
                default: null;
            };
            /**
             *  Hvis sand - lukkes beskeden efter 10 sek
             * */
            timeout: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & {
            onClose?: ((...args: any[]) => any) | undefined;
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "close"[], string, {
            header: string;
            level: "success" | "warning" | "error" | "info";
            showIcon: boolean;
            closeable: boolean;
            timeout: boolean;
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
        level: {
            /**
             * Type af besked
             * */
            type: () => 'info' | 'success' | 'warning' | 'error';
            default: string;
        };
        /**
         * Vis venstrestillet ikon
         * */
        showIcon: {
            type: BooleanConstructor;
            default: boolean;
        };
        /**
         *  Klik for at lukke/fjerne besked
         * */
        closeable: {
            type: BooleanConstructor;
            default: boolean;
        };
        /**
         *  Overskrift
         * */
        header: {
            type: StringConstructor;
            default: null;
        };
        /**
         *  Hvis sand - lukkes beskeden efter 10 sek
         * */
        timeout: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & {
        onClose?: ((...args: any[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    level: {
        /**
         * Type af besked
         * */
        type: () => 'info' | 'success' | 'warning' | 'error';
        default: string;
    };
    /**
     * Vis venstrestillet ikon
     * */
    showIcon: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     *  Klik for at lukke/fjerne besked
     * */
    closeable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     *  Overskrift
     * */
    header: {
        type: StringConstructor;
        default: null;
    };
    /**
     *  Hvis sand - lukkes beskeden efter 10 sek
     * */
    timeout: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onClose?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "close"[], "close", {
    header: string;
    level: "success" | "warning" | "error" | "info";
    showIcon: boolean;
    closeable: boolean;
    timeout: boolean;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
});
export default _default;
