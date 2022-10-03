import { FdsNavigationItem } from '@/model/fds.model';
/**
 * Comon props for Navigation
 */
declare const fdsNavigationProps: {
    modelValue: {
        type: () => Array<FdsNavigationItem>;
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
};
export default fdsNavigationProps;
