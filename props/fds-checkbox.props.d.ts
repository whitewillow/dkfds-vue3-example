import { PropType } from 'vue';
import { FdsCheckboxItem } from '@/model/fds.model';
/**
 * Comon props for FDS CheckboxList
 */
declare const fdsCheckboxProps: {
    modelValue: {
        type: PropType<FdsCheckboxItem[]>;
        required: boolean;
        default: () => never[];
    };
};
export default fdsCheckboxProps;
