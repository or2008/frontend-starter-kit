import { FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export interface CardProps {
    className?: string;
}

const Card: FC<PropsWithChildren<CardProps>> = props => {
    const { children, className = '' } = props;

    function getBaseClassname() {
        return twMerge('bg-white border border-gray-200 rounded-lg shadow p-4 dark:bg-gray-800 dark:border-gray-700', className);
    }

    return (
        <div className={getBaseClassname()}>
            {children}
        </div>
    );
};

export default Card;
