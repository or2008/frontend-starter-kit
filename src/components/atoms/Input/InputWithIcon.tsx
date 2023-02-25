import { mergeProps } from '@/utils/merge-props';
import { FC, Fragment, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import Icon, { IconProps } from '../Icon/Icon';
import { InputProps } from './Input';
import InputGroup, { InputGroupProps } from './InputGroup';

export interface InputWithIconProps {
    inputProps: InputProps;
    iconProps: IconProps;
    iconWrapperClassName?: string;
}

const InputWithIcon: FC<PropsWithChildren<InputWithIconProps>> = props => {

    function renderIcon() {
        const { iconProps, iconWrapperClassName = '' } = props;

        return (
            <div className={twMerge('absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none', iconWrapperClassName)}>
                <Icon {...iconProps} />
            </div>
        );
    }

    function renderInputGroup() {
        const { inputProps } = props;

        const _inputProps = mergeProps<[Partial<InputProps>, InputProps]>({
            className: 'pl-10',
        }, inputProps)

        return <InputGroup renderSuffix={renderIcon} inputProps={_inputProps} />
    }

    return (
        <Fragment>{renderInputGroup()}</Fragment>
    );
};

export default InputWithIcon;
