import { useDynamicSvgImport } from '@/hooks/use-dynamic-svg-import';
import { FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export interface IconProps {
  iconName: string;
  className?: string;
  svgProps?: React.SVGProps<SVGSVGElement>;
}

const Icon: FC<PropsWithChildren<IconProps>> = props => {
    const { iconName, className, svgProps } = props;
    const { isLoading, SvgIcon } = useDynamicSvgImport(iconName);

    return (
        <>
            {isLoading && (
                <div className={twMerge('h-8 w-8', className)} />
            )}
            {SvgIcon && (
                <div className={twMerge(className)}>
                    <SvgIcon {...svgProps} />
                </div>
            )}
        </>
    );
};

export default Icon;
