import { noop } from '@/utils/function';
import { EventHandler, FC, MouseEventHandler, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export interface TextProps {
    className?: string;
    dir?: 'auto' | 'ltr' | 'rtl';
    onClick?: (event: React.MouseEvent<HTMLSpanElement>) => void;
    isTruncate?: boolean;
}

const Text: FC<PropsWithChildren<TextProps>> = props => {
    const { onClick = noop, children, className = '', dir = 'ltr' } = props;

    function getBaseClassname() {
        const { isTruncate = false } = props;
        let _className = '';
        if (isTruncate)
            _className += 'truncate';

        return twMerge('', _className, className);
    }

    // function getMultilineClassname() {
    //     return 'whitespace-nowrap';
    // }

    return (
        <span className={getBaseClassname()} dir={dir} onClick={onClick}>
            {children}
        </span>
    );
};

export default Text;
