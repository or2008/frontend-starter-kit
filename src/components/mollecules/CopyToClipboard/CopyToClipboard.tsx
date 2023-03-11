import Icon from '@/components/atoms/Icon/Icon';
import Tooltip, { TooltipProps } from '@/components/atoms/Tooltip/Tooltip';
import Text from '@/components/atoms/Text/Text';
import { FC, PropsWithChildren, useCallback, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { copyTextToClipboard } from '@/utils/string';

export interface CopyToClipboardProps {
    className?: string;
    textToCopy: string;
    successMessage?: string;
    tooltipProps?: TooltipProps;
}

const CopyToClipboard: FC<PropsWithChildren<CopyToClipboardProps>> = props => {
    const { children, className = ''} = props;

    const [isTooltipVisible, setIsTooltipVisible] = useState(false);
    const [isSuccess, setIsSuccess] = useState<null | boolean>(null);

    function getBaseClassname() {
        return twMerge('flex items-center cursor-pointer', className);
    }


    async function copyToClipboard(): Promise<void> {
        const { textToCopy } = props;
        const isSuccess = await copyTextToClipboard(textToCopy);

        setIsTooltipVisible(true);
        setIsSuccess(isSuccess);

        setTimeout(() => {
            setIsTooltipVisible(false);
            setIsSuccess(null);
        }, 1000);
    }

    const onClick = useCallback(() => {
        copyToClipboard();
    }, []);

    function renderTooltip() {
        const { successMessage, tooltipProps = {} } = props;
        if (!isTooltipVisible) return;
        return (
            <Tooltip position="top" {...tooltipProps}>
                <Text>{successMessage || 'Copied to clipboard'}</Text>
            </Tooltip>
        );
    }

    return (
        <div className={getBaseClassname()} onClick={onClick}>
            <Icon className="w-[1.5em] h-[1.5em] mr-1" iconName="square-2-stack" />
            {children}
            {renderTooltip()}
        </div>
    );
};

export default CopyToClipboard;
