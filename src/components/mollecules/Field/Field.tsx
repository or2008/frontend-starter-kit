import Input, { InputProps } from '@/components/atoms/Input/Input';
import InputGroup, { InputGroupProps } from '@/components/atoms/Input/InputGroup';
import InputWithIcon, { InputWithIconProps } from '@/components/atoms/Input/InputWithIcon';
import { FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export interface FieldProps {
    className?: string;
    inputProps?: InputProps;
    inputGroupProps?: InputGroupProps;
    inputWithIconProps?: InputWithIconProps;
}

const Field: FC<PropsWithChildren<FieldProps>> = props => {
    const { children, className = '' } = props;

    function getBaseClassname() {
        return twMerge('flex');
    }

    function renderLabel() {
        return <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>;
    }

    function renderInput() {
        const { inputProps } = props;
        if (!inputProps) return;
        return <Input {...inputProps} />;
    }

    function renderInputWithIcon() {
        const { inputWithIconProps } = props;
        if (!inputWithIconProps) return;
        return <InputWithIcon {...inputWithIconProps} />;
    }

    function renderInputGroup() {
        const { inputGroupProps } = props;
        if (!inputGroupProps) return;
        return <InputGroup {...inputGroupProps} />;
    }

    function renderHelper() {
        return <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400">We’ll never share your details. Read our <a href="#" class="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</a>.</p>;
    }

    return (
        <div className={getBaseClassname()}>
            {renderLabel()}
            {renderInput()}
            {renderInputGroup()}
            {renderInputWithIcon()}
            {renderHelper()}
        </div>
    );
};

export default Field;
