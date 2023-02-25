import { FC, PropsWithChildren, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import Input, { InputProps } from './Input';

export interface InputGroupProps {
    className?: string;
    inputProps: InputProps;
    renderPrefix?: () => ReactNode;
    renderSuffix?: () => ReactNode;
}

const InputGroup: FC<PropsWithChildren<InputGroupProps>> = props => {
    const { children, className = '' } = props;

    function getBaseClassname() {
        return twMerge('relative', className);
    }

    function renderPrefix() {
        const { renderPrefix } = props;
        if (!renderPrefix) return;
        return renderPrefix();
    }

    function renderSuffix() {
        const { renderSuffix } = props;
        if (!renderSuffix) return;
        return renderSuffix();
    }

    function renderInput() {
        const { inputProps } = props;
        return <Input {...inputProps} />;
    }

    return (
        <div className={getBaseClassname()}>
            {renderPrefix()}
            {renderInput()}
            {renderSuffix()}
        </div>
    );
};

export default InputGroup;
