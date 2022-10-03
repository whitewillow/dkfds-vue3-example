/**
 *
 * Komponent for knap med spinner
 * Umiddelbart ikke en del FDS
 * https://designsystem.dk/komponenter/knapper/
 *
 * */
import { PropType } from 'vue';
import { FdsVariantEnum } from '@/model/fds.model';
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            disabled: boolean;
            variant: string;
            icon: string;
            showSpinner: boolean;
            spinnerText: string;
            useoverlay: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            /**
             * Visnings variant
             * */
            variant: {
                type: PropType<string>;
                default: () => FdsVariantEnum;
            };
            /**
             * disabled
             * */
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            /**
             * Vis spinner
             * */
            showSpinner: {
                type: BooleanConstructor;
                default: boolean;
            };
            /**
             * Spinner tekst - erstatter alm tekst
             * */
            spinnerText: {
                type: StringConstructor;
                default: null;
            };
            /**
             * Ikon som string
             * */
            icon: {
                type: StringConstructor;
                default: null;
            };
            /**
             * Tilføjer overlay når showSpinner, ikke muligt at klikke andre steder imens
             * */
            useoverlay: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & {
            onClick?: ((...args: any[]) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "disabled" | "variant" | "icon" | "showSpinner" | "spinnerText" | "useoverlay">;
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
        $emit: (event: "click", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            /**
             * Visnings variant
             * */
            variant: {
                type: PropType<string>;
                default: () => FdsVariantEnum;
            };
            /**
             * disabled
             * */
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            /**
             * Vis spinner
             * */
            showSpinner: {
                type: BooleanConstructor;
                default: boolean;
            };
            /**
             * Spinner tekst - erstatter alm tekst
             * */
            spinnerText: {
                type: StringConstructor;
                default: null;
            };
            /**
             * Ikon som string
             * */
            icon: {
                type: StringConstructor;
                default: null;
            };
            /**
             * Tilføjer overlay når showSpinner, ikke muligt at klikke andre steder imens
             * */
            useoverlay: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & {
            onClick?: ((...args: any[]) => any) | undefined;
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], string, {
            disabled: boolean;
            variant: string;
            icon: string;
            showSpinner: boolean;
            spinnerText: string;
            useoverlay: boolean;
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
         * Visnings variant
         * */
        variant: {
            type: PropType<string>;
            default: () => FdsVariantEnum;
        };
        /**
         * disabled
         * */
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        /**
         * Vis spinner
         * */
        showSpinner: {
            type: BooleanConstructor;
            default: boolean;
        };
        /**
         * Spinner tekst - erstatter alm tekst
         * */
        spinnerText: {
            type: StringConstructor;
            default: null;
        };
        /**
         * Ikon som string
         * */
        icon: {
            type: StringConstructor;
            default: null;
        };
        /**
         * Tilføjer overlay når showSpinner, ikke muligt at klikke andre steder imens
         * */
        useoverlay: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & {
        onClick?: ((...args: any[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    /**
     * Visnings variant
     * */
    variant: {
        type: PropType<string>;
        default: () => FdsVariantEnum;
    };
    /**
     * disabled
     * */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Vis spinner
     * */
    showSpinner: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Spinner tekst - erstatter alm tekst
     * */
    spinnerText: {
        type: StringConstructor;
        default: null;
    };
    /**
     * Ikon som string
     * */
    icon: {
        type: StringConstructor;
        default: null;
    };
    /**
     * Tilføjer overlay når showSpinner, ikke muligt at klikke andre steder imens
     * */
    useoverlay: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", {
    disabled: boolean;
    variant: string;
    icon: string;
    showSpinner: boolean;
    spinnerText: string;
    useoverlay: boolean;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
});
export default _default;
