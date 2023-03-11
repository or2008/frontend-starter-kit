import { noop } from '@/utils/function';
import { FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import Text from '../../atoms/Text/Text';

export type ButtonSize = 'xs' | 'sm' | 'base' | 'large' | 'xl';
export type ButtonType = 'primary' | 'alternative' | 'info' | 'danger' | 'success' | 'warning' | 'normal';

export interface ButtonProps {
    className?: string;
    size?: ButtonSize;
    type?: ButtonType;
    text?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<PropsWithChildren<ButtonProps>> = props => {
    const { onClick = noop, children, className = '' } = props;

    function getSizeClassname() {
        const { size = 'base' } = props;

        if (size === 'xs') return 'px-3 py-2 text-xs font-medium rounded-sm';
        if (size === 'sm') return 'px-3 py-2 text-sm font-medium rounded-sm';
        if (size === 'base') return 'px-5 py-2.5 text-sm font-medium rounded-md';
        if (size === 'large') return 'px-5 py-3 text-base font-medium rounded-lg';
        if (size === 'xl') return 'px-6 py-3.5 text-base font-medium rounded-lg';
    }

    function getTypeClassname() {
        const { type = 'primary' } = props;

        if (type === 'primary') {
            return `text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300
            dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800`;
        }

        if (type === 'alternative') {
            return `text-gray-900 focus:outline-none bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700
            focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700
            dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700`;
        }

        if (type === 'success') {
            return `text-white bg-green-700 hover:bg-green-800
            focus:ring-4 focus:outline-none focus:ring-green-300
            dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800`;
        }

        if (type === 'danger') {
            return `text-white bg-red-700 hover:bg-red-800
            focus:ring-4 focus:outline-none focus:ring-red-300
            dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800`;
        }

        if (type === 'warning') {
            return `text-white bg-yellow-700 hover:bg-yellow-800
            focus:ring-4 focus:outline-none focus:ring-yellow-300
            dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800`;
        }
    }

    function getBaseClassname() {
        return twMerge('transition', getSizeClassname(), getTypeClassname(), className);
    }

    function renderText() {
        const { text = '' } = props;
        if (!text) return;
        return <Text className="leading-none">{text}</Text>;
    }
    return (
        <button className={getBaseClassname()} onClick={onClick} type="button">
            {renderText()}
            {children}
        </button>
    );
};

export default Button;
