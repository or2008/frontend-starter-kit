import { noop } from '@/utils/function';
import { FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import Text from '../../atoms/Text/Text';
import Icon from '../Icon/Icon';

export type AlertType = 'info' | 'danger' | 'success' | 'warning' | 'normal';

export interface AlertProps {
    className?: string;
    type?: AlertType;
    text?: string;
    showIcon?: boolean;
}

const Alert: FC<PropsWithChildren<AlertProps>> = props => {
    const { type = 'info', children, className = '' } = props;

    function getTypeClassname() {
        if (type === 'info')
            return 'text-blue-800 bg-blue-50 dark:bg-gray-900 dark:text-blue-400';


        if (type === 'normal')
            return 'text-gray-800 bg-gray-50 dark:bg-gray-900 dark:text-gray-300';


        if (type === 'success')
            return 'text-green-800 bg-green-50 dark:bg-gray-900 dark:text-green-400';


        if (type === 'danger')
            return 'text-red-800 bg-red-50 dark:bg-gray-900 dark:text-red-400';


        if (type === 'warning')
            return 'text-yellow-800 bg-yellow-50 dark:bg-gray-900 dark:text-yellow-300';
    }

    function getIconName() {
        if (type === 'info') return 'info';
        if (type === 'danger') return 'exclamation-triangle';
        if (type === 'warning') return 'exclamation-triangle';
        return 'info';
    }

    function getBaseClassname() {
        return twMerge('transition flex text-sm p-4 rounded-lg', getTypeClassname(), className);
    }

    function renderIcon() {
        const { showIcon = false } = props;
        if (!showIcon) return;
        return <Icon className="flex-shrink-0 block w-5 h-5 mr-3" iconName={getIconName()} />;
    }

    function renderText() {
        const { text = '' } = props;
        if (!text) return;
        return <Text className="">{text}</Text>;
    }

    return (
        <div className={getBaseClassname()} role="alert">
            {renderIcon()}
            {renderText()}
            {children}
        </div>
    );
};

export default Alert;
