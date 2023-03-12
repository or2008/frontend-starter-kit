import { FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export type TooltipPosition = 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right' | 'left' | 'right';
export interface TooltipProps {
    className?: string;
    position?: TooltipPosition;
}

const Tooltip: FC<PropsWithChildren<TooltipProps>> = props => {
    const { position = 'top', children, className = ''} = props;

    function getPositionClassname() {
        if (position === 'top') return 'bottom-full left-1/2 -translate-x-1/2';
    }

    function getBaseClassname() {
        return twMerge(`tooltip transition max-w-max text-gray-900 dark:text-gray-50 text-xs text-center
        border border-gray-200 rounded-lg shadow dark:border-gray-700 rounded-lg bg-white
        dark:bg-gray-900 p-3 shadow`,
        getPositionClassname(),
        className);
    }

    return (
        <div className={getBaseClassname()} role="tooltip">
            {children}
        </div>
    );
};

export default Tooltip;
