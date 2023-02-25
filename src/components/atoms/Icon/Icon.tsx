import { useDynamicSvgImport } from "@/hooks/use-dynamic-svg-import";
import { FC, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export interface IconProps {
  iconName: string;
  className?: string;
  svgProps?: React.SVGProps<SVGSVGElement>;
}

const Icon: FC<PropsWithChildren<IconProps>> = props => {
  const { iconName, className, svgProps } = props;
  const { loading, SvgIcon } = useDynamicSvgImport(iconName);

  return (
    <>
      {loading && (
        <div className="rounded-full bg-slate-400 animate-pulse h-8 w-8"></div>
      )}
      {SvgIcon && (
        <div className={twMerge(className)}>
          <SvgIcon {...svgProps} />
        </div>
      )}
    </>
  );
}

export default Icon;
