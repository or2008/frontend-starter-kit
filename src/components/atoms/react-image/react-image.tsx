import { type FC, type MouseEvent as ReactMouseEvent } from 'react';
import { twMerge } from 'tailwind-merge';

import { noop } from '@/utils/function';
import useImageExists from '@/hooks/use-image-exists';

export interface ImageProps {
    className?: string;
    onClick?: (event: ReactMouseEvent<HTMLElement>) => void;
    height?: string;
    width?: string;
    src: string;
    backgroundSize?: string;
    renderAs?: 'background' | 'img';
    fallbackImage?: string;
}

export const ReactImage: FC<ImageProps> = props => {
    const { src: source, onClick = noop, renderAs = 'img', className = '' } = props;

    const { imageExistsStatus } = useImageExists(source);

    function renderAsBackground() {
        const { backgroundSize } = props;

        return <div className={twMerge('', className)} onClick={onClick} />;
    }

    function getSource() {
        const { fallbackImage = '' } = props;
        if (imageExistsStatus === 'non-exists') return fallbackImage;
        return source;
    }

    function renderAsImage() {
        return <img alt='' className={twMerge('transition', className)} onClick={onClick} src={getSource()} />;
    }

    if (renderAs === 'background')
        return renderAsBackground();

    return renderAsImage();
};
