import { noop } from '@/utils/function';
import { FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export interface ToggleSwitchProps {
    className?: string;
    isDisabled?: boolean;
    isOn: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    switchClassname?: string;
}

const ToggleSwitch: FC<PropsWithChildren<ToggleSwitchProps>> = props => {
    const { onChange = noop, children, className = '', isOn, } = props;

    function getBaseClassname() {
        return twMerge('relative inline-flex items-center cursor-pointer', className);
    }

    function renderSwitch() {
        const { switchClassname = '' } = props;
        return <div className={
            twMerge(`w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white
             after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border
             after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600`, switchClassname)} />;
    }

    function renderInput() {
        const { isDisabled } = props;
        return <input checked={isOn} className="sr-only peer" disabled={isDisabled} id="toggle-switch-input" onChange={onChange} type="checkbox" />;
    }

    return (
        <label className={getBaseClassname()} htmlFor="toggle-switch-input">
            {renderInput()}
            {renderSwitch()}
        </label>
    );
};

export default ToggleSwitch;
