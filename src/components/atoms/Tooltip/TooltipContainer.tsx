import useHover from '@/hooks/use-hover';
import { FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export interface TooltipContainerProps {
    className?: string;
}

const TooltipContainer: FC<PropsWithChildren<TooltipContainerProps>> = props => {
    const { children, className = ''} = props;

    const { bindHover, isHover } = useHover();

    function getBaseClassname() {
        return twMerge(`transition relative
        [&>.tooltip]:absolute [&>.tooltip]:invisible [&>.tooltip]:opacity-0 inline-block`,
        isHover && '[&>.tooltip]:visible [&>.tooltip]:opacity-100',
        className);
    }


    return (
        <div {...bindHover} className={getBaseClassname()}>
            {children}
        </div>
    );
};

export default TooltipContainer;
