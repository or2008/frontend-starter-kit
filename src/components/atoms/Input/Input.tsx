import { noop } from '@/utils/function';
import { ChangeEvent, ChangeEventHandler, FC, HTMLInputTypeAttribute, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export interface InputProps {
    className?: string;
    placeholder?: string;
    type?: HTMLInputTypeAttribute;
    value: string | number;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<PropsWithChildren<InputProps>> = props => {
    const { value, onChange = noop, children, className = '', type, placeholder } = props;

    function getBaseClassname() {
        return twMerge('bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500', className);
    }

    function renderContent() {
        return (
            <div>
                {children}
            </div>
        );
    }


    return (
        <input onChange={onChange} value={value} className={getBaseClassname()} type={type} placeholder={placeholder} />
    );
};

export default Input;
